const config = require("./config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(...config);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.error("Unable to connect to db", err);
  });

module.exports = sequelize;
