// Importa o objeto de conexão com o banco de dados MySQL configurado no arquivo db.js
const db = require('../config/db');

/**
 * Função listar
 * Recupera todos os agendamentos do banco de dados do PsicoCare e retorna como resposta JSON.
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
exports.listar = (req, res) => {
  // Executa a query SQL para selecionar todos os registros da tabela agendamentos
  db.query('SELECT * FROM agendamentos', (err, results) => {
    // Verifica se houve erro na execução da query
    if (err) {
      // Retorna um erro HTTP 500 com a mensagem de erro do banco
      return res.status(500).json({ erro: err.message });
    }
    // Retorna os resultados da query como resposta JSON com status 200
    res.json(results);
  });
};