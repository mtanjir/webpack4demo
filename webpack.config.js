var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // module: {
  //        rules: [
  //            {
  //                test: /\.js$/,
  //                use: 'babel-loader'
  //            }
  //        ]
  //    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  }
};
