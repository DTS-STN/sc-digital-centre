export function formatDate(string, locale) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(string).toLocaleDateString(locale + '-CA', options)
}

export function formatMoney(money, locale) {
  let CAD = Intl.NumberFormat(locale + '-CA', {
    style: 'currency',
    currency: 'CAD',
  })
  return CAD.format(money)
}
