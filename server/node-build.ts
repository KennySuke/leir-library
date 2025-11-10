import path from "path";
import { createServer } from "./index"; // твоя функция для app
import express from "express";

const app = createServer();
const port = process.env.PORT || 3000;

// Путь к собранной SPA
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");

// Статика для SPA
app.use(express.static(distPath, { index: false }));

// API маршруты здесь
// Например:
// app.use("/api", apiRouter);

// Catch-all для SPA
app.use((req, res, next) => {
  // Пропускаем API и health check
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return next(); // 404 дальше
  }

  // Отправляем index.html для SPA
  res.sendFile(path.join(distPath, "index.html"), (err) => {
    if (err) {
      next(err);
    }
  });
});

// Сервер
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
