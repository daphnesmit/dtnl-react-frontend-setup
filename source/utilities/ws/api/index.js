import chassis from './chassis.js'
import configurations from './configurations.js'
import cpu_vendors from './cpu_vendors.js'
import cpus from './cpus.js'
import ddos_shields from './ddos_shields.js'
import hardware_firewalls from './hardware_firewalls.js'
import license_vendors from './license_vendors.js'
import licenses from './licenses.js'
import local_uplinks from './local_uplinks.js'
import locations from './locations.js'
import operating_system_categories from './operating_system_categories.js'
import operating_systems from './operating_systems.js'
import prices from './prices.js'
import pricings from './pricings.js'
import storage_drives from './storage_drives.js'
import thread_scans from './thread_scans.js'
import traffic from './traffic.js'
import uplinks from './uplinks.js'
import volume_discounts from './volume_discounts.js'

const allTypes = [
  chassis,
  configurations,
  cpu_vendors,
  cpus,
  ddos_shields,
  hardware_firewalls,
  license_vendors,
  licenses,
  local_uplinks,
  locations,
  operating_system_categories,
  operating_systems,
  prices,
  pricings,
  storage_drives,
  thread_scans,
  traffic,
  uplinks,
  volume_discounts,
]

const apiData = allTypes
  .map(type => type['hydra:member'])
  .reduce((acc, entry) => acc.concat(entry))
  .reduce((acc, entry) => {
    acc[entry['@id']] = entry
    return acc
  }, {})

class Api {
  getData(url) {
    return apiData[url]
  }
  getAllUrls() {
    return Object.keys(apiData)
  }
  getByType(type) {
    return this.getAllUrls()
      .filter(entry => entry.includes(type))
      .map(url => this.getData(url))
  }
}

export default new Api()
