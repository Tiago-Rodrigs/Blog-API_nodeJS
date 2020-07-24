// const { sequelize } = require("../config/sequelize");
// const { QueryTypes } = require("sequelize");
const { Users, Posts, Op, Followers } = require("../config/sequelize");

const getFriendsPost = (req, res) => {
  const activeUserId = req.query.id;

  Posts.findAll({
    attributes: ["id", "title", "text", "author_id"],
    include: [
      {
        model: Users,
        association: "users",
        attributes: ["name"],
        where: {
          id: {
            [Op.in]: [
              Followers.findAll({
                attributes: ["following"],
                where: (follower = activeUserId),
              }),
            ],
          },
          [Op.and]: {
            // author_id: !null,
          }
        },
      },
    ],
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
