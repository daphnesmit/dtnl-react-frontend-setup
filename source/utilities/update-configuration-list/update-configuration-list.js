import ValueId from '@utilities/value-id'

const clearFacets = facets => {
  for (const key in facets) {
    const facet = facets[key]

    facet.setSelectedItems([])
  }
}

const handleFilter = (configurationList, data) => {
  clearFacets(configurationList.facets)

  for (const key in data) {
    let value = Array.isArray(data[key]) ? data[key] : [data[key]]
    const facet = configurationList.facets[key]

    // Check if any value has a value id, and if so, transform into proper value
    value = value.map(val => {
      if (ValueId.valueHasId(val)) {
        return ValueId.getTransformedValue(val)
      } else {
        return val
      }
    })

    // Turn value into empty array if first item is 'all'
    value = value[0] === 'all' ? [] : value

    facet.setSelectedItems(value)

    configurationList.updateFacet(facet)
  }
}

const handleSorting = (configurationList, data) => {
  const [key, direction = false] = data['product-sorting'].split(':')

  configurationList.setSorting(key, direction)
}

const updateConfigurationList = (configurationList, storeId, data) => {
  const type = storeId

  switch (type) {
    case 'filter':
      handleFilter(configurationList, data)
      break
    case 'sorting':
      handleSorting(configurationList, data)
      break
  }

  return configurationList
}

export default updateConfigurationList
