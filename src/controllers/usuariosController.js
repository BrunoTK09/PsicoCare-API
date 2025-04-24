const db = require('../config/db');

exports.cadastrar = (req, res) => {
  const { nome, email, senha } = req.body;
  db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err, result) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.status(201).json({ id: result.insertId });
  });
};

exports.listar = (req, res) => {
  db.query('SELECT id, nome, email FROM usuarios', (err, results) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(results);
  });
};
