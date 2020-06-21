module.exports = function (sequelize, Sequelize) {
  const Model = Sequelize.Model;
  class User extends Model {}
  User.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      refresh_token: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    { sequelize, modelName: "users", underscored: true }
  );
  return User
};

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