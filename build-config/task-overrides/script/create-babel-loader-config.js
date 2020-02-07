const error = require(`${process.cwd()}/utils/error`)

module.exports = createBabelLoaderConfig = (browserlist, plugins) => {
  if (!browserlist) {
    error('No valid browserlist specified for babel loader config.')
    return
  }

  const babelOptions = {
    useBuiltIns: 'usage',
    modules: false,
    corejs: 3,
    targets: {
      browsers: browserlist,
    },
  }

  const options = {
    plugins,
    presets: ['@babel/preset-react', ['@babel/preset-env', babelOptions]],
  }

  const brokenModuleOptions = {
    plugins,
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          ...babelOptions,
          modules: 'commonjs',
        },
      ],
    ],
  }

  return [
    {
      test: /\.tsx?$/,
      exclude: /node_modules\/(?!@bpd|@atomify)/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options,
        },
        {
          loader: require.resolve('ts-loader'),
          options: { allowTsInNodeModules: true },
        },
      ],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules\/(?!@bpd|@atomify)/,
      use: {
        loader: require.resolve('babel-loader'),
        options,
      },
    },
    {
      test: /\.(js|jsx)$/,
      include: /node_modules\/file-type/,
      use: {
        loader: require.resolve('babel-loader'),
        options: brokenModuleOptions,
      },
    },
    {
      test: /\.scss$/,
      use: ['vue-style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.vue$/,
      use: ['vue-svg-inline-loader', 'vue-loader'],
    },
    {
      test: /\.svg$/,
      use: ['babel-loader', 'vue-svg-loader'],
    },
  ]
}
