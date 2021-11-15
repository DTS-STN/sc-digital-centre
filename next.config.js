//formatting TC Date
const builddate = process.env.NEXT_PUBLIC_BUILD_DATE
  ? process.env.NEXT_PUBLIC_BUILD_DATE.substr(0, 4) +
    '-' +
    process.env.NEXT_PUBLIC_BUILD_DATE.substr(4, 2) +
    '-' +
    process.env.NEXT_PUBLIC_BUILD_DATE.substr(6, 2)
  : 'DATE-NA'

// AEM base end point
const contentURL = process.env.NEXT_CONTENT_API
  ? process.env.NEXT_CONTENT_API
  : ''

//security headers that we want on all pages
//more info here https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: '', //our CSP Policy
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
]

module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_DATE: builddate,
    NEXT_CONTENT_API: contentURL,
  },
  reactStrictMode: true,
  //
  // i18n setup
  //
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localDetection: true,
  },
  //
  // Image configured host
  //
  images: {
    domains: ['www.canada.ca'],
  },
  //
  // rewrites setup
  //
  async rewrites() {
    return [
      {
        source: '/accueil',
        destination: '/home',
      },
      // {
      //   source: " french page name with/without route ",
      //   destination: " 'english' page ",
      // },
    ]
  },

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
