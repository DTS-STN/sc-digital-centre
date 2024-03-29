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
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
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
    localeDetection: true,
  },
  //disable X-Powered-By
  poweredByHeader: false,
  //
  // Image configured host
  //
  images: {
    domains: ['www.canada.ca'],
  },
  webpack: (config) => {
    //GraphQL loader for .graphql files
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    return config
  },
}

config.headers = async () => {
  return [
    {
      // Apply these headers to all routes in your application.
      source: '/:path*',
      headers: securityHeaders,
    },
  ]
}

module.exports = config

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
