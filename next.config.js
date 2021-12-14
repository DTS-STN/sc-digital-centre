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
  // Only ever use HTTPS
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // Prevents the browser from attempting to guess the type of content
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Only allow secure origin to be delivered over HTTPS
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: `frame-ancestors 'self'`,
  },
]

const config = {
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
}

//
// rewrites setup
//
config.rewrites = async () => {
  const AEMService = require('./pages/api/AEMServiceClass')
  const aemService = new AEMService(
    process.env.NEXT_CONTENT_API,
    process.env.NEXT_PUBLIC_BUILD_DATE
  )
  const { HOME_PAGE, SEARCH_PAGE } = require('./constants/aem')

  // get and cache pages from aem
  const pages = [await aemService.getPage(SEARCH_PAGE)]

  // loop over all cached pages and build rewrite rules for next
  const aemPagesRewrites = Object.values(pages).map((normalizedPage) => ({
    source: normalizedPage.link.fr,
    destination: normalizedPage.link.en,
    locale: false,
  }))

  return {
    afterFiles: [
      {
        source: '/fr/accueil',
        destination: '/home',
        locale: false,
      },
      ...aemPagesRewrites,
    ],
  }
}

config.headers = async () => {
  return [
    {
      // Apply these headers to all routes in your application.
      source: '/(.*)',
      headers: securityHeaders,
    },
  ]
}
module.exports = config
