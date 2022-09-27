const db = require('../models')
const User = db.user;
exports.getAll = (req, res) => {
       User.findAll()
              .then(data => {
                     res.status(200).send({
                            'success': true,
                            data: data
                     });
              })
              .catch(err => {
                     res.status(500).send({
                            message:
                                   err.message || "Some error occurred while retrieving tutorials."
                     });
              });
}

exports.create = (req, res) => {
       res.status(200).send('create user')
}


