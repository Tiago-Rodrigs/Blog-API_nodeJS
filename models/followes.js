module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "followes",
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
          model: sequelize.User,
          key: "id",
        },
      },
    },
    {
      tableName: "followes",
    }
  );
};
