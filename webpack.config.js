var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
         rules: [
             {
                 test: /\.js$/,
                 use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['env']
                    }
                  }
              }
         ]
     },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: "none"//"source-map" // eval, none
};
