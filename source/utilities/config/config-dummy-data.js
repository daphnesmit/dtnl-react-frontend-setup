const range = (start, end, length = end - start + 1) => Array.from({ length }, (_, i) => start + i)

const allItems = (type, amount) => range(1, amount).map(i => `/api/${type}/${i}`)

// Required choices
const allDrives = allItems('storage_drives', 24)
const allDdosShield = allItems('ddos_shield', 6)
const allUnmeteredUplinks = allItems('uplinks', 12)
const allMeteredUplinks = range(13, 16).map(i => `/api/uplinks/${i}`)
const allPaymentTerms = allItems('payment_terms', 4)
const allOperatingSystems = allItems('operating_systems', 31)

// Amount values
const allBackupOptions = range(0, 100).map(i => i * 10)
const allMemoryOptions = [
  2,
  4,
  8,
  16,
  32,
  48,
  64,
  96,
  128,
  192,
  256,
  384,
  512,
  768,
  1024,
  1280,
  1536,
]
const commonMemoryOptions = [8, 16, 32, 48, 64]

// Services
const allThreadScanOptions = [null, ...allItems('thread_scans', 3)]
const allLocalUplinks = [null, ...allItems('local_uplinks', 2)]

import allCpuData from '../ws/api/cpus'

const baseConfiguration = {
  '@id': '/api/configurations/1',
  '@type': 'Configuration',
  name: 'Mock server',
  highlightText: null,
  ipMaxAmount: 4,
  tags: [],
  weight: 1,
  options: {
    uplink: allUnmeteredUplinks,
    operatingSystem: allOperatingSystems,
    paymentTerm: allPaymentTerms,
    ddosShield: allDdosShield,
    memory: commonMemoryOptions,
    location: ['/api/locations/1'],
    storage: allDrives,
    cpu: ['/api/cpus/1', '/api/cpus/2', '/api/cpus/3'],
    threadScan: [],
    localUplink: [],
    backup: allBackupOptions,
  },
  selectedChoices: {
    chassis: '/api/chassis/1',
    cpu: '/api/cpus/1',
    gpu: null,
    location: '/api/locations/1',
    uplink: '/api/uplinks/1',
    localUplink: null,
    threadScan: null,
    backup: 0,
    ddosShield: '/api/ddos_shields/1',
    hardwareFirewall: null,
    operatingSystem: null,
    storage: [
      {
        storageDriveId: '/api/storage_drives/10',
        amount: 1,
        raidConfigurationId: null,
      },
    ],
    memory: 8,
  },
}

const highlightTextOptions = [
  'Special deal',
  'Ideal for storage',
  'Lease-to-own',
  'Cutting edge technology',
]

const randomElement = items => items[(items.length * Math.random()) | 0]

const generateConfiguration = i => {
  const options = { ...baseConfiguration.options }
  const selectedChoices = { ...baseConfiguration.selectedChoices }
  if (i % 4 === 0) {
    // Add some metered only
    options['uplinks'] = allMeteredUplinks
  }
  if (i % 5 === 0) {
    // Add some ThreadScan enabled configurations
    options['threadScan'] = allThreadScanOptions
  }
  if (i % 6 === 0) {
    // Add some private network capable configurations
    options['localUplink'] = allLocalUplinks
  }
  if (i % 9 === 0) {
    // Add some Curacao locations
    options['location'] = ['/api/locations/2']
    selectedChoices['location'] = '/api/locations/2'
  }

  // Randomize choices
  ;['uplink', 'cpu', 'memory'].forEach(key => (selectedChoices[key] = randomElement(options[key])))

  return {
    ...baseConfiguration,
    selectedChoices,
    options,
    '@id': `/api/configurations/${i}`,
    name: `Mock server ${i}`,
    highlightText: i % 3 === 0 ? randomElement(highlightTextOptions) : null,
  }
}

const generateConfigurations = amount => {
  return range(1, amount).map(i => generateConfiguration(i))
}

const facets = [
  {
    title: 'Location',
    type: 'location',
    select: 'radio',
    items: ['/api/locations/1', '/api/locations/2'],
    itemsBeforeFold: ['/api/locations/1', '/api/locations/2'],
    selectedItems: ['/api/locations/1'],
  },
  {
    title: 'Processor',
    type: 'cpu',
    select: 'checkbox',
    items: ['/api/cpus/1', '/api/cpus/2', '/api/cpus/3', '/api/cpus/4', '/api/cpus/5'],
    itemsBeforeFold: ['/api/cpus/1', '/api/cpus/2', '/api/cpus/3'],
    selectedItems: ['/api/cpus/4'],
    allItemsOfType: allCpuData['hydra:member'],
  },
  {
    title: 'Cores',
    type: 'cpu',
    select: 'checkbox',
    key: 'cores',
    items: [2, 4, 8],
    startCollapsed: true,
    itemsBeforeFold: [4, 8],
    allItemsOfType: allCpuData['hydra:member'],
  },
  {
    title: 'Multi Threading',
    type: 'cpu',
    select: 'checkbox',
    key: 'smt',
    startCollapsed: true,
    items: [true],
    allItemsOfType: allCpuData['hydra:member'],
  },
  {
    title: 'Processor count',
    type: 'chassis',
    select: 'checkbox',
    key: 'sockets',
    items: [1, 2, 4],
    startCollapsed: true,
    itemsBeforeFold: [4, 8],
    allItemsOfType: allCpuData['hydra:member'],
  },
  {
    title: 'WEN',
    explanation: {
      linkText: 'Explanation WEN',
      title: 'Worldstream Elastic Network',
      content: 'Explanation for WEN',
    },
    type: 'wen',
    select: 'checkbox',
    items: [true],
  },
  {
    title: 'Private Network',
    type: 'localUplinkCapable',
    select: 'checkbox',
    startCollapsed: true,
    items: [true],
  },
  {
    title: 'Price',
    type: 'price',
    select: 'range',
    key: 'price',
    items: ['0-2000', '2000-5000', '5000-10000', '10000-25000', '25000+'],
  },
  {
    title: 'Memory',
    type: 'memory',
    select: 'radio',
    items: allMemoryOptions,
    itemsBeforeFold: commonMemoryOptions,
  },
  {
    title: 'Drive amount',
    type: 'chassis',
    select: 'checkbox',
    key: 'maxSataDriveAmount',
    startCollapsed: true,
    items: ['4+'],
  },
  {
    title: 'Graphics Card',
    type: 'hasGpu',
    select: 'checkbox',
    startCollapsed: true,
    items: [true],
  },
]

const randomPrices = [
  ...allDdosShield,
  ...allDrives,
  ...allUnmeteredUplinks,
  ...allMeteredUplinks,
  ...allThreadScanOptions,
]
  .filter(value => value !== null)
  .reduce((priceById, option) => {
    priceById[option] = Math.ceil(Math.random() * 1000) * 100
    return priceById
  }, {})

const prices = {
  ...randomPrices,
  memory: 100,
  backup: 1000,
}

export default { configurations: generateConfigurations(20), prices, facets }
