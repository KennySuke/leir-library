import "dotenv/config";
import express from "express";
import cors from "cors";
import http from "http";
import httpProxy from "http-proxy";
import { handleDemo } from "./routes/demo";
import { handleTelegramNotification } from "./routes/telegram";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/ping", (_req, res) => {
    res.json({ message: process.env.PING_MESSAGE ?? "ping" });
  });

  app.get("/api/demo", handleDemo);

  // HTTP-прокси embed.html
  app.get('/api/camera/:id/embed.html', async (req, res) => {
    const token = req.query.token ?? '';
    const upstreamUrl = `http://93.157.173.6:8080/${req.params.id}/embed.html?realtime&token=${token}`;
    const upstream = await fetch(upstreamUrl);
    let html = await upstream.text();

    html = html.replace(/(src|href)="\/flu\//g, '$1="/api/camera/flu/');

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });

  // HTTP-прокси JS/CSS
  app.use('/api/camera/flu/', async (req, res) => {
    try {
      const upstreamUrl = `http://93.157.173.6:8080/flu${req.url}`;
      const upstream = await fetch(upstreamUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Referer': `http://93.157.173.6:8080/27/embed.html?realtime&token=3685696e50cfb8c8c`
        }
      });

      if (!upstream.body) {
        res.status(500).end('No upstream body');
        return;
      }

      upstream.headers.forEach((v, k) => res.setHeader(k, v));
      upstream.body.pipe(res); // pipe directly, не Readable.from
    } catch (err) {
      console.error('Error proxying flu:', err);
      res.status(500).end('Camera resource proxy failed');
    }
  });

  // WebSocket-прокси
  const wsProxy = httpProxy.createProxyServer({ target: 'http://93.157.173.6:8080', ws: true });

  const server = http.createServer(app);

  server.on('upgrade', (req, socket, head) => {
    if (req.url?.startsWith('/api/camera/27/mse_ld')) {
      // переписываем путь для камеры
      req.url = `/27/mse_ld${req.url.slice('/api/camera/27/mse_ld'.length)}`;
      wsProxy.ws(req, socket, head);
      console.log('WS proxied to camera:', req.url);
    }
  });

  server.listen(3000, () => console.log('Server running on port 3000'));

  return server;
}
