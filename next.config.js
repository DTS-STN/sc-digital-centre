//formatting TC Date
const builddate = process.env.NEXT_PUBLIC_BUILD_DATE
  ? process.env.NEXT_PUBLIC_BUILD_DATE.substr(0, 4) +
    '-' +
    process.env.NEXT_PUBLIC_BUILD_DATE.substr(4, 2) +
    '-' +
    process.env.NEXT_PUBLIC_BUILD_DATE.substr(6, 2)
  : 'DATE-NA'

// AEM base end point
var contentURL = process.env.NEXT_CONTENT_API
  ? process.env.NEXT_CONTENT_API
  : ''

module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_DATE: builddate,
  },
  reactStrictMode: true,
}
