import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import BackButton from './BackButton'

expect.extend(toHaveNoViolations)

describe('BackButton', () => {
  const { container } = render(
    <BackButton id="testId" data-testid="testId" text="test Button" />
  )

  it('renders BackButton', () => {
    const btn = screen.getByTestId('testId')
    expect(btn).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
