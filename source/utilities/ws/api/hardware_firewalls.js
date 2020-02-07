export default {
  '@context': '/api/contexts/HardwareFirewall',
  '@id': '/api/hardware_firewalls',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/hardware_firewalls/1',
      '@type': 'HardwareFirewall',
      name: 'Cisco ASA 5505',
      datasheetUrl:
        'https://www.cisco.com/c/en/us/products/collateral/security/asa-5500-series-next-generation-firewalls/prod_brochure0900aecd80402e36.pdf',
      capacity: 100,
      prices: [
        {
          '@id': '/api/prices/6',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 4000,
        },
        {
          '@id': '/api/prices/7',
          '@type': 'Price',
          location: '/api/locations/2',
          amount: 4400,
        },
      ],
    },
    {
      '@id': '/api/hardware_firewalls/2',
      '@type': 'HardwareFirewall',
      name: 'Fortinet FortiGate 60D',
      datasheetUrl:
        'https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/FortiGate_FortiWiFi_60D_Series.pdf',
      capacity: 1000,
      prices: [
        {
          '@id': '/api/prices/8',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 5000,
        },
        {
          '@id': '/api/prices/9',
          '@type': 'Price',
          location: '/api/locations/2',
          amount: 5500,
        },
      ],
    },
  ],
  'hydra:totalItems': 2,
}
