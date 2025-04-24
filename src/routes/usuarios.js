const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/usuarios', usuariosController.cadastrar);
router.get('/usuarios', usuariosController.listar);

module.exports = router;
