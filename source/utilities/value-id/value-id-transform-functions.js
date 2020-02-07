const transformFunctions = {
  'int:': value => parseInt(value),
  'all:': () => 'all',
  'bool:': value => value === 'true',
  'str:': value => value,
}

export default transformFunctions
