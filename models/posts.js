module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "post",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncremet: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      author_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: sequelize.User, key: "id" },
      },
    },
    {
      underscored: true,
      tableName: "posts",
    }
  );
};
