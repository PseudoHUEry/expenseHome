const midlePass = require('../midleware/midleToken');

const express = require('express'),
router = express.Router(),
controllerExpense = require('../controllers/controllerExpress/controllerExpenses'),
midleToken = require('../midleware/midleToken')

/* GET Expenses Page. */
router.get('/', controllerExpense.index);

/* Criando nova expense. */
router.post('/', midlePass.pass,controllerExpense.createExpense);
module.exports = router;
