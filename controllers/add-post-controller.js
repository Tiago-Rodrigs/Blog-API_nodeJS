const { Posts } = require("../config/sequelize");

const createPost = (req, res) => {
  const newPost = req.body;
  newPost.author_id = newPost.profileId

  Posts.create({ ...newPost })
    // sequelize
    //   .query(
    //     `INSERT INTO posts (title, date, text, author_id) VALUES ($title, $date, $text, $author_id)`,
    //     {
    //       bind: {
    //         title: newPost.title,
    //         date: newPost.date,
    //         text: newPost.text,
    //         author_id: newPost.profileId,
    //       },
    //       type: QueryTypes.INSERT,
    //     }
    //   )
    .then(() => { 
      res.status(200).json("Post created");
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = { createPost };
