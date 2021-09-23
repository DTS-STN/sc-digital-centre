//formatting TC Date
const builddate = process.env.NEXT_PUBLIC_BUILD_DATE
  ? process.env.NEXT_PUBLIC_BUILD_DATE.substr(0, 4) +
    '-' +
    process.env.NEXT_PUBLIC_BUILD_DATE.substr(4, 2) +
    '-' +
    process.env.NEXT_PUBLIC_BUILD_DATE.substr(6, 2)
  : 'DATE-NA'

module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_DATE: builddate,
  },
  reactStrictMode: true,
}
