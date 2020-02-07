export default {
  '@context': '/api/contexts/Traffic',
  '@id': '/api/traffic',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/traffic/1',
      '@type': 'Traffic',
      tbAmount: 50,
      prices: [],
      displayName: '50 TB',
    },
    {
      '@id': '/api/traffic/2',
      '@type': 'Traffic',
      tbAmount: 100,
      prices: [
        {
          '@id': '/api/prices/23',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 5500,
        },
      ],
      displayName: '100 TB',
    },
  ],
  'hydra:totalItems': 2,
}
