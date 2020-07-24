const { Posts } = require("../config/sequelize");

const createPost = (req, res) => {
  const newPost = req.body;
  newPost.author_id = newPost.profileId

  Posts.create({ ...newPost })
    .then(() => { 
      res.status(200).json("Post created");
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = { createPost };
