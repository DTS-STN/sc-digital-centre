import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import NoBenefitCard from './NoBenefitCard'
import { NO_BENEFIT_EI_TASKS_EN } from '../../contents/BenefitTasksGroups'
import en from '../../locales/en'

const NO_BENEFIT_EI = {
  benefitType: 'ei',
  learnMoreLink: '',
  taskList: {
    header: 'Common actions',
    tasks: NO_BENEFIT_EI_TASKS_EN,
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
