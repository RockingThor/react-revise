const express = require("express");
const { signUp, signIn } = require("./users");

const v1Router = express.Router();

v1Router.post("/login", signIn);
v1Router.post("/signup", signUp);

module.exports = v1Router;
