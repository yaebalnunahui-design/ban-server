const express = require("express");
const app = express();

app.use(express.json());

let banned = [];
let allowed = [];

// проверка бана
app.get("/check/:id", (req,res)=>{
  res.json({ banned: banned.includes(req.params.id) });
});

// бан
app.post("/ban", (req,res)=>{
  const { id } = req.body;
  if(!banned.includes(id)) banned.push(id);
  res.send("ok");
});

// разбан
app.post("/unban", (req,res)=>{
  const { id } = req.body;
  banned = banned.filter(x=>x!==id);
  res.send("ok");
});

// разрешить дальше
app.post("/allow", (req,res)=>{
  const { id } = req.body;
  if(!allowed.includes(id)) allowed.push(id);
  res.send("ok");
});

// проверка перехода
app.get("/status/:id", (req,res)=>{
  res.json({ allowed: allowed.includes(req.params.id) });
});

app.listen(3000);
