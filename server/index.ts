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

  
  app.use('/api/camera/flu/*catchall', async (req, res) => {
    const path = (Array.isArray(req.params.catchall) ? req.params.catchall.join('/') : req.params.catchall) || ''
    const queryString = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''
    const upstreamUrl = `http://93.157.173.6:8080/flu/${path}${queryString}`

    console.log('[FLU PROXY] Request for:', req.url)
    console.log('[FLU PROXY] Upstream URL:', upstreamUrl)

    try {
      const upstream = await fetch(upstreamUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } })
      console.log('[FLU PROXY] Upstream status:', upstream.status)

      const contentType = upstream.headers.get('content-type')
      console.log('[FLU PROXY] Content-Type:', contentType)
      if (contentType) res.setHeader('Content-Type', contentType)

      if (!upstream.body) {
        console.error('[FLU PROXY] No upstream body for', upstreamUrl)
        res.status(500).send('No upstream body')
        return
      }

      const nodeStream = Readable.from(upstream.body)
      nodeStream.pipe(res)
    } catch (err) {
      console.error('[FLU PROXY] Error proxying:', err)
      res.status(500).send('Proxy failed')
    }
  })
    
  app.use('/api/camera/:id/*catchall', async (req, res) => {
    const path = req.params.catchall || ''
    const upstreamUrl = `http://93.157.173.6:8080/${req.params.id}/${path}${req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''}`

    const upstream = await fetch(upstreamUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    const contentType = upstream.headers.get('content-type')
    if (contentType) res.setHeader('Content-Type', contentType)

    if (contentType?.includes('text/html')) {
      let body = await upstream.text()
      body = body.replace(/(src|href)="\/flu\/([^"]+)"/g, `$1="/api/camera/flu/$2"`)
      res.send(body)
    } else {
      const nodeStream = Readable.from(upstream.body)
      nodeStream.pipe(res)
    }
  })

  app.use('/:id/*', async (req, res) => {
    const id = req.params.id       // 27
    const path = req.params[0] || ''  // всё, что после /27/
    const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''
    const upstreamUrl = `http://93.157.173.6:8080/${id}/${path}${query}`

    console.log('[ROOT CAMERA PROXY] Request for:', req.url)
    console.log('[ROOT CAMERA PROXY] Upstream URL:', upstreamUrl)

    try {
      const upstream = await fetch(upstreamUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } })
      if (!upstream.body) return res.status(500).send('No upstream body')
      const contentType = upstream.headers.get('content-type')
      if (contentType) res.setHeader('Content-Type', contentType)
      Readable.from(upstream.body).pipe(res)
    } catch (err) {
      console.error('[ROOT CAMERA PROXY] Error proxying:', err)
      res.status(500).send('Proxy failed')
    }
  })

  app.post("/api/notify-telegram", handleTelegramNotification);

  return app;
}
