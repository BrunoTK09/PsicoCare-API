const db = require('../config/db');

exports.listar = (req, res) => {
  db.query('SELECT * FROM avaliacoes', (err, results) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(results);
  });
};
