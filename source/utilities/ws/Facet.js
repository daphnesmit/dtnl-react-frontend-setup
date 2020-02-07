class Facet {
  constructor({
    type,
    title,
    key = '@id',
    items = [],
    itemsBeforeFold = [],
    selectedItems = [],
    startCollapsed = false,
    explanation = null,
    allItemsOfType = [],
  }) {
    this.type = type
    this.title = title
    this.key = key
    this.items = items
    this.itemsBeforeFold = itemsBeforeFold
    this.selectedItems = selectedItems
    this.startCollapsed = startCollapsed
    this.explanation = explanation
    this.allItemsOfType = allItemsOfType
  }

  getIdentifier() {
    return this.type + (this.key !== '@id' ? `-${this.key}` : '')
  }

  getType() {
    return this.type
  }

  getSelectedItems() {
    return this.selectedItems
  }

  setSelectedItems(items) {
    this.selectedItems = items
    return this
  }

  getItems() {
    return this.items.length > 0 ? this.items : this.allItemsOfType.map(item => item[this.key])
  }

  getItemsBeforeFold() {
    return this.itemsBeforeFold
  }

  getCompatibleItems() {
    return this.allItemsOfType.filter(
      item => this.selectedItems.length === 0 || this.selectedItems.includes(item[this.key]),
    )
  }

  getCompatibleSelectedItemIdentifiers() {
    return this.allItemsOfType
      .filter(item => this.selectedItems.includes(item[this.key]))
      .map(item => item['@id'])
  }

  getCompatibleSelectedItems() {
    return this.getItems().filter(item => this.selectedItems.includes(item))
  }

  getFilteredCount(additionalItem) {
    const currentItems = this.getCompatibleItems()

    return currentItems.filter(item => additionalItem === item[this.key]).length
  }
}

export default Facet
