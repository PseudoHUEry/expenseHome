const express = require('express'),
router = express.Router(),
relController = require('../controllers/relController/relController')

/* GET Relatório Page. */
router.get('/', relController.index);

module.exports = router;
