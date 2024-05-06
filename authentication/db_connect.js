const { Sequelize, DataTypes } = require("sequelize");

// sequelize instance
const sequelize = new Sequelize("atdce", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

// defining models
const user = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  refreshToken: {
    type: DataTypes.STRING,
  },
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synced successfully!");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

module.exports = { sequelize, user };
