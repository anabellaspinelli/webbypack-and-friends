const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"), // cannot be relative
    filename: "app.bundle.js",
  },
  mode: "development",
}
