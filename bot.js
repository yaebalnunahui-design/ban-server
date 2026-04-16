const TelegramBot = require("node-telegram-bot-api");

const token = "8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk";

const bot = new TelegramBot(token, { polling: true });

function sendToAdmin(chatId, clientId, text) {
  bot.sendMessage(chatId,
`🆕 Заявка

ID: ${clientId}
${text}`,
  {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🚫 Бан", callback_data: "ban_" + clientId },
          { text: "✅ Разбан", callback_data: "unban_" + clientId }
        ],
        [
          { text: "➡️ СМС/КОД", callback_data: "allow_" + clientId }
        ]
      ]
    }
  });
}

bot.on("callback_query", (q) => {
  const data = q.data;
  const id = data.split("_")[1];

  if (data.startsWith("ban_")) {
    console.log("ban", id);
  }

  if (data.startsWith("unban_")) {
    console.log("unban", id);
  }

  if (data.startsWith("allow_")) {
    console.log("allow", id);
  }

  bot.answerCallbackQuery(q.id);
});

console.log("Bot started with buttons");
