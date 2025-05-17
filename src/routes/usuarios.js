const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/', usuariosController.cadastrar);
router.get('/', usuariosController.listar);

module.exports = router;
