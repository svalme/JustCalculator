var path = require('path');

module.exports = {
    entry: './javascript/process.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    }
  };