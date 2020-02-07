class Configuration {
  constructor({
    name,
    chassis,
    gpu = null,
    ipMaxAmount,
    tags = [],
    options = {},
    selectedChoices = {},
    weight = 0,
    price = 0,
    fixedPrice = null,
    highlightText = null,
  }) {
    this.name = name
    this.options = options
    this.selectedChoices = selectedChoices
    this.weight = weight
    this.price = price
    this.chassis = chassis
    this.gpu = gpu
    this.ipMaxAmount = ipMaxAmount
    this.tags = tags
    this.fixedPrice = fixedPrice
    this.highlightText = highlightText
  }

  getOptionsFor(type) {
    return this.options[type] || []
  }

  getSelectedChoiceFor(type) {
    return this.selectedChoices[type]
  }

  setSelectedChoiceFor(key, choice) {
    this.selectedChoices[key] = choice
    return this
  }

  setSelectedChoices(choices) {
    Object.keys(choices).forEach(key => this.setSelectedChoiceFor(key, choices[key]))

    return this
  }

  setPrice(price) {
    this.price = price
    return this
  }

  getSelectedChoices() {
    return Object.keys(this.selectedChoices).map(type => ({
      type,
      value: this.selectedChoices[type],
    }))
  }

  getSelectedChoicesForPricing() {
    const amountableTypes = ['memory']
    return Object.keys(this.selectedChoices).map(type => ({
      key: amountableTypes.includes(type) ? type : this.selectedChoices[type],
      amount: amountableTypes.includes(type) ? this.selectedChoices[type] : 1,
    }))
  }

  matchesFacets(facets) {
    return !facets.some(facet => {
      return false === this.matchesFacet(facet)
    })
  }

  matchesFacet(facet) {
    const selectedItems = facet.getSelectedItems()

    // No selection: Always passes check
    if (selectedItems.length === 0) {
      return true
    }

    // Check whether within selected price range
    if (facet.key === 'price' && this.inRange(facet.getSelectedItems()[0], this.price)) {
      return true
    }

    // Check whether WEN capable
    if (facet.type === 'wen') {
      return true
    }

    // Check whether within drive amount range
    if (
      facet.key === 'maxSataDriveAmount' &&
      this.inRange(facet.getSelectedItems()[0], this.chassis.maxSataDriveAmount)
    ) {
      return true
    }

    // Check whether private network is available
    if (facet.key === 'localUplinkCapable' && this.options['localUplink'].length > 0) {
      return true
    }

    // Check for GPU
    if (facet.key === 'hasGpu' && this.selectedChoices.gpu !== null) {
      return true
    }

    // Check whether the selected facet value is available in options by identifier
    if (
      facet
        .getCompatibleSelectedItemIdentifiers()
        .some(facetOption => this.getOptionsFor(facet.getType()).includes(facetOption))
    ) {
      return true
    }

    // Check whether the selected facet value is available in options
    if (
      facet
        .getCompatibleSelectedItems()
        .some(facetOption => this.getOptionsFor(facet.getType()).includes(facetOption))
    ) {
      return true
    }

    // Nothing was matched
    return false
  }

  inRange(rangeString, value) {
    const ranges = rangeString.split('-')
    if (ranges.length < 2) {
      return parseInt(ranges[0].replace('+', ''), 10) <= value
    }

    return parseInt(ranges[0], 10) < value && parseInt(ranges[1], 10) >= value
  }
}

export default Configuration
