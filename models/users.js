module.exports = function (sequelize, Sequelize) {
  const Model = Sequelize.Model;
  class Users extends Model {}
  Users.init(
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
  return Users
};

// Users.hasOne(Followers, {
//   targetKey: "id",
//   foreignKey: "following",
//   as: "followers",
//   onDelete: "cascade",
// });

// Users.hasMany(Posts, {
//   foreignKey: "author_id",
//   as: "posts",
//   onDelete: "cascade",
// });