const walkFileListSync = require(`${process.cwd()}/gulpfile.js/src/node/file/walk-file-list-sync`);
const config = require(process.cwd() + '/gulpfile.js/config');
const path = require('path');

const getReferences = (folder, pathName = 'javascript' ) => {

    const components = walkFileListSync( config.source.getPath(folder), pathName );
    const stripPath = path.join(config.source.getPath(folder), '/');

    return [].reduce.call(components, (data, component) => {

        const moduleName = component.replace(stripPath, '').split(/[\\|\/]/)[0];
        data[`${moduleName}.html`] = path.resolve(__dirname, '../../', component, `${moduleName}`);

        return data;

    }, {});

}

module.exports = configureNunjucksLoader = () => {

    return {
        test: /\.(html?|njk)$/,
        use: [
            'html-loader',
            {
              loader  : 'nunjucks-loader',
              options : {
                templates : path.resolve(__dirname, 'source/templates'),
                alias: getReferences('components', 'template')
              }
            }

        ]
    };

};