const config = require(process.cwd() + '/gulpfile.js/config')
const requireCached = require(`${process.cwd()}/gulpfile.js/src/gulp/require-cached`)
const fs = require('fs')
const gulp = requireCached('gulp')

const compoilerPromise = require('./script/create-compiler-promise')
const webpackConfigs = require('./script/webpack-config')
const hasESFile = fs.existsSync(`${config.source.getPath('javascript')}/main-es.ts`)

const compilerConfigs = {}

compilerConfigs.legacyConfig = webpackConfigs.legacyConfig
if (hasESFile) compilerConfigs.modernConfig = webpackConfigs.modernConfig

gulp.task('js', function(callback) {
  Promise.all(compoilerPromise.create(compilerConfigs))
    .then(() => callback())
    .catch(e => console.warn('Error whilst compiling JS', e))
})

module.exports = {
  compilerConfigs,
}
