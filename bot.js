const TelegramBot = require("node-telegram-bot-api");

const token = "8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk";

const bot = new TelegramBot(token, { polling: true });

// тест команды
bot.onText(/\/test/, (msg) => {
  bot.sendMessage(msg.chat.id, "🆕 Новый Лог", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🚫 Бан", callback_data: "ban_123" },
          { text: "✅ Разбан", callback_data: "unban_123" }
        ],
        [
          { text: "➡️ СМС/КОД", callback_data: "allow_123" }
        ]
      ]
    }
  });
});

// кнопки (пока просто лог)
bot.on("callback_query", (q) => {
  console.log("CLICK:", q.data);
  bot.answerCallbackQuery(q.id);
});

console.log("Bot started");
