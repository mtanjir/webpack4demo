var path = require('path');

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
  }
};
