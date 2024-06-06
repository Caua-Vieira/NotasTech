const express = require("express");
const { criarUsuario } = require("../../controller/usuario/criarUsuario");
const routes = express.Router();

routes.post("/criar/usuario", criarUsuario)

module.exports = routes;