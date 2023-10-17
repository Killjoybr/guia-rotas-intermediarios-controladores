const express = require('express');
const rotas = express.Router();
const controlador = require('../controllers/controlador');


rotas.get('/request', controlador.retornarBody);


module.exports = rotas