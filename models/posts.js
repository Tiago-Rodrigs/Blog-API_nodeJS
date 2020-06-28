module.exports = function (sequelize, Sequelize) {
  const Model = Sequelize.Model;
  class Posts extends Model {}
  Posts.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
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
        references: { model: "users", key: "id" },
      },
    },
    { sequelize, modelName: "posts", underscored: true }
  );
  return Posts;
};
