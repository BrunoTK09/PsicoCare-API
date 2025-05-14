const express = require('express');
const router = express.Router();
const agendamentosController = require('../controllers/agendamentosController');
const auth = require('../middleware/auth');

router.get('/', auth, agendamentosController.listar);

module.exports = router;
