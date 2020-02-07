export default {
  '@context': '/api/contexts/ThreadScan',
  '@id': '/api/thread_scans',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/thread_scans/1',
      '@type': 'ThreadScan',
      name: 'ThreadScan Infra',
      prices: [],
    },
    {
      '@id': '/api/thread_scans/2',
      '@type': 'ThreadScan',
      name: 'ThreadScan Web',
      prices: [],
    },
    {
      '@id': '/api/thread_scans/3',
      '@type': 'ThreadScan',
      name: 'ThreadScan Infra/Web',
      prices: [],
    },
  ],
  'hydra:totalItems': 3,
}
