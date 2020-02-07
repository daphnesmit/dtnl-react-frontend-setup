export default {
  '@context': '/api/contexts/OperatingSystemCategory',
  '@id': '/api/operating_system_categories',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/operating_system_categories/1',
      '@type': 'OperatingSystemCategory',
      id: 1,
      name: 'Windows',
      displayName: 'Windows',
    },
    {
      '@id': '/api/operating_system_categories/2',
      '@type': 'OperatingSystemCategory',
      id: 2,
      name: 'Unix',
      displayName: 'Unix',
    },
    {
      '@id': '/api/operating_system_categories/3',
      '@type': 'OperatingSystemCategory',
      id: 3,
      name: 'Virtualization',
      displayName: 'Virtualization',
    },
  ],
  'hydra:totalItems': 3,
}
