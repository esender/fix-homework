const { webpack } = require('@webpack-blocks/webpack2');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

exports.basePlugins = [
  new HtmlWebpackPlugin({
    title: 'Калькулятор',
    inject: true,
    template: './src/index.html',
  }),
];

exports.developmentPlugins = [
  new DashboardPlugin(),
];

exports.productionPlugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
    screwIe8: true,
    sourceMap: false,
  }),
  new CleanWebpackPlugin(['dist'], {
    verbose: true,
  }),
];
