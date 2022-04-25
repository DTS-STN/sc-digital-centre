import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import ProfileInfo from './ProfileInfo'

expect.extend(toHaveNoViolations)

describe('ProfileInfo', () => {
  it('renders ProfileInfo', () => {
    render(<ProfileInfo />)
    const text = screen.getByText('Ontario')
    expect(text).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<ProfileInfo />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
