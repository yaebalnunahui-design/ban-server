const TelegramBot = require("node-telegram-bot-api");

const token = "8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  console.log("MSG:", msg.text);

  bot.sendMessage(msg.chat.id, "Я вижу сообщение ✅: " + msg.text);
});

console.log("Bot started");
