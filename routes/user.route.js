const controller = require("../controllers")


module.exports = function (app) {
       app.get('/user', controller.user.getAll)
}


