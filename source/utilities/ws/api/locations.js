export default {
  '@context': '/api/contexts/Location',
  '@id': '/api/locations',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/locations/1',
      '@type': 'Location',
      id: 1,
      country: 'NL',
      city: 'Naaldwijk',
      displayName: 'NL - Naaldwijk',
      currency: {
        currencyIsoCode: 'EUR',
        symbol: '€',
      },
    },
    {
      '@id': '/api/locations/2',
      '@type': 'Location',
      id: 2,
      country: 'CW',
      city: 'Willemstad',
      displayName: 'CW - Willemstad',
      currency: {
        currencyIsoCode: 'USD',
        symbol: '$',
      },
    },
  ],
  'hydra:totalItems': 2,
}
