const autoprefixer = require('autoprefixer');
const config      = require(process.cwd() + '/gulpfile.js/config');

const BROWSERS = [
    '> 1%',
    'last 2 versions',
    'Firefox ESR',
    'ie >= 11',
    'iOS 8'
];

module.exports = configureCSSLoader = () => {

    return {
        test: /\.scss$/,
        use: [{
            loader: 'to-string-loader',
        },{
            loader: 'postcss-loader',
            options: {
                sourceMap: false,
                plugins: () => [autoprefixer({ overrideBrowserslist: BROWSERS })]
            }
        },{
            loader: 'sass-loader',
            options: {
                sassOptions: {
                    includePaths: [`${config.projectDirectory}/node_modules/`]
                }
            }
        }],
    };

};