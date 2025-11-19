/**
 * Telegram Bot Configuration
 * 
 * To set up Telegram notifications:
 * 1. Create a bot via @BotFather in Telegram
 * 2. Get your bot token
 * 3. Get your chat ID by messaging @userinfobot or @IDBot
 * 4. Fill in the values below
 * 
 * You can also set these as environment variables:
 * - VITE_TELEGRAM_BOT_TOKEN
 * - VITE_TELEGRAM_CHAT_ID
 */

export const telegramConfig = {
  botToken: process.env.VITE_TELEGRAM_BOT_TOKEN || "8290557189:AAHjWiJuwjbmhF0_0A-6AllwHfUOkgWerfU",
  chatId: process.env.VITE_TELEGRAM_CHAT_ID || "295500707",
  apiUrl: "https://api.telegram.org",
};

export function isTelegramConfigured(): boolean {
  return !!(telegramConfig.botToken && telegramConfig.chatId);
}
