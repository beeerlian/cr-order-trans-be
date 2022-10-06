const transaction = require('./transaction.route')
const order = require('./order.route')

module.exports = function (app) {
       app.use(function (req, res, next) {
              res.header(
                     "Access-Control-Allow-Headers",
                     "x-access-token, Origin, Content-Type, Accept"
              );
              next();
       })

       transaction(app)
       order(app)

}