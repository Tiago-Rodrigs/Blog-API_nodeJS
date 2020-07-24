const config = require("./config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(...config);

const Users = require("../models/users")(sequelize, Sequelize);
const Followers = require("../models/followers")(sequelize, Sequelize);
const Posts = require("../models/posts")(sequelize, Sequelize);
const Op = Sequelize.Op;

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

Posts.belongsTo(Users, {
  foreignKey: "author_id",
  targetKey: "id",
  as: "users",
});

Users.hasMany(Posts, {
  foreignKey: "author_id",
  sourceKey: "id",
  onDelete: "cascade",
  as: "posts",
});

module.exports = {
  Users,
  Followers,
  Posts,
  sequelize,
  Sequelize,
  Op,
};
