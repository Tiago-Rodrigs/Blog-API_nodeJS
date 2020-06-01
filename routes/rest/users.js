const express = require("express");
const users = express.Router();
const checkToken = require("../../services/tokenChecker");
const searchController = require("../../controllers/search-users-controller");
const addSubsController = require("../../controllers/add-subs-controller");
const removeSubsController = require("../../controllers/remove-subs-controller");
const myPostsController = require("../../controllers/my-post-controller");

users.get(
  "/",
  checkToken,
  removeSubsController.removeSubscription,
  addSubsController.addSubscription,
  searchController.searchUsers
);
users.get(
  "/search",
  checkToken,
  removeSubsController.removeSubscription,
  addSubsController.addSubscription,
  searchController.searchUsers
);
users.get("/:id/posts", checkToken, myPostsController.getMyPosts);

module.exports = users;
