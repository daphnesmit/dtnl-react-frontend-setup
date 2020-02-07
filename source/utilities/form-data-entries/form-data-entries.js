let formDataEntries

if (typeof FormData === 'function' && 'entries' in FormData.prototype) {
  formDataEntries = function(form) {
    return Array.from(new FormData(form).entries())
  }
} else {
  formDataEntries = function(form) {
    const entries = []

    const elements = form.elements
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i]
      const tagName = el.tagName.toUpperCase()

      if (tagName === 'SELECT' || tagName === 'TEXTAREA' || tagName === 'INPUT') {
        const type = el.type
        const name = el.name

        if (
          name &&
          !el.disabled &&
          type !== 'submit' &&
          type !== 'reset' &&
          type !== 'button' &&
          ((type !== 'radio' && type !== 'checkbox') || el.checked)
        ) {
          if (tagName === 'SELECT') {
            const options = el.getElementsByTagName('option')
            for (let j = 0; j < options.length; j++) {
              const option = options[j]
              if (option.selected) {
                entries.push([name, option.value])
              }
            }
          } else if (type === 'file') {
            // eslint-disable-next-line no-console
            console.warn('form-data-entries could not serialize <input type=file>', el)
            entries.push([name, ''])
          } else {
            entries.push([name, el.value])
          }
        }
      }
    }

    return entries
  }
}

export default formDataEntries
