const express = require('express');
const router = express.Router();
const avaliacoesController = require('../controllers/avaliacoesController');
const auth = require('../middleware/auth');

router.get('/', auth, avaliacoesController.listar);

module.exports = router;
