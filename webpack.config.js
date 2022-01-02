// Permet de résoudre des chemins de fichiers
const path = require("path");
module.exports = {

  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  }
};