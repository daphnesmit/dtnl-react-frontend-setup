export default {
  '@context': '/api/contexts/License',
  '@id': '/api/licenses',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/licenses/1',
      '@type': 'License',
      vendor: {
        '@id': '/api/license_vendors/1',
        '@type': 'LicenseVendor',
        name: 'cPanel',
        url: 'https://www.cpanel.com',
        tagline: 'Configure your internet web server for your clients with ease.',
      },
      monthlyPrices: [],
      lifetimePrices: [],
    },
    {
      '@id': '/api/licenses/2',
      '@type': 'License',
      vendor: {
        '@id': '/api/license_vendors/2',
        '@type': 'LicenseVendor',
        name: 'DirectAdmin',
        url: 'https://www.directadmin.com',
        tagline: 'Webhosint control panel - Powerful and easy to use.',
      },
      monthlyPrices: [],
      lifetimePrices: [],
    },
  ],
  'hydra:totalItems': 2,
}
