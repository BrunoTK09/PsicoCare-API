// src/server.js
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/usuarios', require('./routes/usuarios'));
app.use('/profissionais', require('./routes/profissionais'));
app.use('/agendamentos', require('./routes/agendamentos'));
app.use('/avaliacoes', require('./routes/avaliacoes'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});
