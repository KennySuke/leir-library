import "dotenv/config";
import express from "express";
import cors from "cors";
import http from "http";
import httpProxy from "http-proxy";

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // HTTP-прокси embed.html
  app.get('/api/camera/:id/embed.html', async (req, res) => {
    const token = req.query.token ?? '';
    const upstreamUrl = `http://93.157.173.6:8080/${req.params.id}/embed.html?realtime&token=${token}`;
    const upstream = await fetch(upstreamUrl);
    let html = await upstream.text();
    html = html.replace(/(src|href)="\/flu\//g, '$1="/api/camera/flu/"');
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });

  app.use('/api/camera/flu/', async (req, res) => {
  try {
    // req.url: /player/runtime.js
    const upstreamPath = req.url; 
    const upstreamUrl = `http://93.157.173.6:8080/flu${upstreamPath}`;
    console.log('Proxying to upstream:', upstreamUrl);

    const upstream = await fetch(upstreamUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'http://93.157.173.6:8080/27/embed.html?realtime'
      }
    });

    if (!upstream.ok) {
      console.error('Upstream error', upstream.status, upstream.statusText);
      res.status(500).end('Upstream error');
      return;
    }

    // Content-Type обязательно указывать вручную для JS/CSS
    const contentType = upstream.headers.get('content-type') || guessMime(upstreamPath);
    res.setHeader('Content-Type', contentType);

    // Пробрасываем поток
    const nodeStream = Readable.from(upstream.body);
    nodeStream.pipe(res);

  } catch (err) {
    console.error('Error proxying flu:', err);
    res.status(500).end('Camera resource proxy failed');
  }
});

// простая функция для MIME, если upstream не отдал
function guessMime(path: string) {
  if (path.endsWith('.js')) return 'application/javascript';
  if (path.endsWith('.css')) return 'text/css';
  if (path.endsWith('.html')) return 'text/html';
  return 'application/octet-stream';
}


  // Telegram demo
  app.post("/api/notify-telegram", (_req, res) => res.end("ok"));

  return app;
}

// === отдельно запускаем HTTP-сервер для WebSocket ===
export function startWsProxy(app: express.Express) {
  const wsProxy = httpProxy.createProxyServer({ target: 'http://93.157.173.6:8080', ws: true });
  const server = http.createServer(app);

  server.on('upgrade', (req, socket, head) => {
    if (req.url?.startsWith('/api/camera/27/mse_ld')) {
      req.url = `/27/mse_ld${req.url.slice('/api/camera/27/mse_ld'.length)}`;
      wsProxy.ws(req, socket, head);
      console.log('WS proxied to camera:', req.url);
    }
  });

  server.listen(3000, () => console.log('HTTP + WS server running on port 3000'));
  return server;
}
