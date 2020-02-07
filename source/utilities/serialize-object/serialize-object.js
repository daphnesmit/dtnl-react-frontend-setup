/**
 * Serialize all form data into an Object
 * @param  {Node}   form The form to serialize
 * @return {Object}      The serialized form obbject
 */
const serializeObject = function(form) {
  if (!form || !form.elements) return ''

  // Setup our serialized data
  const serialized = {}

  // Loop through each field in the form
  for (let i = 0; i < form.elements.length; i++) {
    const field = form.elements[i]

    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (
      !field.name ||
      field.disabled ||
      field.type === 'file' ||
      field.type === 'reset' ||
      field.type === 'submit' ||
      field.type === 'button'
    ) {
      /* eslint-disable-next-line */
      continue
    }

    // Convert field data to a query string
    if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
      serialized[field.name] = field.value
    }
  }

  return serialized
}
export default serializeObject
