const valueIds = {
  'int:': value => parseInt(value),
  'all:': () => 'all',
  'bool:': value => value === 'true',
  'str:': value => value,
}

export default valueIds
