import Events from '@utilities/events'
import { SessionStorage } from '@utilities/storage'

const setInputState = (input, value) => {
  if (!input || !input.type) return

  switch (input.type) {
    case 'text':
    case 'select-one':
      input.value = value
      break
    case 'checkbox':
    case 'radio':
      if (input.value === value) input.checked = true
      break
  }
}

const clearForm = form => {
  const inputs = [...form.querySelectorAll('input')]

  inputs.forEach(input => {
    switch (input.type) {
      case 'checkbox':
      case 'radio':
        input.checked = false
        break
      case 'text':
        input.value = ''
    }
  })
}

const prefillForm = ({ form, storeId, itemId = false, triggerSave = false } = {}) => {
  let data = SessionStorage.get(storeId)

  if (!data) return

  if (itemId) {
    data = data[itemId]
  }

  if (!data) return

  clearForm(form)

  for (const [name, value] of Object.entries(data)) {
    const inputs = [...form.querySelectorAll(`[name=${name}]`)]

    if (Array.isArray(value)) {
      value.forEach(item => {
        setInputsState(inputs, item)
      })
    } else {
      setInputsState(inputs, value)
    }
  }

  // Trigger save event to automatically store formdata in store
  if (triggerSave) {
    Events.$trigger('store-form::save', { form, storeId, itemId })
  }
}

const setInputsState = (inputs, value) => {
  if (!inputs.length) {
    setInputState(inputs[0], value)
  } else {
    inputs.forEach(input => {
      setInputState(input, value)
    })
  }
}

export default prefillForm
