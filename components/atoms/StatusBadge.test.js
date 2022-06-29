import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import StatusBadge from './StatusBadge'

expect.extend(toHaveNoViolations)

describe('Status Badge', () => {
  it('renders Status Badge', () => {
    render(
      <StatusBadge
        status="Status Text"
        color="bg-green-medium"
        srDescription="Status Description"
      />
    )
    const text = screen.getByText('Status Text')
    expect(text).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <StatusBadge
        status="Status Text"
        color="bg-green-medium"
        srDescription="Status Description"
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('can hide', () => {
    const { container } = render(
      <StatusBadge hidden={true} status="" srDescription="" />
    )
    expect(container).toBeEmptyDOMElement()
  })
})
