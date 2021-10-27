const { setTimeout } = require('timers/promises')

const fs = require('fs'),
path = require('path'),
newExpense = function(id, expenseDate, title, value, createBy){
    this.id = id
    this.title = title
    this.value = value
    this.createBy = createBy
    this.expenseDate = expenseDate
    this.status = true
    this.createIn = new Date()
},
controllerExpense = {
    index: (req, res, next) => {
        res.render('index', { 
        title: 'Express',
        style: 'stylesheets/index.css',
      })},
    
    createExpense: (req, res, next) => {
        let {expenseDate, title, value, user} = req.body,
        expensesAll = fs.readFileSync(path.join(__dirname,'..','..','bd','expensesBd.json'),'utf-8'),
        expenses = JSON.parse(expensesAll)
        expense = new newExpense(expenses.length++, expenseDate, title, Number(value), user)
        expenses.push(expense)
        let arr = expenses.filter(x => x != null)
        fs.writeFileSync(path.join(__dirname,'..','..','bd','expensesBd.json'), JSON.stringify(arr))

       res.redirect('/')
        
    },
    error: (req, res, next) => {
        res.render('index', { 
        title: 'ERRO',
        style: 'stylesheets/index.css',
      })}
}

module.exports = controllerExpense