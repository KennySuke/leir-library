import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { isTelegramConfigured } from "./shared/telegram-config";

interface VisitorData {
  timestamp: string;
  page: string;
  userAgent: string;
  language: string;
  timezone: string;
  screen: string;
  referrer: string;
}

async function sendTelegramNotification(
  botToken: string,
  chatId: string,
  visitorData: VisitorData
) {
  const message = formatVisitorMessage(visitorData);

  try {
    const response = await fetch("/api/notify-telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        botToken,
        chatId,
        message,
      }),
    });

    if (!response.ok) {
      console.error("Failed to send Telegram notification:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
  }
}

function formatVisitorMessage(data: VisitorData): string {
  return `
<b>🌐 Зашел на сайт</b>

<b>📍 Страница:</b> ${data.page}
<b>⏰ Время:</b> ${data.timestamp}

<b>📱 Браузер:</b> ${data.userAgent}
<b>🌍 Язык:</b> ${data.language}
<b>⌚ Часовой пояс:</b> ${data.timezone}
<b>📺 Экран:</b> ${data.screen}
<b>🔗 Referrer:</b> ${data.referrer || "прямой переход"}
  `.trim();
}

function gatherVisitorData(currentPath: string): VisitorData {
  const now = new Date();
  const timestamp = now.toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const language = navigator.language;
  const userAgent = navigator.userAgent;
  const screen = `${window.innerWidth}x${window.innerHeight}`;
  const referrer = document.referrer;

  return {
    timestamp,
    page: currentPath,
    userAgent,
    language,
    timezone,
    screen,
    referrer,
  };
}

export function useTelegramVisitorTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!isTelegramConfigured()) {
      return;
    }

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return;
    }

    const visitorData = gatherVisitorData(location.pathname);
    sendTelegramNotification(botToken, chatId, visitorData);
  }, [location.pathname]);
}
