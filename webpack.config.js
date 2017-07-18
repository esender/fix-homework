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
    filename: 'app.min.js',
    path: path.resolve('dist'),
    publicPath: '',
  }),
  babel(),
  addPlugins(basePlugins),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
  }),
  resolveAliases({
    _components: path.resolve(__dirname, 'src/app/components'),
    _containers: path.resolve(__dirname, 'src/app/containers'),
    _stores: path.resolve(__dirname, 'src/app/stores'),
    _shared: path.resolve(__dirname, 'src/app/shared'),
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
  env('production', [extractText('app.min.css'), addPlugins(productionPlugins)]),
  customConfig(),
]);

module.exports = config;
