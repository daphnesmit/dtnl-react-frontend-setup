import TRANSFORM_FUNCTIONS from './value-id-transform-functions'

class ValueId {
  constructor() {}

  getValue(value) {
    if (this.valueHasId(value)) {
      const parts = value.split('/')

      return parts[parts.length - 1]
    } else {
      return value
    }
  }

  valueHasId(value) {
    const transformFunction = this.getTransformFunction(value)

    return !!transformFunction
  }

  getTransformFunction(value) {
    for (const key in TRANSFORM_FUNCTIONS) {
      if (value.indexOf(key) >= 0) return TRANSFORM_FUNCTIONS[key]
    }

    return false
  }

  getTransformedValue(value) {
    if (this.valueHasId(value)) {
      const transformFunction = this.getTransformFunction(value)
      const extractedValue = this.getValue(value)

      return transformFunction(extractedValue)
    }
  }
}

export default new ValueId()
