const express = require("express");
const posts = express.Router();
const checkToken = require("../../services/tokenChecker");
const addPostController = require("../../controllers/add-post-controller");
const friendsPostsController = require("../../controllers/friends-post-controller");

posts.post("/", checkToken, addPostController.createPost);
posts.get("/friends", checkToken, friendsPostsController.getFriendsPost);

module.exports = posts;
