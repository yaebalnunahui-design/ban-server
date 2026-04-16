const TelegramBot = require("node-telegram-bot-api");

const token = process.env.8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk;

// создаём бот
const bot = new TelegramBot(token, { polling: true });

console.log("Bot started");

// любое сообщение
bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "бот работает ✅");
});

// команда теста заявки с кнопками
bot.onText(/\/test/, (msg) => {
  bot.sendMessage(msg.chat.id, "🆕 Заявка", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🚫 Бан", callback_data: "ban_1" },
          { text: "✅ Разбан", callback_data: "unban_1" }
        ],
        [
          { text: "➡️ Разрешить", callback_data: "allow_1" }
        ]
      ]
    }
  });
});

// обработка кнопок
bot.on("callback_query", (q) => {
  console.log("CLICK:", q.data);

  bot.answerCallbackQuery(q.id, {
    text: "готово"
  });
});
