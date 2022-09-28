

module.exports = (sequelize, Sequelize) => {
       const Item = sequelize.define("items", {
              name: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              fee_per_day: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              status: {
                     type: Sequelize.DataTypes.BOOLEAN,
                     allowNull: false,
                     defaultValue: false
              }
       });
       return Item;
}






