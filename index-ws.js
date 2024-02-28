const express = require('express');
const server = require('http').createServer();
const app = express();

app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: __dirname })
})

server.on("request", app)
server.listen(3000, () => console.log("Server listening on port 3000"))

/** WebSocket */
const websocket = require("ws")
const WebSocketServer = websocket.Server

const wss = new WebSocketServer({ server })

wss.broadcast = (data) => {
  wss.clients.forEach(client => client.send(data))
}

wss.on("connection",  (ws, _req) => {
  const totalClients = wss.clients.size
  console.log("Total client connected: " + totalClients)

  wss.broadcast(`Current visitor ${totalClients}`)

  if (ws.readyState === ws.OPEN) {
    ws.send("Welcome to my server")
  }

  ws.on("close", () => {
    wss.broadcast(`Current visitor ${totalClients}`)
    console.log("A client has disconnected")
  })
})

