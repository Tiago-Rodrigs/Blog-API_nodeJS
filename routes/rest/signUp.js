const express = require("express");
const signUp = express.Router();
const controller = require("../../controllers/signUp-controller");

signUp.post("/", controller.createUser);

module.exports = signUp;
