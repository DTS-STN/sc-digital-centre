import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import VerticalStepper from './VerticalStepper'

const lastUpdates = [
  {
    label: 'Documents reviewed',
    description: 'September 8, 2021',
  },
  {
    label: 'Documents uploaded',
    description: 'September 6, 2021',
  },
  {
    label: 'Documents requested',
    description: 'September 5, 2021',
  },
]

expect.extend(toHaveNoViolations)

describe('VerticalStepper', () => {
  it('Renders VerticalStepper', () => {
    render(
      <VerticalStepper
        benefitStatus={'Active'}
        lastUpdates={lastUpdates}
        locale={'en'}
      />
    )

    const titleText = screen.getByText('Latest activity')
    const activityTitle1 = screen.getByText('Documents reviewed')
    const activityTitle2 = screen.getByText('Documents uploaded')
    const activityTitle3 = screen.getByText('Documents requested')

    expect(titleText).toBeInTheDocument()
    expect(activityTitle1).toBeInTheDocument()
    expect(activityTitle2).toBeInTheDocument()
    expect(activityTitle3).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <VerticalStepper
        benefitStatus={'Active'}
        lastUpdates={lastUpdates}
        locale={'en'}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
