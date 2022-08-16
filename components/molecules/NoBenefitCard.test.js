import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import NoBenefitCard from './NoBenefitCard'
import { NO_BENEFIT_EI_TASKS_EN } from '../../contents/BenefitTasksGroups'
import en from '../../locales/en'
import { act } from 'react-dom/test-utils'

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
  let container
  act(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    render(<NoBenefitCard locale="en" benefit={NO_BENEFIT_EI} />, container)
  })

  it('renders BenefitCard', async () => {
    const noBenefitName = screen.getAllByText('Employment Insurance')
    const commonActions = screen.getByText(en.commonActions)

    expect(noBenefitName[0]).toBeInTheDocument()
    expect(commonActions).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
