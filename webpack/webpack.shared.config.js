const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname, '../');

module.exports = {
  entry: `${root}/src/index.js`,

  output: {
    filename: 'js/app-[hash].js',
    path: `${root}/dist`,
    chunkFilename: 'js/[name]-[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },

    extensions: ['*', '.js', '.vue', '.json'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/statics/index.html',
    }),

    new VueLoaderPlugin(),
  ],
};
