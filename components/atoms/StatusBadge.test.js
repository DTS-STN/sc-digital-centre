import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import StatusBadge from './StatusBadge'

expect.extend(toHaveNoViolations)

describe('Status Badge', () => {
  it('renders Status Badge', () => {
    render(<StatusBadge status="status" color="bg-green-medium" />)
    const text = screen.getByText('status')
    expect(text).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <StatusBadge status="status" color="bg-green-medium" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
