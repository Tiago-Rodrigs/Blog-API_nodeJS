const { Posts, Users } = require("../config/sequelize");

const getMyPosts = (req, res) => {
  const activeUserId = req.params.id;

  Posts.findAll({
    attributes: ["id", "title", "text", "author_id"],
    include: [
      {
        model: Users,
        association: "users",
        attributes: ["name"],
        where: { id: activeUserId },
      },
    ],
  })
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getMyPosts };
