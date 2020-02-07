export default {
  '@context': '/api/contexts/DdosShield',
  '@id': '/api/ddos_shields',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/ddos_shields/1',
      '@type': 'DdosShield',
      gbAmount: 10,
      prices: [],
      displayName: '10 Gbit/s protection',
    },
    {
      '@id': '/api/ddos_shields/2',
      '@type': 'DdosShield',
      gbAmount: 20,
      prices: [
        {
          '@id': '/api/prices/1',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 25000,
        },
      ],
      displayName: '20 Gbit/s protection',
    },
    {
      '@id': '/api/ddos_shields/3',
      '@type': 'DdosShield',
      gbAmount: 40,
      prices: [
        {
          '@id': '/api/prices/2',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 42500,
        },
      ],
      displayName: '40 Gbit/s protection',
    },
    {
      '@id': '/api/ddos_shields/4',
      '@type': 'DdosShield',
      gbAmount: 60,
      prices: [
        {
          '@id': '/api/prices/3',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 60000,
        },
      ],
      displayName: '60 Gbit/s protection',
    },
    {
      '@id': '/api/ddos_shields/5',
      '@type': 'DdosShield',
      gbAmount: 80,
      prices: [
        {
          '@id': '/api/prices/4',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 77500,
        },
      ],
      displayName: '80 Gbit/s protection',
    },
    {
      '@id': '/api/ddos_shields/6',
      '@type': 'DdosShield',
      gbAmount: 100,
      prices: [
        {
          '@id': '/api/prices/5',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 89900,
        },
      ],
      displayName: '100 Gbit/s protection',
    },
  ],
  'hydra:totalItems': 6,
}
