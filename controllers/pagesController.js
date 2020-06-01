const path = require("path");
const base = process.cwd();

const urlPage = (url) => (req, res) => {
  res.sendFile(path.join(base, url));
};

module.exports = { urlPage };
