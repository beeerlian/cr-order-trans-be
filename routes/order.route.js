const controller = require("../controllers")
const middlewares = require('../middlewares')


module.exports = function (app) {
       app.get('/order', controller.order.getAll)
       app.post('/order', controller.order.create)
       
}
