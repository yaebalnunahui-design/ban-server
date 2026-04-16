const TelegramBot = require("node-telegram-bot-api");

const token = "8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk";

console.log("Bot file loaded");

const bot = new TelegramBot(token, {
  polling: {
    autoStart: true,
    interval: 1000
  }
});

// защита от ошибок polling
bot.on("polling_error", (err) => {
  console.log("POLL ERROR:", err.message);
});

// любое сообщение
bot.on("message", (msg) => {
  console.log("MSG:", msg.text);

  bot.sendMessage(msg.chat.id, "бот работает ✅");
});

console.log("Bot started");
