import { Request, Response } from "express";

export function cameraRoute(req: Request, res: Response) {
  const { id } = req.params;

  const cameraUrl = `http://93.157.173.6:8080/${id}/?realtime&token=3685696e50cfb8c8c`;

  fetch(cameraUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "*/*",
    },
  })
    .then(upstream => {
      res.setHeader(
        "Content-Type",
        upstream.headers.get("content-type") || "application/octet-stream"
      );
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");

      if (!upstream.body) {
        res.status(500).end("No stream");
        return;
      }

      upstream.body.pipe(res);
    })
    .catch(err => {
      console.error("Camera proxy error:", err);
      res.status(500).end("Camera error");
    });
}
