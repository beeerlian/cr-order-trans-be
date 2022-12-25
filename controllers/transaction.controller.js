const db = require('../models');
const util = require('../utils')
const Order = db.order;
const Transaction = db.transaction;

exports.getAll = (req, res) => {
       Transaction.findAll()
              .then(data => {
                     res.status(200).send(
                            data
                     );
              })
              .catch(err => {
                     res.status(500).send({
                            message: err.message
                     });
              });
}




exports.get = (req, res) => {
       const id = req.params.id;
       Transaction.findByPk(id)
              .then(data => {
                     res.status(200).send(
                            data
                     );
              })
              .catch(err => {
                     res.status(500).send({
                            message: err.message
                     });
              });
}

exports.update = (req, res) => {
       const id = req.params.id;
       Transaction.findByPk(id)
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

exports.delete = async (req, res) => {
       const id = req.params.id;
       try {
              const transaction = await Transaction.findByPk(id);
              if (!transaction) {
                     throw new Error("the transaction you mean is not available")
              }
              const result = await transaction.destroy();
              res.status(200).send(result);
       } catch (error) {
              res.status(500).send({
                     message: err.message
              });
       }
}



exports.create = async (req, res) => {
       try {
              const id = req.body.order_id;
              const order = await Order.findOne({
                     where: { id: id }
              });
              console.log("order : ")
              console.log(order.dataValues)
              if (!order) {
                     throw new Error("the order you mean is not available")
              }
              order.dataValues.done = true
              await order.update({ done: true })
              const totalRentDay = util.countRentDuration(order.dataValues.order_date);
              req.body = {
                     ...req.body,
                     total_rental_days: totalRentDay,
                     total_price: totalRentDay * order.dataValues.item_price
              }
              const result = await Transaction.create(req.body);
              console.log(result)
              res.status(200).send(result);
       } catch (err) {
              res.status(500).send({
                     message: err.message
              });
       }
}




