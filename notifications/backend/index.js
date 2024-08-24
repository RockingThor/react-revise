const express = require("express");
const WebSocket = require("ws");

const app = express();
const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });

let id = 1;

// WebSocket connections
wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  // Send a notification to the client every 10 seconds
  setInterval(() => {
    ws.send(
      JSON.stringify({
        type: "notification",
        id: id++,
        message: "This is a real-time notification",
        seen: false,
      })
    );
  }, 10000);
});

// Long polling route
app.get("/poll", (req, res) => {
  setTimeout(() => {
    res.json({
      type: "notification",
      message: "This is a long-polling notification",
    });
  }, 10000); // Mimicking delay
});

server.listen(8080, () => {
  console.log("Server started on port 8080");
});
