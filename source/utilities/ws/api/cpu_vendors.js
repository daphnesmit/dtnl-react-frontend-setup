export default {
  '@context': '/api/contexts/CpuVendor',
  '@id': '/api/cpu_vendors',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/cpu_vendors/1',
      '@type': 'CpuVendor',
      id: 1,
      name: 'Intel',
    },
    {
      '@id': '/api/cpu_vendors/2',
      '@type': 'CpuVendor',
      id: 2,
      name: 'AMD',
    },
  ],
  'hydra:totalItems': 2,
}
