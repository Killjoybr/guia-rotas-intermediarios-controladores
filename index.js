const express = require('express');
const app = express();
const porta = 8000;
const mensagemServidor = `App rodando na porta ${porta}`;
const rotas = require('./src/router/rotas');

app.use(express.json());

app.use(rotas);


app.listen(porta, console.log(mensagemServidor));