class Pricing {
  constructor({ prices = {}, priceRanges = {} }) {
    this.prices = prices
    this.priceRanges = priceRanges
  }

  getTotalPriceFor(items) {
    return items.reduce((total, item) => (total += this.getPriceFor(item)), 0)
  }

  getPriceFor({ key, amount = 1 }) {
    return (this.prices[key] || 0) * amount
  }

  getPriceRanges(prices) {
    return prices.reduce(
      (countByRange, price) => {
        const range =
          this.priceRanges.find(range => price >= range.min && (!range.max || price < range.max))
            .key || 'unknown'
        countByRange[range] = countByRange[range] + 1 || 1
        return countByRange
      },
      this.priceRanges
        .map(pr => pr.key)
        .reduce((initialState, key) => {
          initialState[key] = 0
          return initialState
        }, {}),
    )
  }
}

export default Pricing
