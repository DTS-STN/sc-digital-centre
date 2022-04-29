import { render, screen } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import en from '../../locales/en'
import { BenefitSummaries, SummaryTypes } from '../../objects/BenefitSummaries'
import BenefitCardHeaderSummary from './BenefitCardHeaderSummary'

expect.extend(toHaveNoViolations)

describe('BenefitCardHeaderSummary', () => {
  let netPay = 30
  let summary = new BenefitSummaries(SummaryTypes.PaymentAmount, netPay)

  let { container } = render(
    <BenefitCardHeaderSummary locale={en} summary={summary} />
  )

  it('renders', () => {
    let title = screen.getByText(en[summary.type].title)
    let value = screen.getByText(netPay)
    expect(title).toBeInTheDocument()
    expect(value).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    let results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
