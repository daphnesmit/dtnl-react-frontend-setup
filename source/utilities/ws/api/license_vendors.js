export default {
  '@context': '/api/contexts/LicenseVendor',
  '@id': '/api/license_vendors',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/license_vendors/1',
      '@type': 'LicenseVendor',
      id: 1,
      name: 'cPanel',
      url: 'https://www.cpanel.com',
      tagline: 'Configure your internet web server for your clients with ease.',
    },
    {
      '@id': '/api/license_vendors/2',
      '@type': 'LicenseVendor',
      id: 2,
      name: 'DirectAdmin',
      url: 'https://www.directadmin.com',
      tagline: 'Webhosint control panel - Powerful and easy to use.',
    },
  ],
  'hydra:totalItems': 2,
}
