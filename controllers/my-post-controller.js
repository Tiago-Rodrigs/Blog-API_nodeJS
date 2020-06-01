const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const getMyPosts = (req, res) => {
  console.log(req);
  const activeUserId = req.params.id;

  sequelize
    .query(
      `SELECT posts.id, posts.title, posts.date, posts.text, posts.author_id, users.name FROM posts LEFT JOIN users ON posts.author_id = users.id WHERE users.id = $author_id`,
      {
        bind: {
          author_id: activeUserId,
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

module.exports = { getMyPosts };
