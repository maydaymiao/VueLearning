const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    //   这里的path一定要写绝对路径
    path: "/Users/maydaymiao/Documents/VueLearning/07-前端模块化/02-webpack",
    filename: "bundle.js"
  }
};
