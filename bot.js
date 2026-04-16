const TelegramBot = require("node-telegram-bot-api");

const token = "8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk";

const bot = new TelegramBot(token, {
  polling: {
    autoStart: true,
    interval: 1000
  }
});

bot.on("polling_error", (err) => {
  console.log("POLL ERROR:", err.message);
});

bot.on("message", (msg) => {
  console.log("MSG:", msg.text);

  bot.sendMessage(msg.chat.id, "бот работает ✅");
});

console.log("Bot started");
