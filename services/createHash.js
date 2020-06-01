const bcrypt = require("bcrypt");
const salt = 10;

module.exports = (password) => {
  return bcrypt.hashSync(password, salt);
};
