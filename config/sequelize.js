const config = require("./config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(...config);

// const Op = Sequelize.Op;
// const User = require("../models/users")(sequelize, Sequelize);
// const Followes = require("../models/followes")(sequelize, Sequelize);
// const Post = require("../models/posts")(sequelize, Sequelize);

// User.hasOne(Followes, {
//   targetKey: "id",
//   foreignKey: "following",
//   as: "followes",
//   onDelete: "cascade",
// });

// User.hasMany(Post, {
//   foreignKey: "author_id",
//   as: "posts",
//   onDelete: "cascade",
// });

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Databases and tables created");
//   })
//   .catch((err) => console.error(err));

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database", err);
//   });

// module.exports = {
//   User,
//   Followes,
//   Post,
//   Op,
//   sequelize,
//   Sequelize,
// };

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.error("Unable to connect to db", err);
  });

module.exports = sequelize;
