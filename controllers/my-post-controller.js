const { sequelize, Sequelize } = require("../config/sequelize");
const { QueryTypes } = require("sequelize");
const { Posts, Users } = require("../config/sequelize");

const getMyPosts = (req, res) => {
  const activeUserId = req.params.id;

  Posts.findAll({
    attributes: [
      "id",
      "title",
      "date",
      "text",
      "author_id",
      {
        model: Users,
        attributes: ["name"],
      },
    ],
    include: [
      {
        model: Users,
        where: { id: Sequelize.col("Posts.author_id") },
      },
    ],
    where: {
      model: Users,
      where: { id: activeUserId },
    },
  })
    // sequelize
    //   .query(
    //     `SELECT posts.id, posts.title, posts.date, posts.text, posts.author_id, users.name
    //     FROM posts
    //     LEFT JOIN users
    //     ON posts.author_id = users.id
    //     WHERE users.id = $author_id`,
    //     {
    //       bind: {
    //         author_id: activeUserId,
    //       },
    //       type: QueryTypes.SELECT,
    //     }
    //   )
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getMyPosts };
