// src/controllers/usuariosController.js
const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.cadastrar = async (req, res) => {
  const { nome, email, senha, telefone, nascimento } = req.body;
  if (!nome || !email || !senha) return res.status(400).json({ erro: 'Preencha todos os campos obrigatórios.' });

  const senhaCriptografada = await bcrypt.hash(senha, 10);

  db.query(
    'INSERT INTO usuarios (nome, email, senha, telefone, nascimento) VALUES (?, ?, ?, ?, ?)',
    [nome, email, senhaCriptografada, telefone, nascimento],
    (err, result) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json({ id: result.insertId });
    }
  );
};

exports.listar = (req, res) => {
  db.query('SELECT id, nome, email FROM usuarios', (err, results) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(results);
  });
};
