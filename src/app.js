const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas base
app.get('/', (req, res) => {
  res.send('API PsicoCare funcionando!');
});

app.use('/auth', require('./routes/auth'));
app.use('/usuarios', require('./routes/usuarios'));
app.use('/profissionais', require('./routes/profissionais'));
app.use('/agendamentos', require('./routes/agendamentos'));
app.use('/avaliacoes', require('./routes/avaliacoes'));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const db = require('./config/db');const { router } = require('./routes/auth');

