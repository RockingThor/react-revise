const express = require("express");
const cors = require("cors");
const v1Router = require("./routers/v1");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/v1", v1Router);

app.get("/ping", (req, res) => {
  return res.json({ message: "pong" });
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
