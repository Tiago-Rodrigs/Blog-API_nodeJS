// const { sequelize } = require("../config/sequelize");
// const { QueryTypes } = require("sequelize");
const { Users, Posts, Sequelize } = require("../config/sequelize");

const getFriendsPost = (req, res) => {
  const activeUserId = req.query.id;

  Posts.findAll({
    attributes: ["id", "title", "date", "text", "author_id", {
      model: Users,
      attributes: ["name"],
    }],
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
    //     WHERE users.id IN (SELECT following FROM followers WHERE follower = $follower) AND posts.author_id IS NOT NULL`,
    //     {
    //       bind: {
    //         follower: activeUserId,
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

module.exports = { getFriendsPost };
