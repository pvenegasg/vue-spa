const merge = require('webpack-merge');
const shared = require('./webpack.shared.config');

module.exports = merge.smart(shared, {
  mode: 'development',

  devServer: {
    port: 8888,
    host: '0.0.0.0',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: ['vue-style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
});
