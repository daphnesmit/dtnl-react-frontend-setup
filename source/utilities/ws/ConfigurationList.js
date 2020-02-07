import Configuration from './Configuration'

class ConfigurationList {
  constructor({ configurations, facets, sorting = {}, pricing }) {
    this.configurations = configurations
    this.facets = facets.reduce((mappedByIdentifier, facet) => {
      mappedByIdentifier[facet.getIdentifier()] = facet
      return mappedByIdentifier
    }, {})
    this.sorting = sorting
    this.pricing = pricing
  }

  getList() {
    const augmentedConfigurations = this.setPricesOnConfigurations(
      this.augmentListForMultipleSelection(this.configurations),
    )
    const filteredConfigurations = augmentedConfigurations.filter(configuration =>
      configuration.matchesFacets(Object.values(this.facets)),
    )
    return this.sortConfigurations(filteredConfigurations)
  }

  augmentListForMultipleSelection(configurations) {
    const selectedCpus = Object.values(this.facets)
      .filter(facet => facet.type === 'cpu')
      .reduce((allCpuIds, facet) => {
        const facetCpuIds = facet.getCompatibleSelectedItemIdentifiers()
        allCpuIds = [
          ...allCpuIds.filter(cpuId => facetCpuIds.length === 0 || facetCpuIds.includes(cpuId)),
          ...facetCpuIds.filter(cpuId => allCpuIds.length === 0 || allCpuIds.includes(cpuId)),
        ]
        return [...new Set(allCpuIds)]
      }, [])

    return selectedCpus.length === 0
      ? configurations
      : configurations.reduce((augmentedList, configuration) => {
          selectedCpus
            .filter(cpu => configuration.getOptionsFor('cpu').includes(cpu))
            .forEach(cpu => {
              const newSelectedChoices = Object.assign({}, configuration.selectedChoices, { cpu })
              const augmentedConfiguration = new Configuration(
                Object.assign({}, configuration, {
                  selectedChoices: newSelectedChoices,
                }),
              )
              augmentedList = [...augmentedList, augmentedConfiguration]
            })
          return augmentedList
        }, [])
  }

  getChunkedList(amount, offset) {
    return this.getList().slice(offset, offset + amount)
  }

  updateFacet(facet) {
    this.facets[facet.getIdentifier()] = facet
    this.reflectFacetSelectionInConfigurations(facet)
  }

  reflectFacetSelectionInConfigurations(facet) {
    if (facet.getSelectedItems().length === 1) {
      this.configurations.forEach(configuration => {
        configuration.setSelectedChoiceFor(facet.getType(), facet.getSelectedItems()[0])
      })
    }
  }

  setSorting(key, direction) {
    this.sorting = { key, direction }
  }

  sortConfigurations(configurations) {
    return configurations.sort(
      (a, b) =>
        (this.sorting.direction === 'desc' ? -1 : 1) * (a[this.sorting.key] - b[this.sorting.key]),
    )
  }

  setPricesOnConfigurations(configurations) {
    return configurations.map(configuration =>
      configuration.setPrice(
        this.pricing.getTotalPriceFor(configuration.getSelectedChoicesForPricing()),
      ),
    )
  }

  getPriceRanges() {
    return this.pricing.getPriceRanges(this.getList().map(configuration => configuration.price))
  }
}

export default ConfigurationList
