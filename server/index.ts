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
  
  app.get('/api/camera/:id/embed.html', async (req, res) => {
    const token = req.query.token ?? '';
    const upstreamUrl = `http://93.157.173.6:8080/${req.params.id}/embed.html?realtime&token=${token}`;

    const upstream = await fetch(upstreamUrl);
    let html = await upstream.text();

    // Заменяем абсолютные пути к JS/CSS на наш прокси
    html = html
      .replace(/src="\/flu\//g, 'src="/api/camera/flu/')
      .replace(/href="\/flu\//g, 'href="/api/camera/flu/');

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });

  app.use('/api/camera/flu/', async (req, res) => {
    const upstreamUrl = `http://93.157.173.6:8080/flu/${req.url}`;

    const upstream = await fetch(upstreamUrl);

    // Пробрасываем Content-Type, иначе браузер думает, что это HTML
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
