import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error500 from '../../pages/500'
import { axe } from 'jest-axe'

describe('500', () => {
  it('renders without crashing', () => {
    render(<Error500 />)
    expect(screen.getByText('Error 500')).toBeInTheDocument()
  })
  it('has no a11y violations', async () => {
    const { container } = render(<Error500 />)
    const results = await axe(container)
    expect(results).toHaveNoViolations
  })
})
