export default {
  '@context': '/api/contexts/LocalUplink',
  '@id': '/api/local_uplinks',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/local_uplinks/1',
      '@type': 'LocalUplink',
      speed: 1000,
      prices: [
        {
          '@id': '/api/prices/10',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 500,
        },
      ],
      displayName: '1Gbit/s',
    },
    {
      '@id': '/api/local_uplinks/2',
      '@type': 'LocalUplink',
      speed: 10000,
      prices: [
        {
          '@id': '/api/prices/11',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 4000,
        },
      ],
      displayName: '10Gbit/s',
    },
  ],
  'hydra:totalItems': 2,
}
