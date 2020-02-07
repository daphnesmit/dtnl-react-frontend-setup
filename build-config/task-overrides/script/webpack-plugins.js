const config                = require(process.cwd() + '/gulpfile.js/config');
const requireCached         = require(`${process.cwd()}/gulpfile.js/src/gulp/require-cached`);
const webpack               = requireCached('webpack');
const { VueLoaderPlugin }   = require('vue-loader')
const plugins = [
  new VueLoaderPlugin(),
  new webpack.HotModuleReplacementPlugin()
];

module.exports = plugins;
