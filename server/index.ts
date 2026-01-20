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
    
  app.use('/api/camera/:id/*catchall', async (req, res) => {
    const path = req.params.catchall || ''
    const upstreamUrl = `http://93.157.173.6:8080/${req.params.id}/${path}${req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''}`

    const upstream = await fetch(upstreamUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    const contentType = upstream.headers.get('content-type')
    if (contentType) res.setHeader('Content-Type', contentType)

    if (contentType?.includes('text/html')) {
      let body = await upstream.text()
      body = body.replace(/(src|href)="\/flu\//g, `$1=/api/camera/${req.params.id}/flu/`)
      res.send(body)
    } else {
      const nodeStream = Readable.from(upstream.body)
      nodeStream.pipe(res)
    }
  })

  app.post("/api/notify-telegram", handleTelegramNotification);

  return app;
}
