const controller = require("../controllers")
const middlewares = require('../middlewares')


module.exports = function (app) {
       app.get('/item', controller.item.getAll)
       app.post('/item', controller.item.create)
}
