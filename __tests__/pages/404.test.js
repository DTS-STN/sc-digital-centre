/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error404 from '../../pages/404'
import { axe } from 'jest-axe'

describe('404', () => {
  it('renders without crashing', () => {
    render(<Error404 />)
    expect(
      screen.getByText('We couldn’t find that web page')
    ).toBeInTheDocument()
  })
  it('has no a11y violations', async () => {
    const { container } = render(<Error404 />)
    const results = await axe(container)
    expect(results).toHaveNoViolations
  })
})
