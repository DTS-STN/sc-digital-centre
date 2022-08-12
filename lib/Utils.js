export function formatDate(value, locale) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  let date

  if (value instanceof Date) {
    date = value
  } else if (!isNaN(value) || value.split('T').length > 1) {
    //the string has a time code already or is a number (date in miliseconds)
    date = new Date(value)
  } else {
    date = newNormalizedDate(value)
  }

  return date.toLocaleDateString(locale + '-CA', options)
}

//new date sometimes changes the day depending on the time and zone
//set it specifically so we control the output
export function newNormalizedDate(value) {
  return new Date(value + 'T12:00:00.000Z')
}

export function formatMoney(money, locale) {
  let CAD = Intl.NumberFormat(locale + '-CA', {
    style: 'currency',
    currency: 'CAD',
  })
  return CAD.format(money).replace('CA', '').trim()
}

export function getGreeting(time) {
  if (time < 12) {
    return 'morningGreeting'
  } else if (time < 17) {
    return 'afternoonGreeting'
  } else if (time < 24) {
    return 'eveningGreeting'
  } else {
    return 'greeting'
  }
}

export function generateCSP({ nonce }) {
  const policy = {}

  // adder function for our policy object
  const add = (directive, value, options = {}) => {
    if (options.devOnly && process.env.NODE_ENV !== 'development') return
    const curr = policy[directive]
    policy[directive] = curr ? [...curr, value] : [value]
  }

  // script-src-elem
  add('script-src-elem', `'self'`)
  add('script-src-elem', `'nonce-${nonce}'`)

  return Object.entries(policy)
    .map(([key, value]) => `${key} ${value.join(' ')}`)
    .join('; ')
}

import crypto from 'crypto'

export function generateNonce() {
  return crypto.randomBytes(16).toString('base64')
}
