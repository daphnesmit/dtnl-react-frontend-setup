import Stickyfill from 'stickyfilljs'

const SP_HOOK = '[js-hook-sticky]'

export class StickyPolyfill {
  constructor() {
    this._initElements()
  }

  _initElements() {
    this.elements = getElements()
    Stickyfill.add(this.elements)
  }
}

/**
 * Gets all elements matching the SP_HOOK
 * @returns {NodeList} All matching HTMLElements
 */
function getElements() {
  return document.querySelectorAll(SP_HOOK)
}

export default new StickyPolyfill()
