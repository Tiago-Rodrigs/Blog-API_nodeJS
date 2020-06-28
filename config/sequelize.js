const config = require("./config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(...config);

const Users = require("../models/users")(sequelize, Sequelize);
const Followers = require("../models/followers")(sequelize, Sequelize);
const Posts = require("../models/posts")(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.error("Unable to connect to db", err);
  });

sequelize
  .sync()
  .then(() => {
    console.log("Databases and tables created");
  })
  .catch((err) => console.error(err));

module.exports = {
  Users,
  Followers,
  Posts,
  sequelize,
  Sequelize,
};
