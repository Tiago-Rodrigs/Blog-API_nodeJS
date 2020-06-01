const express = require("express");
const signIn = express.Router();
const controller = require("../../controllers/signIn-controller");

signIn.post("/", controller.signInUser);

module.exports = signIn;
