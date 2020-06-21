const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const signUpRouter = require("./routes/rest/signUp");
const signInRouter = require("./routes/rest/signIn");
const usersRouter = require("./routes/rest/users");
const postsRouter = require("./routes/rest/posts");

app.use("/api/v1/signUp", signUpRouter);
app.use("/api/v1/signIn", signInRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/posts", postsRouter);

app.listen(4000, function () {
  console.log("Example app listening on port 4000!");
});

module.exports = app;
