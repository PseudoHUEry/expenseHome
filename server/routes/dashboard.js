const express = require('express'),
router = express.Router(),
dashController = require('../controllers/dashController/dashController')

/* GET Relatório Page. */
router.get('/', dashController.index);

module.exports = router;
