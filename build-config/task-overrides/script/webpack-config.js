const config = require(process.cwd() + '/gulpfile.js/config');
const createAliasObject = require('./create-alias-object');
const webpackPlugins = require('./webpack-plugins');
const createBabelLoaderConfig = require('./create-babel-loader-config');
const esLintConfig = require('./eslint-config');
const TerserPlugin = require('terser-webpack-plugin');

const fs = require('fs');
const path = require('path');

const hasLintfile = fs.existsSync(`${config.projectDirectory}/.eslintrc`) || fs.existsSync(`${config.projectDirectory}/.eslintrc.js`) || fs.existsSync(`${config.projectDirectory}/.eslintrc.json`);

const baseConfig = {
    context: config.projectDirectory,
    mode: config.minify ? 'production' : 'development',
    optimization: {
        splitChunks: {
            chunks: 'async',
            automaticNameDelimiter: '.'
        },
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true,
                    mangle: true,
                    safari10: true
                }
            })
        ],
        noEmitOnErrors: config.minify ? true : false
    },
    output: {
        path: path.resolve(config.projectDirectory, config.dest.getPath('javascript')),
        filename: '[name].js',
        publicPath: `${config.dest.getPath('javascript').replace(config.dest.getPath('root'), '')}/`
    },
    devtool: config.sourcemaps ? 'source-map' : undefined,
    resolve: {
        alias: createAliasObject(),
        symlinks: false,
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    resolveLoader: {
        modules: [
            `${config.projectDirectory}/node_modules`,
            `${config.projectDirectory}/build-config/task-overrides/custom-loaders`
        ]
    }
};


const babelPlugins = [
  '@babel/syntax-dynamic-import',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-optional-chaining',
]

const modernConfig = {
    ...baseConfig,
    name: 'modern',
    entry: {
        'main-es': './source/javascript/main-es'
    },
    output: {
        ...baseConfig.output,
        ...{
            chunkFilename: '[name].chunk-es.js'
        },
    },
    plugins: webpackPlugins,
    module: {
        rules: [
            ...createBabelLoaderConfig(config.browsers.modern, babelPlugins),
            // configureNunjucksLoader(),
            // configureCSSLoader(),
            hasLintfile ? esLintConfig : {},
        ],
    }
};

const legacyConfig = {
    ...baseConfig,
    name: 'legacy',
    entry: {
        'main': ['./source/javascript/main']
    },
    output: {
        ...baseConfig.output,
        chunkFilename: '[name].chunk.js',
    },
    plugins: webpackPlugins,
    module: {
        rules: [
            ...createBabelLoaderConfig(config.browsers.legacy, babelPlugins),
            // configureNunjucksLoader(),
            // configureCSSLoader(),
            hasLintfile ? esLintConfig : {},
        ],
    }
};

const getAliasObject = () => {
    return createAliasObject();
}

module.exports = {
    modernConfig,
    legacyConfig,
    getAliasObject
};
