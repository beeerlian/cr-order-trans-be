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
                                   err.message
                     });
              });
}

exports.get = (req, res) => {
       const id = req.params.id;
       Order.findByPk(id)
              .then(data => {
                     res.status(200).send({
                            'success': true,
                            data: data
                     });
              })
              .catch(err => {
                     res.status(500).send({
                            message: err.message
                     });
              });
}

exports.update = (req, res) => {
       const id = req.params.id;
       Order.findByPk(id)
              .then(data => {
                     data.dataValues = { ...data.dataValues, ...req.body };
                     data.save().then(data => {
                            res.status(200).send({
                                   'success': true,
                                   data: data
                            });
                     })
                            .catch(err => {
                                   res.status(500).send({
                                          message: err.message
                                   });
                            });
              })
              .catch(err => {
                     res.status(500).send({
                            message: err.message
                     });
              });
}

exports.delete = (req, res) => {
       const id = req.params.id;
       Order.findByPk(id)
              .then(data => {

                     data.destroy().then(data => {
                            res.status(200).send({
                                   'success': true,
                                   data: data
                            });
                     })
                            .catch(err => {
                                   res.status(500).send({
                                          message: err.message
                                   });
                            });
              })
              .catch(err => {
                     res.status(500).send({
                            message: err.message
                     });
              });
}



exports.create = (req, res) => {
       Order.create(req.body).then(data => {
              res.status(200).send({
                     data: data
              });
       }).catch(err => {
              res.status(500).send({
                     message: err.message
              });
       })
}


