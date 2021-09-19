const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    index: './webpack_entry.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: 'angularjs-template-loader',
      //       options: {
      //         // relativeTo: path.resolve(__dirname, ''),
      //       }
      //     }
      //   ]        
      // },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'ngtemplate-loader',
            options: {
              // relativeTo: path.resolve(__dirname, "app")
            }
          },
          {
            loader: 'html-loader'
          }
        ],
        exclude: [
          /index\.html$/
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ]
};
