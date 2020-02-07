module.exports = configureHTMLLoader = () => {

    return {
        test: /\.html$/,
        use: {
            loader: 'html-loader',
            options: {
                exportAsEs6Default: true,
                minimize: true,
            }
        },
    };

};