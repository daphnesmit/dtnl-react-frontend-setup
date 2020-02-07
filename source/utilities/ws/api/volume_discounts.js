export default {
  '@context': '/api/contexts/VolumeDiscount',
  '@id': '/api/volume_discounts',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/volume_discounts/1',
      '@type': 'VolumeDiscount',
      id: 1,
      requiredAmount: 8,
      discount: 12.5,
    },
  ],
  'hydra:totalItems': 1,
}
