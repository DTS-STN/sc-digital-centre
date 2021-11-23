const path = require('path')

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
    value: `frame-ancestors 'self'`, //our CSP Policy
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
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
  const AEMService = require('./pages/api/AEMService-original')
  const aemService = new AEMService(
    process.env.NEXT_CONTENT_API,
    process.env.NEXT_PUBLIC_BUILD_DATE
  )
  const { SEARCH_PAGE, HOME_PAGE } = require('./constants/aemPages')

  // get and cache pages from aem
  await aemService.getPage(HOME_PAGE)
  await aemService.getPage(SEARCH_PAGE)

  // loop over all cached pages and build rewrite rules for next
  const aemPagesRewrites = Object.values(aemService.pages).map(
    (normalizedPage) => ({
      source: normalizedPage.link.fr,
      destination: normalizedPage.link.en,
      locale: false,
    })
  )

  return {
    afterFiles: aemPagesRewrites,
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
