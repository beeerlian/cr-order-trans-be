const controller = require("../controllers")
const middlewares = require('../middlewares')


module.exports = function (app) {
       app.get('/order', controller.order.getAll);
       app.post('/order', controller.order.create);
       app.get('/order/:id', controller.order.get);
       app.get('/order/:id/price', controller.order.calculatePrice);
       app.put('/order/:id', controller.order.update);
       app.delete('/order/:id', controller.order.delete);
}
