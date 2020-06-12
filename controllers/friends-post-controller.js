const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const getFriendsPost = (req, res) => {
  const activeUserId = req.query.id;
  console.log(req)
  console.log(activeUserId)
  sequelize
    .query(
      `SELECT posts.id, posts.title, posts.date, posts.text, posts.author_id, users.name 
      FROM posts 
      LEFT JOIN users 
      ON posts.author_id = users.id 
      WHERE users.id in (SELECT following FROM followes WHERE follower = $follower) AND posts.author_id IS NOT null`,
      {
        bind: {
          follower: activeUserId,
        },
        type: QueryTypes.SELECT,
      }
    )
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getFriendsPost };
