const TelegramBot = require("node-telegram-bot-api");

const token = process.env.8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk;

console.log("START FILE");
console.log("TOKEN EXISTS:", !!token);

const bot = new TelegramBot(token, { polling: true });

bot.on("polling_error", (e) => {
  console.log("POLL ERROR:", e.message);
});

bot.on("message", (msg) => {
  console.log("MESSAGE RECEIVED:", msg.text);

  bot.sendMessage(msg.chat.id, "OK WORKING");
});

console.log("BOT STARTED");
