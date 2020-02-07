const parseJSON = function(json, defaultValue) {
  // This function cannot be optimised, it's best to
  // keep it small!
  let parsed

  try {
    parsed = JSON.parse(json)
  } catch (e) {
    parsed = defaultValue
  }

  return parsed || null // Could be undefined!
}

export default parseJSON
