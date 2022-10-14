

module.exports = (sequelize, Sequelize) => {
       const Transaction = sequelize.define("transactions", {
              order_id: {
                     type: Sequelize.DataTypes.INTEGER,
                     allowNull: false
              },
              total_rental_days: {
                     type: Sequelize.DataTypes.INTEGER,
                     allowNull: false
              },
              total_price: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              teller_id: {
                     type: Sequelize.DataTypes.INTEGER,
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






