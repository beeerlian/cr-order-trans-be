const db = require('../models')
const Transaction = db.transaction;
exports.getAll = (req, res) => {
       Transaction.findAll()
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
       res.status(200).send('create trans')
}


