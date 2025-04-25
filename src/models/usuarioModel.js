const db = require('../config/db');

exports.cadastrar = (nome, email, senha, callback) => {
  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(sql, [nome, email, senha], callback);
};

exports.listar = (callback) => {
  const sql = 'SELECT id, nome, email FROM usuarios';
  db.query(sql, callback);
};

exports.buscarPorEmail = (email, callback) => {
  const sql = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(sql, [email], callback);
};
