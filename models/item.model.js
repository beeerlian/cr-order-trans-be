

module.exports = (sequelize, Sequelize) => {
       const Item = sequelize.define("items", {
              name: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              price: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              status: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false,
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
       },
              {
                     timestamps: false
              });
       return Item;
}






