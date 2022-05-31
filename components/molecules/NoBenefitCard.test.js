import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import NoBenefitCard from './NoBenefitCard'
import { NO_BENEFIT_EI_TASKS } from '../../contents/DashboardBenefitTasksConstants'
import en from '../../locales/en'

const NO_BENEFIT_EI = {
  benefitType: 'EI',
  learnMoreLink: '',
  taskList: {
    header: 'commonActions',
    tasks: NO_BENEFIT_EI_TASKS,
  },
}

expect.extend(toHaveNoViolations)
describe('NoBenefitCard', () => {
  it('renders BenefitCard', () => {
    render(<NoBenefitCard locale="en" benefit={NO_BENEFIT_EI} />)
    const noBenefitName = screen.getAllByText('Employment Insurance')
    const commonActions = screen.getByText(en.commonActions)

    expect(noBenefitName[0]).toBeInTheDocument()
    expect(commonActions).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <NoBenefitCard locale="en" benefit={NO_BENEFIT_EI} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
