import "dotenv/config";
import express from "express";
import cors from "cors";
import httpProxy from "http-proxy";
const { createProxyServer } = httpProxy;
import { Readable } from "stream";
import { handleDemo } from "./routes/demo";
import { handleTelegramNotification } from "./routes/telegram";
import { cameraRoute } from "./routes/camera";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  

const wsProxy = createProxyServer({
  target: 'http://93.157.173.6:8080',
  ws: true
});

// прокси для WebSocket
app.on('upgrade', (req, socket, head) => {
  if (req.url?.startsWith('/api/camera/27/mse_ld')) {
    wsProxy.ws(req, socket, head);
  }
});
  
  // проксируем embed.html
app.get('/api/camera/:id/embed.html', async (req, res) => {
  const token = req.query.token ?? '';
  const upstreamUrl = `http://93.157.173.6:8080/${req.params.id}/embed.html?realtime&token=${token}`;

  const upstream = await fetch(upstreamUrl);
  let html = await upstream.text();

  // переписываем пути к JS/CSS
  html = html
    .replace(/(src|href)="\/flu\//g, '$1="/api/camera/flu/');

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

app.use('/api/camera/flu/', async (req, res) => {
  try {
    const upstreamPath = req.url; // /player/runtime.js
    const upstreamUrl = `http://93.157.173.6:8080/flu${upstreamPath}`;
    console.log('Proxying to upstream:', upstreamUrl);

    const upstream = await fetch(upstreamUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Referer': `http://93.157.173.6:8080/27/embed.html?realtime&token=3685696e50cfb8c8c`
      }
    });

    console.log('Upstream status:', upstream.status);

    if (!upstream.body) {
      console.error('No upstream body for', upstreamUrl);
      res.status(500).end('No upstream body');
      return;
    }

    // Пробрасываем Content-Type
    const contentType = upstream.headers.get('content-type');
    if (contentType) res.setHeader('Content-Type', contentType);

    // Конвертируем WHATWG stream в Node.js stream
    const nodeStream = Readable.from(upstream.body);
    nodeStream.pipe(res);

  } catch (err) {
    console.error('Error proxying flu:', err);
    res.status(500).end('Camera resource proxy failed');
  }
});

  app.post("/api/notify-telegram", handleTelegramNotification);

  return app;
}
