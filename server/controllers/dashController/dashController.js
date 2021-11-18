const fs = require("fs"),
  path = require("path"),
  expenseBd = fs.readFileSync(
    path.join(__dirname, "..", "..", "bd", "expensesBd.JSON")
  ),
  userBd = fs.readFileSync(path.join(__dirname, "..", "..", "bd", "user.JSON")),
  expenses = JSON.parse(expenseBd),
  users = JSON.parse(userBd),
  Item = function (user, value) {
    this.user = user;
    this.value = value;
  };

dashbordController = {
  index: (req, res, next) => {
    let item = [],
      user = users.map((x) => {
        let { user } = x;
        return user;
      }),
      arr = user.map((y) => {
        let ex = expenses.filter((x) => x.createBy == y),
          total = ex.reduce((total, x) => {
            return (total = total + x.value);
          }, 0);
        let js = new Item(y, total);
        item.push(js);
      });

    res.render("dashboard", {
      title: "Dashboard",
      style: "stylesheets/dashboard.css",
      item,
    });
  },
};

module.exports = dashbordController;
