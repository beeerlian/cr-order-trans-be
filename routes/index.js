const user = require('./user.route')
const item = require('./item.route')

module.exports = function (app) {
       app.use(function (req, res, next) {
              res.header(
                     "Access-Control-Allow-Headers",
                     "x-access-token, Origin, Content-Type, Accept"
              );
              next();
       })

       user(app)
       item(app)

}