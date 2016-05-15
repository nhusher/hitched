const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    app: './js/hitched.js'
  },
  output: {
    filename: './js/[name].build.js'
  },
  plugins: [
    new webpack.DefinePlugin({
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: './js/[name].js.map'
    }),
  ].concat(NODE_ENV === 'production' ? new webpack.optimize.UglifyJsPlugin() : []),
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
