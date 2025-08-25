// Importa o objeto de conexão com o banco de dados MySQL configurado no arquivo db.js
const db = require('../config/db');

/**
 * Função listar
 * Recupera todas as avaliações armazenadas no banco de dados do PsicoCare
 * e retorna os resultados como resposta JSON.
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
exports.listar = (req, res) => {
  // Executa a query SQL para selecionar todos os registros da tabela avaliacoes
  db.query('SELECT * FROM avaliacoes', (err, results) => {
    // Verifica se houve erro na execução da query
    if (err) {
      // Retorna um erro HTTP 500 com a mensagem de erro do banco
      return res.status(500).json({ erro: err.message });
    }
    // Retorna os resultados da query como resposta JSON com status 200
    res.json(results);
  });
};