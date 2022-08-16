import { FormatSummary, MapBenefit } from './mapBenefitsHelper'

describe('FormatSummary', () => {
  it('Type and Value', () => {
    const benefitSummary = FormatSummary('Summary type', '$637.25', undefined)
    expect(benefitSummary.type).toBe('Summary type')
    expect(benefitSummary.value).toBe('$637.25')
    expect(benefitSummary.extra).toBe(undefined)
  })
  it('Type, Value and extra', () => {
    const benefitSummary = FormatSummary('Summary type', '$637.25', 'test.com')
    expect(benefitSummary.type).toBe('Summary type')
    expect(benefitSummary.value).toBe('$637.25')
    expect(benefitSummary.extra).toBe('test.com')
  })
})

describe('MapBenefit', () => {
  it('Benefit', () => {
    const benefit = MapBenefit('cpp', 'active', 1, undefined)
    expect(benefit.programCode).toBe('cpp')
    expect(benefit.statusCode).toBe('active')
    expect(benefit.typeCode).toBe(1)
    expect(benefit.summaries).toBe(undefined)
  })
  it('Benefit with summaries', () => {
    const benefit = MapBenefit('cpp', 'active', 1, 'summaries')
    expect(benefit.programCode).toBe('cpp')
    expect(benefit.statusCode).toBe('active')
    expect(benefit.typeCode).toBe(1)
    expect(benefit.summaries).toBe('summaries')
  })
  it('Missing programCode, statusCode or typeCode', () => {
    const callMapBenefits = () =>
      MapBenefit(undefined, undefined, undefined, undefined)
    expect(callMapBenefits).toThrow(
      'Cannot match data. program:undefined, type:undefined, status:undefined'
    )
  })
})
