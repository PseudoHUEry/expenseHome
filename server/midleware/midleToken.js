const fs = require('fs'),
path = require('path'),

midlePass = {
    pass: (req, res, next) =>{
        let { token } = req.body
        user = fs.readFileSync(path.join(__dirname, '..','bd', 'user.JSON'), "utf-8"),
        users = JSON.parse(user),
        acess = users.filter(x => x.token == token)
        if(acess[0]){
        req.body.user = acess[0].user
        next()
    } else { 
        res.redirect('/')
    }}

}

module.exports = midlePass