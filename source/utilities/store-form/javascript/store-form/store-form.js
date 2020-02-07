import Events from '@utilities/events'
import formDataEntries from '@utilities/form-data-entries'
import store from '@utilities/store'

class StoreForm {
  constructor() {
    this.bindEvents()
  }

  bindEvents() {
    Events.$on('store-form::save', e => this.save(e))
    Events.$on('store-form::update', e => this.update(e))
  }

  // Saves and replaces entire form data
  save(e) {
    const { form, storeId, itemId } = e.detail

    const data = this.getData(form)

    if (form && storeId) {
      this.saveForm(data, storeId, itemId, 'replaceFormData')
      return
    }
  }

  // Updates a single field
  update(e) {
    const { form, storeId, itemId, name } = e.detail

    const data = this.getData(form)

    // this will empty the form field
    if (this.objectIsEmpty(data)) {
      data[name] = []
    }

    if (form && storeId) {
      this.saveForm(data, storeId, itemId, 'updateFormData')
    }
  }

  objectIsEmpty(obj) {
    return Object.entries(obj).length === 0
  }

  getData(form) {
    const entries = formDataEntries(form)
    const data = {}

    for (const [key, value] of entries) {
      if (data[key]) {
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]]
        }

        data[key].push(value)
      } else {
        if (value) {
          data[key] = value
        }
      }
    }

    return data
  }

  saveForm(data, storeId, itemId = false, action) {
    const dispatchConfig = { storeId, data }

    if (itemId) dispatchConfig.itemId = itemId

    store.dispatch(action, dispatchConfig)
  }
}

export default new StoreForm()
