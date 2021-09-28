import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ActionButton } from './ActionButton'

expect.extend(toHaveNoViolations)

describe('ActionButton', () => {
  it('renders ActionButtons without href', () => {
    render(<ActionButton id="testID" dataTestId="testId" />)
    const btn = screen.getByTestId('testId')
    expect(btn).toBeInTheDocument()
  })

  it('renders ActionButtons with href', () => {
    render(<ActionButton id="testID" dataTestId="testId" href="#" />)
    const btn = screen.getByTestId('testId')
    expect(btn).toBeInTheDocument()
  })
  it('renders ActionButtons secondary state', () => {
    render(<ActionButton id="testID" dataTestId="testId" secondary />)
    const btn = screen.getByTestId('testId')
    expect(btn).toHaveClass(
      'bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200'
    )
  })
  it('renders ActionButtons tertiary state', () => {
    render(<ActionButton id="testID" dataTestId="testId" tertiary />)
    const btn = screen.getByTestId('testId')
    expect(btn).toHaveClass(
      'underline hover:text-canada-footer-hover-font-blue text-canada-footer-font'
    )
  })
  it('renders ActionButtons disabled state', () => {
    render(<ActionButton id="testID" dataTestId="testId" disabled />)
    const btn = screen.getByTestId('testId')
    expect(btn).toHaveAttribute('disabled')
  })
  it('has no a11y violations', async () => {
    const { container } = render(
      <ActionButton id="testID" className="text-white" text="test Button" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
