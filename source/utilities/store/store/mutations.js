import { SessionStorage } from '@utilities/storage'
import store from '@utilities/store'
import updateConfigurationList from '@utilities/update-configuration-list'

export default {
  replaceFormData(state, payload) {
    const { data, storeId, itemId = false } = payload

    // Optionally store data in nested object
    let newStore

    if (itemId) {
      newStore = state[storeId] ? state[storeId] : {}

      newStore[itemId] = data
    } else {
      newStore = data
    }

    state[storeId] = newStore
    // const newState = {
    //   ...state,
    //   [storeId]: newStore,
    // }

    SessionStorage.set(storeId, newStore)

    // Dispatch action to update configuration list
    store.dispatch('updateConfigurationList', {
      configurationList: state.configurationList,
      storeId,
      data,
    })

    return state
  },

  updateFormData(state, payload) {
    const { data, storeId, itemId = false } = payload

    for (const key in data) {
      if (itemId) {
        state[storeId][itemId][key] = data[key]
      } else {
        state[storeId][key] = data[key]
      }
    }

    SessionStorage.set(storeId, state[storeId])

    store.dispatch('updateConfigurationList', {
      configurationList: state.configurationList,
      storeId,
      data,
    })

    return state
  },

  updateConfigurationList(state, payload) {
    const { configurationList, storeId, data } = payload

    state.configurationList = updateConfigurationList(configurationList, storeId, data)

    return state
  },
}
