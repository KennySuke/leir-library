import { Request, Response } from "express";

export async function cameraRoute(req: Request, res: Response) {
  const { id } = req.params;

  const cameraUrl =
    `http://93.157.173.6:8080/${id}/embed.html?realtime&token=3685696e50cfb8c8c`;

  try {
    const upstream = await fetch(cameraUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "text/html,*/*",
        "Referer": "http://93.157.173.6:8080/",
      },
    });

    if (!upstream.body) {
      res.status(500).end("No upstream body");
      return;
    }

    // пробрасываем content-type как есть
    const contentType = upstream.headers.get("content-type");

    if (contentType) {
      res.setHeader("Content-Type", contentType);
    }

    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    upstream.body.pipe(res);
  } catch (err: any) {
   console.error("Camera proxy error:");
   console.error(err);
   console.error("message:", err?.message);
   console.error("cause:", err?.cause);
    res.status(500).end("Camera proxy failed");
  }

}
