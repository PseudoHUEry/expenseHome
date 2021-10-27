const fs = require("fs"),
  path = require("path"),
  expenseBd = fs.readFileSync(
    path.join(__dirname, "..", "..", "bd", "expensesBd.JSON")
  ),
  expenses = JSON.parse(expenseBd),

  dashbordController = {
    index: (req, res, next) => 
      res.render("dashboard", {
        title: "Dashboard",
        style: "stylesheets/dashboard.css",
        bd: ""
      })

  };

module.exports = dashbordController;
