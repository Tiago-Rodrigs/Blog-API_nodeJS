const express = require("express");
const users = express.Router();
const checkToken = require("../../services/tokenChecker");
const searchController = require("../../controllers/search-users-controller");
const addSubsController = require("../../controllers/add-subs-controller");
const removeSubsController = require("../../controllers/remove-subs-controller");
const myPostsController = require("../../controllers/my-post-controller");

users.get("/", checkToken, searchController.searchUsers);
users.get("/search", checkToken, searchController.searchUsers);
users.get("/:id/posts", checkToken, myPostsController.getMyPosts);
users.put("/search", checkToken, addSubsController.addSubscription);
users.delete("/search", checkToken, removeSubsController.removeSubscription);

module.exports = users;
