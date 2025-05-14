const express = require('express');
const router = express.Router();
const profissionaisController = require('../controllers/profissionaisController');

router.get('/', profissionaisController.listar);

module.exports = router;
