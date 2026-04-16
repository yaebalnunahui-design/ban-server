const TelegramBot = require("node-telegram-bot-api");

const token = "8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk";

const bot = new TelegramBot(token, {
  polling: { autoStart: true }
});

// сохраняем глобально для server.js
global.bot = bot;
global.adminChatId = null;

bot.on("message", (msg) => {
  global.adminChatId = msg.chat.id;

  bot.sendMessage(msg.chat.id, "бот активен ✅");
});

// кнопки обработки
bot.on("callback_query", async (q) => {
  const [type, id] = q.data.split("_");

  let action = "";

  if (type === "ban") action = "banned";
  if (type === "unban") action = "unbanned";
  if (type === "allow") action = "allowed";

  // отправка на сервер
  await fetch("http://localhost:3000/action", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, action })
  });

  bot.answerCallbackQuery(q.id, {
    text: `Готово: ${action}`
  });
});

console.log("Bot started");
