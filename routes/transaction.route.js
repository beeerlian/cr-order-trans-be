const controller = require("../controllers")


module.exports = function (app) {
       app.get('/transaction', controller.transaction.getAll)
}


