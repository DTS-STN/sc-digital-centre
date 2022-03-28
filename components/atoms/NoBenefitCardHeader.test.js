import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import NoBenefitCardHeader from './NoBenefitCardHeader'
import BenefitCode from '../../constants/BenefitCode'

const NO_BENEFIT_EI = {
  benefitType: BenefitCode.ei,
  learnMoreLink: '',
}

expect.extend(toHaveNoViolations)
describe('NoBenefitCardHeader', () => {
  it('Renders NoBenefitCardHeader', () => {
    render(<NoBenefitCardHeader benefit={NO_BENEFIT_EI} locale={'en'} />)

    const noBenefitName = screen.getAllByText('Employment Insurance')
    const learnMore = screen.getByText('Learn more about')

    expect(noBenefitName[0]).toBeInTheDocument()
    expect(learnMore).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <NoBenefitCardHeader benefit={NO_BENEFIT_EI} locale={'en'} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
