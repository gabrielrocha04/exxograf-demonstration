const express = require("express");
const rotas = express.Router();

const {home, sobre, estimate, escola, comun_visual} = require("../controladores/itens");

rotas.get("/home", home);

rotas.get("/sobre", sobre);

rotas.get("/estimate", estimate);

rotas.get("/escolas", escola)

rotas.get("/comun-visual", comun_visual);

module.exports = rotas;