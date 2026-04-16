const TelegramBot = require("node-telegram-bot-api");

const token = process.env.8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk;

const bot = new TelegramBot(token, { polling: true });

console.log("BOT STARTED");

// тест заявки
bot.onText(/\/test/, (msg) => {
  bot.sendMessage(msg.chat.id, "🆕 Заявка №123", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🚫 Бан", callback_data: "ban_123" },
          { text: "✅ Разбан", callback_data: "unban_123" }
        ],
        [
          { text: "➡️ Разрешить", callback_data: "allow_123" }
        ]
      ]
    }
  });
});

// клики по кнопкам
bot.on("callback_query", (q) => {
  console.log("CLICK:", q.data);

  let text = "ok";

  if (q.data.startsWith("ban")) text = "🚫 забанено";
  if (q.data.startsWith("unban")) text = "✅ разбан";
  if (q.data.startsWith("allow")) text = "➡️ разрешено";

  bot.answerCallbackQuery(q.id, { text });
});
