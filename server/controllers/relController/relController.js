const fs = require('fs'),
path = require('path'),
expenseBd = fs.readFileSync(path.join(__dirname,'..','..','bd','expensesBd.JSON')),
expenses = JSON.parse(expenseBd),

controllerRel = {
    index: (req, res, next) =>{
        res.render('relatorio', 
        {
            title: 'Relatório',
            style: 'stylesheets/relatorio.css',
            bd: expenses
        });
    }

}

module.exports = controllerRel