export default {
  '@context': '/api/contexts/Pricing',
  '@id': '/api/pricings',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/pricings/memory',
      '@type': 'Pricing',
      appliesTo: 'memory',
      description: 'Price per GB',
      prices: [
        {
          '@id': '/api/prices/12',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 100,
        },
      ],
      startingPrices: [],
      volumeDiscounts: [
        {
          '@id': '/api/volume_discounts/1',
          '@type': 'VolumeDiscount',
          requiredAmount: 8,
          discount: 12.5,
        },
      ],
    },
    {
      '@id': '/api/pricings/memory-ecc',
      '@type': 'Pricing',
      appliesTo: 'memory-ecc',
      description: 'Price per GB',
      prices: [
        {
          '@id': '/api/prices/13',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 100,
        },
        {
          '@id': '/api/prices/14',
          '@type': 'Price',
          location: '/api/locations/2',
          amount: 125,
        },
      ],
      startingPrices: [],
      volumeDiscounts: [],
    },
    {
      '@id': '/api/pricings/hardware-raid',
      '@type': 'Pricing',
      appliesTo: 'hardware-raid',
      description: 'Price applies to all hardware raid setups',
      prices: [
        {
          '@id': '/api/prices/15',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 2500,
        },
        {
          '@id': '/api/prices/16',
          '@type': 'Price',
          location: '/api/locations/2',
          amount: 3000,
        },
      ],
      startingPrices: [],
      volumeDiscounts: [],
    },
    {
      '@id': '/api/pricings/backup',
      '@type': 'Pricing',
      appliesTo: 'backup',
      description:
        'Starting price applies to the initial 10 GB, other price is added for every increment of 10 GB that is added afterwards',
      prices: [
        {
          '@id': '/api/prices/17',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 100,
        },
        {
          '@id': '/api/prices/18',
          '@type': 'Price',
          location: '/api/locations/2',
          amount: 110,
        },
      ],
      startingPrices: [
        {
          '@id': '/api/prices/19',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 850,
        },
        {
          '@id': '/api/prices/20',
          '@type': 'Price',
          location: '/api/locations/2',
          amount: 935,
        },
      ],
      volumeDiscounts: [],
    },
    {
      '@id': '/api/pricings/ipv4',
      '@type': 'Pricing',
      appliesTo: 'ipv4',
      description: 'Price per IPv4 address',
      prices: [
        {
          '@id': '/api/prices/21',
          '@type': 'Price',
          location: '/api/locations/1',
          amount: 200,
        },
        {
          '@id': '/api/prices/22',
          '@type': 'Price',
          location: '/api/locations/2',
          amount: 400,
        },
      ],
      startingPrices: [],
      volumeDiscounts: [],
    },
  ],
  'hydra:totalItems': 5,
}
