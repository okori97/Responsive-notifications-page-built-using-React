const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Update this to your entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images", // Images will be outputted in 'dist/images/'
              name: "[name].[ext]", // Keep the original file name and extension
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // Update this path
    }),
    new CopyPlugin({
      patterns: [
        { from: "./style.css", to: "style.css" },
        { from: "./assets", to: "assets" },
      ],
    }),
  ],
  devServer: {
    hot: true,
    static: "./dist",
    historyApiFallback: true,
  },
};
