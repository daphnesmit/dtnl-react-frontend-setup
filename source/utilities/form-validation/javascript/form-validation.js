import ERROR_CODES from './form-validation-error-codes'
import VALIDATION_FUNCTIONS from './form-validation-functions'

const getTypes = input => {
  const types = input
    .getAttribute('validation')
    .split(',')
    .map(item => item.trim())

  return types
}

const getErrorMessage = (type, input) => {
  return VALIDATION_FUNCTIONS[type] && VALIDATION_FUNCTIONS[type](input) ? false : ERROR_CODES[type]
}

const validate = form => {
  const fields = [...form.querySelectorAll('[validation]')]
  const errors = []

  fields.forEach(input => {
    const types = getTypes(input)
    let error = false

    types.forEach(type => {
      if (error === false) {
        const errorMessage = getErrorMessage(type, input)

        error = errorMessage ? errorMessage : error
      }
    })

    if (error) {
      errors.push({
        element: input,
        message: error,
      })
    }
  })

  return {
    validates: errors.length ? false : true,
    errors,
  }
}

export { validate }
