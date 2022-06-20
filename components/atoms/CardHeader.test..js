import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import CardHeader from './CardHeader'

describe('CardHeader', () => {
  it('renders CardHeader', () => {
    render(<CardHeader text="Card Header Text" />)
    const headerText = screen.getByText('Card Header Text')
    expect(headerText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<CardHeader text="Card Header Text" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
