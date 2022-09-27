const user = require("../controllers/user.controller")


module.exports =  function (app) {
       app.get('/user', user.getAll)
}


