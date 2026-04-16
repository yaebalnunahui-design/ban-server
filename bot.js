const TelegramBot = require("node-telegram-bot-api");
const { setBot } = require("./server");

const token = process.env.8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk;

const bot = new TelegramBot(token, { polling: true });

setBot(bot);

bot.on("message", (msg) => {
  process.env.ADMIN_CHAT_ID = msg.chat.id;
  bot.sendMessage(msg.chat.id, "бот активен ✅");
});

bot.on("callback_query", (q) => {
  const [type, id] = q.data.split("_");

  console.log("ACTION:", type, id);

  bot.answerCallbackQuery(q.id, {
    text: `${type} done`
  });
});

console.log("Bot started");
