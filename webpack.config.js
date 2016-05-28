const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    hitched: './js/hitched.js'
  },
  output: {
    filename: './js/[name].build.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${NODE_ENV}"`
    })
  ].concat(NODE_ENV === 'production' ? new webpack.optimize.UglifyJsPlugin({
    comments: false
  }) : []),
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
