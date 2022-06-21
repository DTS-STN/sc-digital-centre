export function formatDate(string, locale) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  //new date sometimes changes the day depending on the time and zone
  //set it specifically so we control the output
  return new Date(string + 'T12:00:00.000Z').toLocaleDateString(
    locale + '-CA',
    options
  )
}

export function formatMoney(money, locale) {
  let CAD = Intl.NumberFormat(locale + '-CA', {
    style: 'currency',
    currency: 'CAD',
  })
  return CAD.format(money).replace('CA', '').trim()
}
