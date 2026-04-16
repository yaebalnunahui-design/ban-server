const express = require("express");
const app = express();

app.use(express.json());

// хранилище в памяти (пока простое)
let banned = [];
let allowed = [];

// проверка бана
app.get("/check/:id", (req, res) => {
  res.json({ banned: banned.includes(req.params.id) });
});

// бан
app.post("/ban", (req, res) => {
  const { id } = req.body;
  if (!banned.includes(id)) banned.push(id);
  res.json({ ok: true });
});

// разбан
app.post("/unban", (req, res) => {
  const { id } = req.body;
  banned = banned.filter(x => x !== id);
  res.json({ ok: true });
});

// разрешить дальше
app.post("/allow", (req, res) => {
  const { id } = req.body;
  if (!allowed.includes(id)) allowed.push(id);
  res.json({ ok: true });
});

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
