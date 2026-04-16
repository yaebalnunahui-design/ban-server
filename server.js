const express = require("express");
const app = express();

app.use(express.json());

// простая проверка сервера
app.get("/", (req, res) => {
  res.send("server ok");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

// запускаем бота ВНУТРИ сервера
require("./bot.js");
