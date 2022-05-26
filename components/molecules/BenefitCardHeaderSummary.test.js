import { render, screen } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import '@testing-library/jest-dom/extend-expect'
import en from '../../locales/en'
import BenefitCardHeaderSummary from './BenefitCardHeaderSummary'
import { SummaryTypes } from '../../constants/SummaryTypes'
import { FormatSummary } from '../../lib/BenefitsMapping'

expect.extend(toHaveNoViolations)

describe('BenefitCardHeaderSummary', () => {
  const netPay = 30
  const summary = FormatSummary(SummaryTypes.LastNetPayment, netPay)

  const { container } = render(
    <BenefitCardHeaderSummary locale="en" summary={summary} />
  )

  it('renders', () => {
    const title = screen.getByText(en[summary.type].title)
    const value = screen.getByText('$' + netPay)
    expect(title).toBeInTheDocument()
    expect(value).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
