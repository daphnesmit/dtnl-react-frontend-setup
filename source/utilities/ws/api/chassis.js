export default {
  '@context': '/api/contexts/Chassis',
  '@id': '/api/chassis',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/chassis/1',
      '@type': 'Chassis',
      vendor: {
        '@id': '/api/chassis_vendors/1',
        '@type': 'ChassisVendor',
        name: 'Fujitsu',
      },
      model: 'PRIMERGY RX1330 M3',
      sockets: 1,
      storageSataMaxAmount: 4,
      storagePcieMaxAmount: 0,
      memorySlots: 4,
      cpuOptions: [
        '/api/cpus/1',
        '/api/cpus/2',
        '/api/cpus/3',
        '/api/cpus/4',
        '/api/cpus/5',
        '/api/cpus/6',
        '/api/cpus/7',
        '/api/cpus/8',
        '/api/cpus/9',
        '/api/cpus/10',
        '/api/cpus/11',
        '/api/cpus/12',
        '/api/cpus/13',
        '/api/cpus/14',
        '/api/cpus/15',
        '/api/cpus/16',
        '/api/cpus/17',
        '/api/cpus/18',
        '/api/cpus/19',
        '/api/cpus/20',
        '/api/cpus/21',
        '/api/cpus/22',
        '/api/cpus/23',
        '/api/cpus/24',
        '/api/cpus/25',
        '/api/cpus/26',
        '/api/cpus/27',
        '/api/cpus/28',
        '/api/cpus/29',
        '/api/cpus/30',
      ],
      cpu: '/api/cpus/3',
      prices: [],
      displayName: 'Fujitsu PRIMERGY RX1330 M3',
    },
    {
      '@id': '/api/chassis/2',
      '@type': 'Chassis',
      vendor: {
        '@id': '/api/chassis_vendors/1',
        '@type': 'ChassisVendor',
        name: 'Fujitsu',
      },
      model: 'PRIMERGY RX2510 M2',
      sockets: 2,
      storageSataMaxAmount: 4,
      storagePcieMaxAmount: 0,
      memorySlots: 4,
      cpuOptions: ['/api/cpus/4', '/api/cpus/5'],
      cpu: null,
      prices: [],
      displayName: 'Fujitsu PRIMERGY RX2510 M2',
    },
    {
      '@id': '/api/chassis/3',
      '@type': 'Chassis',
      vendor: {
        '@id': '/api/chassis_vendors/1',
        '@type': 'ChassisVendor',
        name: 'Fujitsu',
      },
      model: 'PRIMERGY RX2530 M4',
      sockets: 2,
      storageSataMaxAmount: 4,
      storagePcieMaxAmount: 0,
      memorySlots: 4,
      cpuOptions: ['/api/cpus/4', '/api/cpus/5'],
      cpu: null,
      prices: [],
      displayName: 'Fujitsu PRIMERGY RX2530 M4',
    },
    {
      '@id': '/api/chassis/4',
      '@type': 'Chassis',
      vendor: {
        '@id': '/api/chassis_vendors/2',
        '@type': 'ChassisVendor',
        name: 'Dell',
      },
      model: 'PowerEdge R230',
      sockets: 1,
      storageSataMaxAmount: 4,
      storagePcieMaxAmount: 0,
      memorySlots: 4,
      cpuOptions: ['/api/cpus/4', '/api/cpus/5'],
      cpu: null,
      prices: [],
      displayName: 'Dell PowerEdge R230',
    },
    {
      '@id': '/api/chassis/5',
      '@type': 'Chassis',
      vendor: {
        '@id': '/api/chassis_vendors/2',
        '@type': 'ChassisVendor',
        name: 'Dell',
      },
      model: 'PowerEdge R430',
      sockets: 2,
      storageSataMaxAmount: 4,
      storagePcieMaxAmount: 0,
      memorySlots: 4,
      cpuOptions: ['/api/cpus/4', '/api/cpus/5'],
      cpu: null,
      prices: [],
      displayName: 'Dell PowerEdge R430',
    },
    {
      '@id': '/api/chassis/6',
      '@type': 'Chassis',
      vendor: {
        '@id': '/api/chassis_vendors/2',
        '@type': 'ChassisVendor',
        name: 'Dell',
      },
      model: 'PowerEdge R840',
      sockets: 4,
      storageSataMaxAmount: 4,
      storagePcieMaxAmount: 0,
      memorySlots: 4,
      cpuOptions: ['/api/cpus/4', '/api/cpus/5'],
      cpu: null,
      prices: [],
      displayName: 'Dell PowerEdge R840',
    },
    {
      '@id': '/api/chassis/7',
      '@type': 'Chassis',
      vendor: {
        '@id': '/api/chassis_vendors/2',
        '@type': 'ChassisVendor',
        name: 'Dell',
      },
      model: 'PowerEdge T110',
      sockets: 1,
      storageSataMaxAmount: 4,
      storagePcieMaxAmount: 0,
      memorySlots: 4,
      cpuOptions: ['/api/cpus/4', '/api/cpus/5'],
      cpu: null,
      prices: [],
      displayName: 'Dell PowerEdge T110',
    },
    {
      '@id': '/api/chassis/8',
      '@type': 'Chassis',
      vendor: {
        '@id': '/api/chassis_vendors/2',
        '@type': 'ChassisVendor',
        name: 'Dell',
      },
      model: 'PowerEdge T620',
      sockets: 2,
      storageSataMaxAmount: 4,
      storagePcieMaxAmount: 0,
      memorySlots: 4,
      cpuOptions: ['/api/cpus/4', '/api/cpus/5'],
      cpu: null,
      prices: [],
      displayName: 'Dell PowerEdge T620',
    },
    {
      '@id': '/api/chassis/9',
      '@type': 'Chassis',
      vendor: {
        '@id': '/api/chassis_vendors/3',
        '@type': 'ChassisVendor',
        name: 'HP',
      },
      model: 'ProLiant DL360',
      sockets: 2,
      storageSataMaxAmount: 4,
      storagePcieMaxAmount: 0,
      memorySlots: 4,
      cpuOptions: ['/api/cpus/4', '/api/cpus/5'],
      cpu: null,
      prices: [],
      displayName: 'HP ProLiant DL360',
    },
    {
      '@id': '/api/chassis/10',
      '@type': 'Chassis',
      vendor: {
        '@id': '/api/chassis_vendors/4',
        '@type': 'ChassisVendor',
        name: 'Lenovo',
      },
      model: 'ThinkServer TS140',
      sockets: 1,
      storageSataMaxAmount: 4,
      storagePcieMaxAmount: 0,
      memorySlots: 4,
      cpuOptions: ['/api/cpus/4', '/api/cpus/5'],
      cpu: null,
      prices: [],
      displayName: 'Lenovo ThinkServer TS140',
    },
    {
      '@id': '/api/chassis/11',
      '@type': 'Chassis',
      vendor: {
        '@id': '/api/chassis_vendors/4',
        '@type': 'ChassisVendor',
        name: 'Lenovo',
      },
      model: 'RD350',
      sockets: 2,
      storageSataMaxAmount: 4,
      storagePcieMaxAmount: 0,
      memorySlots: 4,
      cpuOptions: ['/api/cpus/4', '/api/cpus/5'],
      cpu: null,
      prices: [],
      displayName: 'Lenovo RD350',
    },
  ],
  'hydra:totalItems': 11,
}
