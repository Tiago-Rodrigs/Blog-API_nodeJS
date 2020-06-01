const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const createPost = (req, res) => {
  const newPost = req.body;
  const activeUser = newPost.profileId;

  sequelize
    .query(
      `INSERT INTO posts (title, date, text, author_id) VALUES ($title, $date, $text, $author_id)`,
      {
        bind: {
          title: newPost.title,
          date: newPost.date,
          text: newPost.text,
          author_id: activeUser,
        },
        type: QueryTypes.INSERT,
      }
    )
    .then(() => {
      res.status(200).json("Post created");
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = { createPost };
