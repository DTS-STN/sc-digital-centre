import { SummaryTypes } from '../constants/SummaryTypes'
import { MapSummary } from './mapSummaries'
import enT from '../locales/en'

describe('MapSummary', () => {
  it('should not fail when nothing is passed', () => {
    const result = MapSummary(null, {}, 'en')
    expect(result).toBeUndefined()
  })

  describe('Map money types', () => {
    const sums = [
      { type: SummaryTypes.LastPayment, value: '135.50' },
      { type: SummaryTypes.LastNetPayment, value: '135.50' },
    ]
    const result = MapSummary(sums, enT, 'en')

    it('should map LastPayment', () => {
      const sut = result[0]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Last net payment:')
      expect(sut.status).toBeFalsy()
      expect(sut.value).toBe('$135.50')
      expect(sut.valueStyle).toBe('text-4xl')
      expect(sut.link).toBeUndefined()
    })

    it('should map LastNetPayment', () => {
      const sut = result[1]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Last net payment')
      expect(sut.value).toBe('$135.50')
      expect(sut.valueStyle).toBe('text-4xl')
      expect(sut.link).toBe('/')
      expect(sut.linkText).toBe('View my payments')
    })
  })

  describe('Map date types', () => {
    const sums = [
      { type: SummaryTypes.NextPayment, extra: 'testme', value: '2022-06-21' },
      { type: SummaryTypes.NextReport, value: '2022-06-21' },
      { type: SummaryTypes.LatestStatus, extra: 32, value: '2022-06-21' },
      { type: SummaryTypes.EstimatedDecisionDate, value: '2022-06-21' },
      { type: SummaryTypes.LastPaymentDate, value: '2022-06-21' },
      { type: SummaryTypes.LatestStatusMessage, value: '2022-06-21' },
      { type: SummaryTypes.TransactionDate, value: '2022-06-21' },
      { type: SummaryTypes.LatestStatusDate, value: '2022-06-21' },
    ]
    const result = MapSummary(sums, enT, 'en')

    it('should map NextPayment', () => {
      const sut = result[0]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Next payment date:')
      expect(sut.status).toBe('testme')
      expect(sut.value).toBe('June 21, 2022')
      expect(sut.valueStyle).toBeNull()
    })

    it('should map NextReport', () => {
      const sut = result[1]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Next report due:')
      expect(sut.value).toBe('June 21, 2022')
    })

    it('should map LatestStatus', () => {
      const sut = result[2]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Latest status update:')
      expect(sut.status).toBe('Under Review')
      expect(sut.value).toBe('June 21, 2022')
      expect(sut.link).toBe('/')
      expect(sut.linkText).toBe('View my status and messages')
    })

    it('should map EstimatedDecisionDate', () => {
      const sut = result[3]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Estimated decision date:')
      expect(sut.value).toBe('June 21, 2022')
    })

    it('should map LastPaymentDate', () => {
      const sut = result[4]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Last payment date:')
      expect(sut.value).toBe('June 21, 2022')
      expect(sut.link).toBe('/')
      expect(sut.linkText).toBe('View my payments')
    })

    it('should map LatestStatusMessage', () => {
      const sut = result[5]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Latest status update:')
      expect(sut.link).toBe('/')
      expect(sut.linkText).toBe('View my status and messages')
    })

    it('should map TransactionDate', () => {
      const sut = result[6]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Transaction date:')
      expect(sut.value).toBe('June 21, 2022')
    })

    it('should map LatestStatusDate', () => {
      const sut = result[7]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Latest status update:')
      expect(sut.status).toBeUndefined()
      expect(sut.value).toBe('June 21, 2022')
      expect(sut.link).toBeUndefined()
      expect(sut.linkText).toBeUndefined()
    })
  })

  describe('Map translation types', () => {
    const sums = [
      { type: SummaryTypes.RequestedBenefit, value: 'cpp' },
      { type: SummaryTypes.BenefitAffected, value: 'ei' },
      { type: SummaryTypes.ActiveBenefit, value: 'oas' },
    ]
    const result = MapSummary(sums, enT, 'en')

    it('maps RequestedBenefit', () => {
      const sut = result[0]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Requested benefit:')
      expect(sut.status).toBeUndefined()
      expect(sut.value).toBe('Canada Pension Plan')
      expect(sut.link).toBeUndefined()
    })

    it('maps BenefitAffected', () => {
      const sut = result[1]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Benefit affected:')
      expect(sut.status).toBeUndefined()
      expect(sut.value).toBe('Employment Insurance')
      expect(sut.link).toBeUndefined()
      expect(sut.linkText).toBeUndefined()
    })

    it('maps ActiveBenefit', () => {
      const sut = result[2]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Active benefit:')
      expect(sut.status).toBeUndefined()
      expect(sut.value).toBe('Old Age Security')
      expect(sut.link).toBeUndefined()
    })
  })

  describe('Map direct value types', () => {
    const sums = [
      { type: SummaryTypes.PresentStatus, value: 'thisis my test' },
      { type: SummaryTypes.NextPaymentDate, value: 'payment date test' },
      { type: SummaryTypes.AgreementStatus, value: 'status test' },
    ]
    const result = MapSummary(sums, enT, 'en')

    it('maps PresentStatus', () => {
      const sut = result[0]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Present status:')
      expect(sut.status).toBeUndefined()
      expect(sut.value).toBe('thisis my test')
      expect(sut.link).toBe('/')
      expect(sut.linkText).toBe('Call: 1-800-555-1234')
    })

    it('maps NextPaymentDate', () => {
      const sut = result[1]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Next payment date:')
      expect(sut.status).toBeUndefined()
      expect(sut.value).toBe('payment date test')
      expect(sut.link).toBeUndefined()
    })

    it('maps AgreementStatus', () => {
      const sut = result[2]
      expect(sut).toBeDefined()
      expect(sut.title).toBe('Agreement status:')
      expect(sut.status).toBeUndefined()
      expect(sut.value).toBe('status test')
      expect(sut.link).toBe('/')
      expect(sut.linkText).toBe('View my status and messages')
    })
  })
})
