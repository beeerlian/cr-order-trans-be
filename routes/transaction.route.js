const controller = require("../controllers")


module.exports = function (app) {
       app.get('/transaction', controller.transaction.getAll)
       app.get('/transaction/:id', controller.transaction.get)
       // app.get('/transaction/:id/price', controller.transaction.calculatePrice)
       app.post('/transaction', controller.transaction.create)
}


