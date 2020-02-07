import { isValidEmail } from '@utilities/validation'

const VALIDATION_FUNCTIONS = {
  ['required']: input => {
    if (input.type === 'checkbox') {
      return input.checked ? true : false
    } else {
      return input.value ? true : false
    }
  },
  ['no-special']: input => /^((?!(<|>)).)*$/.test(input.value),
  ['email']: input => isValidEmail(input.value),
  ['min2']: input => input.value.length >= 2,
}

export default VALIDATION_FUNCTIONS
