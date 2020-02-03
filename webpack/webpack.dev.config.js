const merge = require('webpack-merge');
const shared = require('./webpack.shared.config');

module.exports = merge.smart(shared, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    port: 8888,
    host: '0.0.0.0',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
});
