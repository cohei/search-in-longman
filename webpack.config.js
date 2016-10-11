const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: '.',
    filename: 'minified.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({compress: {keep_fargs: false}, mangle: {props: true}})
  ]
};
