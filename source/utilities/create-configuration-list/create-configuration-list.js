import CONFIG from '@utilities/config'
import { Configuration, ConfigurationList, Facet, Pricing } from '@utilities/ws'

const createConfigurationList = () => {
  const configurations = CONFIG.dummyData.configurations.map(item => new Configuration(item))
  const facets = CONFIG.dummyData.facets.map(item => new Facet(item))
  const pricing = new Pricing({ prices: CONFIG.dummyData.prices })

  return new ConfigurationList({
    configurations,
    facets,
    pricing,
  })
}

export default createConfigurationList
