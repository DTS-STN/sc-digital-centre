import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'
import Error400 from '../../pages/400'

describe('400', () => {
  const { container } = render(<Error400 />)
  it('renders without crashing', () => {
    expect(screen.getByText('Error 400')).toBeInTheDocument()
  })
  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations
  })
})
