

module.exports = (sequelize, Sequelize) => {
       const User = sequelize.define("users", {
              name: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              address: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              identity_type: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              identity_number: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              phone: {
                     type: Sequelize.DataTypes.INTEGER,
              },
              access_token: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
       });
       return User;
}






