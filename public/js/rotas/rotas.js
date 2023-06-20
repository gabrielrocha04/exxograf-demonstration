const express = require("express");
const rotas = express.Router();

const {home, sobre, estimate, escola, comun_visual, hospitais, empresas} = require("../controladores/itens");

rotas.get("/home", home);

rotas.get("/sobre", sobre);

rotas.get("/estimate", estimate);

rotas.get("/escolas", escola)

rotas.get("/comun-visual", comun_visual);

rotas.get("/hospitais", hospitais);

rotas.get("/empresas", empresas);

rotas.get("/empresas", empresas);

module.exports = rotas;