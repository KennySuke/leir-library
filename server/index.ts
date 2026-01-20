import "dotenv/config";
import express from "express";
import cors from "cors";
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

// проксируем все JS/CSS файлы
app.use('/api/camera/flu/', async (req, res) => {
  const upstreamUrl = `http://93.157.173.6:8080/flu${req.url}`;

  const upstream = await fetch(upstreamUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Referer': `http://93.157.173.6:8080/27/embed.html?realtime&token=3685696e50cfb8c8c`
    }
  });

  upstream.headers.forEach((v, k) => res.setHeader(k, v));

  if (!upstream.body) {
    res.status(500).end('No upstream body');
    return;
  }

  upstream.body.pipe(res);
});



  app.post("/api/notify-telegram", handleTelegramNotification);

  return app;
}
