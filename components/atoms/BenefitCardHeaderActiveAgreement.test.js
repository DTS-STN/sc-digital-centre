import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import BenefitCardHeaderActiveAgreement from './BenefitCardHeaderActiveAgreement'

const ACTIVE_SEB = {
  benefitType: 'SEB',
  benefitName: 'Self Employment Benefits',
  status: 'ActiveAgreement',
  estimatedDateOfDecision: 'September 31, 2021',
  applicationStatus: 'Agreement',
  transactionDate: 'September 31, 2021',
  benefitStatusProgress: 'Started',
}

expect.extend(toHaveNoViolations)

describe('BenefitCardHeaderActiveAgreement', () => {
  const { container } = render(
    <BenefitCardHeaderActiveAgreement benefit={ACTIVE_SEB} locale={'en'} />
  )
  it('Renders BenefitCardHeaderActiveAgreement', () => {
    const titleText = screen.getByText('Self Employment Benefits')
    const benefitStatusProgress = screen.getByText('Started')
    const transactionDate = screen.getByText('September 31, 2021')
    expect(titleText).toBeInTheDocument()
    expect(benefitStatusProgress).toBeInTheDocument()
    expect(transactionDate).toBeInTheDocument()
  })
  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
