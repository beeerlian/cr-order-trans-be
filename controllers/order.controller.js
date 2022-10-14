const db = require('../models')
const util = require('../utils')
const Order = db.order;
exports.getAll = (req, res) => {
       Order.findAll()
              .then(data => {
                     res.status(200).send(data);
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
                     res.status(200).send(data);
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
                            res.status(200).send(data);
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
                            res.status(200).send(data);
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

exports.calculatePrice = async (req, res) => {
       try {
              const id = req.params.id;
              const order = await Order.findByPk(id);
              if (!order) {
                     throw new Error("the order you mean is not available")
              }

              const totalRentDay = util.countRentDuration(order.dataValues.order_date);

              res.status(200).send({
                     ...order.dataValues,
                     total_rental_days: totalRentDay,
                     total_price: totalRentDay * order.dataValues.item_price
              });
       } catch (err) {
              res.status(500).send({
                     message: err.message
              });
       }
}



exports.create = (req, res) => {
       Order.create(req.body).then(data => {
              res.status(200).send(data);
       }).catch(err => {
              res.status(500).send({
                     message: err.message
              });
       })
}


