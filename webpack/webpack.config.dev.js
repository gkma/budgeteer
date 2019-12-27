const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "../src/client/index.js"),
  devServer: {
    contentBase: "../src/client"
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/client/index.html"
    })
  ]
};
