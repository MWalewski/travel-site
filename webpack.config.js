var path = require("path");

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dir.name, "./app/temp/scripts"),
    filename: "App.js"
  }
};
