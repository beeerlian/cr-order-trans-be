const Sequelize = require("sequelize");
const pg = require('pg')
require('dotenv').config()

const db = {};

const sequelize = new Sequelize(process.env.SUPABASE_URL, { dialectModule: pg })

// const sequelize = new Sequelize(
//        mysqlConfig.DB,
//        mysqlConfig.USER,
//        mysqlConfig.PASSWORD,
//        mysqlConfig.HOST
// );

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.transaction = require('./transaction.model')(sequelize, Sequelize)
db.order = require('./order.model')(sequelize, Sequelize)


module.exports = db;