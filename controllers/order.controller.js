const db = require('../models')
const Order = db.order;
exports.getAll = (req, res) => {
       Order.findAll()
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

       Order.create({
              name: req.body.name,
              fee_per_day: req.body.fee_per_day,
       }).then(data => {
              res.status(200).send({
                     'success': true,
                     data: data
              });
       }).catch(err => {
              res.status(500).send({
                     message:
                            err.message || "Some error occurred while retrieving tutorials."
              });
       })
}


