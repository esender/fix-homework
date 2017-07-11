const {
  addPlugins,
  createConfig,
  defineConstants,
  entryPoint,
  env,
  performance,
  setOutput,
  resolveAliases,
  sourceMaps,
} = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const devServer = require('@webpack-blocks/dev-server2');
const extractText = require('@webpack-blocks/extract-text2');
const cssModules = require('@webpack-blocks/css-modules');
const path = require('path');
const { basePlugins, developmentPlugins, productionPlugins } = require('./webpack.plugins');

function customConfig() {
  return context => ({
    resolve: {
      extensions: ['.js', '.jsx', '.css'],
    },
    module: {
      loaders: [
        {
          enforce: 'pre',
          test: context.fileType('application/javascript'),
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
      ],
    },
  });
}

const config = createConfig([
  entryPoint('./src/app/index.jsx'),
  setOutput({
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/',
  }),
  babel(),
  cssModules(),
  addPlugins(basePlugins),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
  }),
  resolveAliases({
    _example: path.resolve(__dirname, 'src/app/example'),
  }),
  env('development', [
    addPlugins(developmentPlugins),
    devServer(),
    sourceMaps(),
    performance({
      maxAssetSize: 1500000,
      maxEntrypointSize: 1500000,
    }),
  ]),
  env('production', [extractText(), addPlugins(productionPlugins)]),
  customConfig(),
]);

module.exports = config;
