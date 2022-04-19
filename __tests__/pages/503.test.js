import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'
import Error503 from '../../pages/503'

describe('503', () => {
  it('renders without crashing', () => {
    render(<Error503 />)
    expect(screen.getByText('Error 503')).toBeInTheDocument()
  })
  it('has no a11y violations', async () => {
    const { container } = render(<Error503 />)
    const results = await axe(container)
    expect(results).toHaveNoViolations
  })
})
