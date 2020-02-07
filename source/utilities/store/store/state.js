/**
 * A state object
 * @typedef {Object<string, any>} State
 * @property {array} stores Array of items
 */
/**
 * @type {State} state
 * @returns {State} state
 */

// Get stores by default
import CONFIG from '@utilities/config'
import createConfigurationList from '@utilities/create-configuration-list'
import { SessionStorage } from '@utilities/storage'

// Create initial configurationList
const state = {
  configurationList: createConfigurationList(),
}

// If there's data in SessionStorage, put it in state.
for (let key in CONFIG.stores) {
  const data = SessionStorage.get(key)

  if (data) {
    state[key] = data
  }
}

export default state
