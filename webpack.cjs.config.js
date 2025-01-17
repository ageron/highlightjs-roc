const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/roc.js",
  output: {
    filename: "roc.min.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",
  },
};
