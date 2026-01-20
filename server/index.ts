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
  console.log('Proxy embed.html request to upstream:', upstreamUrl);

  const upstream = await fetch(upstreamUrl);
  const html = await upstream.text();
  console.log('Upstream embed.html status:', upstream.status);
  console.log('Upstream embed.html starts with:', html.slice(0,200));

  const modifiedHtml = html.replace(/(src|href)="\/flu\//g, '$1="/api/camera/flu/');
  res.setHeader('Content-Type', 'text/html');
  res.send(modifiedHtml);
});


app.use('/api/camera/flu/', async (req, res) => {
  const upstreamUrl = `http://93.157.173.6:8080/flu${req.url}`;
  console.log('Proxy request to upstream:', upstreamUrl);

  try {
    const upstream = await fetch(upstreamUrl);

    console.log('Upstream status:', upstream.status);

    // заголовки
    upstream.headers.forEach((v, k) => console.log('Header', k, v));

    if (!upstream.body) {
      console.error('No body from upstream');
      res.status(500).end('No upstream body');
      return;
    }

    // читать первые 200 символов тела, чтобы убедиться, что это JS, а не HTML
    const clone = upstream.clone();
    const snippet = await clone.text();
    console.log('Upstream body starts with:', snippet.slice(0, 200));

    upstream.body.pipe(res);
  } catch (err) {
    console.error('Error proxying flu:', err);
    res.status(500).end('Camera resource proxy failed');
  }
});


  app.post("/api/notify-telegram", handleTelegramNotification);

  return app;
}
