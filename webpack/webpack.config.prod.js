const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "/src/client"),
  output: {
    path: path.resolve(__dirname, "/build")
  }
};
