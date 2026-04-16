const TelegramBot = require("node-telegram-bot-api");

const token = "8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk";

console.log("BOOT START");

const bot = new TelegramBot(token, {
  polling: {
    interval: 2000,
    autoStart: true
  }
});

bot.on("polling_error", (err) => {
  console.log("POLL ERROR:", err.code, err.message);
});

bot.on("message", (msg) => {
  console.log("MSG RECEIVED:", msg.text);

  bot.sendMessage(msg.chat.id, "бот живой ✅");
});

console.log("BOT READY");
