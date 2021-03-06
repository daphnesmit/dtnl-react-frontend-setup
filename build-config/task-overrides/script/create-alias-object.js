const walkFileListSync = require(`${process.cwd()}/gulpfile.js/src/node/file/walk-file-list-sync`);
const config = require(process.cwd() + '/gulpfile.js/config');
const path = require('path');
const getReferences = folder => {
  const components = walkFileListSync(
    path.resolve(config.projectDirectory, config.source.getPath(folder)),
    'javascript',
  )
  const stripPath = path.join(config.source.getPath(folder), '/')

  return [].reduce.call(
    components,
    (data, component) => {
      const moduleName = component
        .replace(stripPath, '')
        .replace('\\', '/')
        .split('/')[0]
      data[`@${folder}/${moduleName}`] = path.resolve(
        config.projectDirectory,
        component,
        moduleName,
      )

      return data
    },
    {},
  )
}

module.exports = createAliasObject = () => {
  const components = getReferences('components')
  const utilities = getReferences('utilities')

  utilities['@utilities'] = path.resolve(
    config.projectDirectory,
    path.join(config.source.getPath('utilities'), '/'),
  )

  return { ...components, ...utilities }
}
