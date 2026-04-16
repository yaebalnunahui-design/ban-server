const TelegramBot = require("node-telegram-bot-api");

const token = "8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "работаю ✅");
});

console.log("Bot started");
