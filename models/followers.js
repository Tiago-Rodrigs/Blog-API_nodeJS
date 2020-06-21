module.exports = function (sequelize, Sequelize) {
  const Model = Sequelize.Model;
  class Followers extends Model {}
  Followers.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      follower: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      following: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: "id",
        },
      },
    },
    { sequelize, modelName: "followers" }
  );
  return Followers;
};
