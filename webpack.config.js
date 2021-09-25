const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./webpack_entry.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          // {
          //   loader: "angularjs-template-loader"
          // }
        ],
      },
      {
        test: /\.html$/,
        exclude: [/index\.html$/],
        use: [
          {
            loader: "ngtemplate-loader",
            options: {
              // relativeTo: path.resolve(__dirname, "app")
            },
          },
          {
            loader: "html-loader",
            options: {
               minimize: true
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
