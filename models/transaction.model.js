

module.exports = (sequelize, Sequelize) => {
       const Transaction = sequelize.define("transactions", {
              order_id: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              retur_date: {
                     type: 'TIMESTAMP',
                     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                     allowNull: false
              },
              total_price: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              created_at: {
                     type: 'TIMESTAMP',
                     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                     allowNull: false
              },
              updated_at: {
                     type: 'TIMESTAMP',
                     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                     allowNull: false
              },
       }, {
              timestamps: false
       });
       return Transaction;
}






