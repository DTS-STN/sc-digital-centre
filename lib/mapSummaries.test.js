import { SummaryTypes } from '../constants/SummaryTypes'
import { MapSummary } from './mapSummaries'
import enT from '../locales/en'

describe('MapSummary', () => {
  it('should not fail when nothing is passed', () => {
    const result = MapSummary(null, {}, 'en')
    expect(result).toBeUndefined()
  })

  it('should map date types', () => {
    const sums = [
      { type: SummaryTypes.LatestStatus, status: 32, value: '2022-06-21' },
      { type: SummaryTypes.NextPayment, status: 'testme', value: '2022-06-21' },
      { type: SummaryTypes.TransactionDate, value: '2022-06-21' },
    ]
    const result = MapSummary(sums, enT, 'en')
    expect(result).toHaveLength(3)
    expect(result[0].title).toBe('Latest status update:')
    expect(result[0].status).toBe('Under Review')
    expect(result[0].statusClassName).toBe('text-lg')
    expect(result[0].value).toBe('June 21, 2022')
    expect(result[0].valueClassName).toBe('text-lg')
    expect(result[0].link).toBe('/')
    expect(result[0].linkText).toBe('View my status and messages')

    expect(result[1].title).toBe('Next payment date:')
    expect(result[1].status).toBe('testme')
    expect(result[1].statusClassName).toBe('font-bold')
    expect(result[1].value).toBe('June 21, 2022')
    expect(result[1].valueClassName).toBe('text-lg')
    expect(result[1].link).toBeUndefined()
    expect(result[1].linkText).toBeUndefined()

    expect(result[2].title).toBe('Transaction date:')
    expect(result[2].status).toBeUndefined()
    expect(result[2].value).toBe('June 21, 2022')
    expect(result[2].valueClassName).toBe('text-lg')
    expect(result[2].link).toBeUndefined()
  })

  it('should map money types', () => {
    const sums = [
      { type: SummaryTypes.LastPayment, value: '135.50' },
      { type: SummaryTypes.LastNetPayment, value: '135.50' },
    ]
    const result = MapSummary(sums, enT, 'en')
    expect(result).toHaveLength(2)
    expect(result[0].title).toBe('Last net payment:')
    expect(result[1].title).toBe('Last net payment')
    expect(result[0].status).toBeFalsy()
    expect(result[0].statusClassName).toBe('font-bold')
    expect(result[0].value).toBe('$135.50')
    expect(result[0].valueClassName).toBe('text-3xl')
    expect(result[1].value).toBe('$135.50')
    expect(result[1].valueClassName).toBe('text-3xl')
    expect(result[0].link).toBeUndefined()
    expect(result[0].linkText).toBeUndefined()
    expect(result[1].link).toBe('/')
    expect(result[1].linkText).toBe('View my payments')
  })

  it('should map translation types', () => {
    const sums = [
      { type: SummaryTypes.RequestedBenefit, value: 'cpp' },
      { type: SummaryTypes.BenefitAffected, value: 'ei' },
      { type: SummaryTypes.ActiveBenefit, value: 'oas' },
    ]
    const result = MapSummary(sums, enT, 'en')
    expect(result).toHaveLength(3)

    expect(result[0].title).toBe('Requested benefit:')
    expect(result[0].status).toBeUndefined()
    expect(result[0].value).toBe('Canada Pension Plan')
    expect(result[0].valueClassName).toBe('text-lg')
    expect(result[0].link).toBeUndefined()

    expect(result[1].title).toBe('Benefit affected:')
    expect(result[1].status).toBeUndefined()
    expect(result[1].value).toBe('Employment Insurance')
    expect(result[1].valueClassName).toBe('text-lg')
    expect(result[1].link).toBeUndefined()
    expect(result[1].linkText).toBeUndefined()

    expect(result[2].title).toBe('Active benefit:')
    expect(result[2].status).toBeUndefined()
    expect(result[2].value).toBe('Old Age Security')
    expect(result[2].valueClassName).toBe('text-lg')
    expect(result[2].link).toBeUndefined()
  })

  it('should map direct value types', () => {
    const sums = [
      { type: SummaryTypes.PresentStatus, value: 'thisis my test' },
      { type: SummaryTypes.NextPaymentDate, value: 'payment date test' },
      { type: SummaryTypes.AgreementStatus, value: 'status test' },
    ]
    const result = MapSummary(sums, enT, 'en')
    expect(result).toHaveLength(3)

    expect(result[0].title).toBe('Present status:')
    expect(result[0].status).toBeUndefined()
    expect(result[0].value).toBe('thisis my test')
    expect(result[0].valueClassName).toBe('text-lg')
    expect(result[0].link).toBe('/')
    expect(result[0].linkText).toBe('Call: 1-800-555-1234')

    expect(result[1].title).toBe('Next payment date:')
    expect(result[1].status).toBeUndefined()
    expect(result[1].value).toBe('payment date test')
    expect(result[1].valueClassName).toBe('text-lg')
    expect(result[1].link).toBeUndefined()

    expect(result[2].title).toBe('Agreement status:')
    expect(result[2].status).toBeUndefined()
    expect(result[2].value).toBe('status test')
    expect(result[2].valueClassName).toBe('text-lg')
    expect(result[2].link).toBe('/')
    expect(result[2].linkText).toBe('View my status and messages')
  })
})
