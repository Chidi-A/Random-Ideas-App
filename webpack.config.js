const path = require('path');

module.exports = {
  entry: './src/index.js',  // adjust this to your entry file
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
}; 