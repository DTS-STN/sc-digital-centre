import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import BenefitCard from './BenefitCard'
import { ACTIVE_CPP } from '../../contents/DashboardBenefitCardConstants'
import { ACTIVE_CPP_TASKS } from '../../contents/DashboardBenefitTasksConstants'

expect.extend(toHaveNoViolations)
describe('BenefitCard', () => {
  it('renders BenefitCard', () => {
    render(
      <BenefitCard locale="en" benefit={ACTIVE_CPP} tasks={ACTIVE_CPP_TASKS} />
    )
    const benefitName = screen.getByText('Canada Pension Plan')
    const status = screen.getByText('Active')
    const nextPaymentAmount = screen.getByText('734.34')

    expect(benefitName).toBeInTheDocument()
    expect(status).toBeInTheDocument()
    expect(nextPaymentAmount).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <BenefitCard locale="en" benefit={ACTIVE_CPP} tasks={ACTIVE_CPP_TASKS} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
