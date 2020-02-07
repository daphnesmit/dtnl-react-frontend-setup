const requireCached = require(`${process.cwd()}/gulpfile.js/src/gulp/require-cached`)
const gulp = requireCached('gulp')

const compilerPromise = require('./script/create-compiler-promise')
const webpackConfigs = require('./script/webpack-config')
const browserSync = requireCached('browser-sync')
const webpack = requireCached('webpack')

gulp.task('js-watch', function jsWatch(callback) {
  let initialCompile = true

  webpack(webpackConfigs.legacyConfig).watch(200, (error, stats) => {
    compilerPromise.onWebpackCallback(error, stats)

    if (initialCompile) {
      initialCompile = false
      callback()
    }

    browserSync.reload()
  })
})
