const http = require("http");
const websocket = require("ws");

const server = http.createServer((req, res) => {
  res.end("Iam connected");
});

const wss = new websocket.WebSocketServer({ server });

wss.on("headers", (headers, res) => {
  console.log(headers);
});

wss.on("connection", (ws, req) => {
  //   console.log(req);
  ws.send("Welcome to the websocket server!!");
});
server.listen(8000);
