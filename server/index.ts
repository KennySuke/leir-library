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
  app.get('/api/camera/:id', async (req, res) => {
  try {
    const url = `http://93.157.173.6:8080/${req.params.id}/embed.html?realtime`

    const response = await fetch(url)
    const html = await response.text()

    res.setHeader('Content-Type', 'text/html')
    res.send(html)

  } catch (e) {
    console.error(e)
    res.status(500).send('Camera proxy failed')
  }
})


  app.post("/api/notify-telegram", handleTelegramNotification);

  return app;
}
