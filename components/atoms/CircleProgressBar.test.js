import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import CircleProgressBar from './CircleProgressBar'

expect.extend(toHaveNoViolations)

describe('CircleProgressBar', () => {
  it('renders CircleProgressBar', () => {
    render(<CircleProgressBar progress={11} steps={22} />)
    const progressText = screen.getByText('11')
    expect(progressText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<CircleProgressBar progress={11} steps={22} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
