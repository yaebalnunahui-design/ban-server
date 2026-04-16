const TelegramBot = require("node-telegram-bot-api");

const token = "8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk";

console.log("START FILE");

const bot = new TelegramBot(token, {
  polling: {
    interval: 1000,
    autoStart: true
  }
});

bot.on("message", (msg) => {
  console.log("MESSAGE:", msg.text);

  bot.sendMessage(msg.chat.id, "работаю ✅");
});

console.log("BOT LOADED");
