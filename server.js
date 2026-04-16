const express = require("express");
const app = express();

app.use(express.json());

// проверка что сервер жив
app.get("/", (req, res) => {
  res.send("server ok");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

// запускаем бот внутри сервера
require("./bot.js");
