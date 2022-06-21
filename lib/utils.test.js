import { formatDate, formatMoney } from './Utils'

describe('utils', () => {
  it('formats english date', () => {
    const result = formatDate('2022-06-21', 'en')
    expect(result).toBe('June 21, 2022')
  })

  it('formats french date', () => {
    const result = formatDate('2022-06-21', 'fr')
    expect(result).toBe('21 juin 2022')
  })

  it('formats money in english', () => {
    const result = formatMoney(12345.67, 'en')
    expect(result).toBe('$12,345.67')
  })

  it('formats money in french', () => {
    const result = formatMoney(12345.67, 'fr')
    // \xa0 is a non-breaking space
    expect(result).toEqual('12\xa0345,67\xa0$')
  })
})
