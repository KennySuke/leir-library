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
  const token = req.query.token || ''; // передаём токен из запроса
  const url = `http://93.157.173.6:8080/${req.params.id}/embed.html?realtime&token=${token}`;

  const response = await fetch(url);
  let html = await response.text();

  // тут переписываем пути к JS/CSS на наш прокси
  html = html
    .replace(/src="\/flu\//g, 'src="/api/camera/flu/')
    .replace(/href="\/flu\//g, 'href="/api/camera/flu/');

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

// проксируем весь /flu/ каталог на лету
app.use('/api/camera/flu/', (req, res) => {
  const upstreamUrl = `http://93.157.173.6:8080/flu/${req.url}`;
  fetch(upstreamUrl)
    .then(r => {
      r.headers.forEach((v, k) => res.setHeader(k, v));
      return r.body;
    })
    .then(body => {
      if (body) body.pipe(res);
    })
    .catch(() => res.status(500).send('Camera resource proxy failed'));
});



  app.post("/api/notify-telegram", handleTelegramNotification);

  return app;
}
