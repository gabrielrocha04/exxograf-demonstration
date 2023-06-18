const express = require("express");

const app = express();

const path = require("path");

app.use(express.json());

const rotas = require("./rotas/rotas");

const htmlPath = path.join(__dirname, "../html");

app.use(express.static(htmlPath))
app.use(express.static("public"))

app.use("/", rotas);

module.exports = app;

