export default {
  replaceFormData(context, payload) {
    console.log('replace')
    context.commit('replaceFormData', payload)
  },
  updateFormData(context, payload) {
    console.log('update')
    context.commit('updateFormData', payload)
  },
  updateConfigurationList(context, payload) {
    context.commit('updateConfigurationList', payload)
  },
}
