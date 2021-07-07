import express from "express";
const front = express();
const backend = express();

front.use(express.static("public"));
front.listen(8000, function () {
  console.log(`クライアント Web アプリサーバを 8000 番ポートで起動します`);
});

backend.use(express.json()); // application/json
backend.get("/", function (req, res) {
  res.send("バックエンド API サーバだよっ！");
});

const users = ["dynamis", "kou029w"]

// 取り敢えず /xxxxxx へのアクセスに対応する API サーバ
backend.get("/:endpoint", async (req, res) => {
  const { endpoint } = req.params;
  // 取りあえず /users だけ対応する
  if (endpoint === "users") {
    const userJson = JSON.stringify(users)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(userJson);
  } else {
    res.send(`invalid endpoint: ${endpoint}`);
  }
});

// 取り敢えず /xxxxxx へのアクセスに対応する API サーバ
backend.post("/:endpoint", async (req, res) => {
  const { endpoint } = req.params;
  // 取りあえず /users だけ対応する
  if (endpoint === "users") {
    const userJson = JSON.stringify(users)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(userJson);
  } else {
    res.send(`invalid endpoint: ${endpoint}`);
  }
});

// OPTIONS での動作 (CORS 対応例)
backend.options("/:endpoint", async (req, res) => {
  const { endpoint, slug } = req.params;
  if (endpoint === "users") {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    //res.header("Access-Control-Allow-Methods", "GET,POST");
    res.send("");
  } else {
    res.send(`invalid endpoint: ${endpoint}`);
  }
});

backend.listen(8080, function () {
  console.log(`バックエンド API サーバを 8080 番ポートで起動します`);
});
