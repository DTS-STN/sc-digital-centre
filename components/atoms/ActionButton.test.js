import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import ActionButton from './ActionButton'

expect.extend(toHaveNoViolations)

describe('ActionButton', () => {
  it('renders ActionButtons without href', () => {
    render(<ActionButton id="testID" data-testid="testId" />)
    const btn = screen.getByTestId('testId')
    expect(btn).toBeInTheDocument()
  })

  it('renders ActionButtons with href', () => {
    render(<ActionButton id="testID" data-testid="testId" href="#" />)
    const btn = screen.getByTestId('testId')
    expect(btn).toBeInTheDocument()
  })

  it('renders ActionButtons with custom CSS', () => {
    render(
      <ActionButton
        id="testID"
        data-testid="testId"
        className="bg-red-400 text-white border"
      />
    )
    const btn = screen.getByTestId('testId')
    expect(btn).toHaveClass('bg-red-400 text-white border')
  })

  it('renders secondary style', () => {
    render(<ActionButton id="testID" data-testid="testID" secondary />)
    expect(screen.getByTestId('testID')).toHaveClass(
      'bg-gray-light text-blue-default'
    )
  })

  it('renders shadow style', () => {
    render(<ActionButton id="testID" data-testid="testID" useShadow />)
    expect(screen.getByTestId('testID')).toHaveClass('shadow-sm')
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <ActionButton id="testID" text="test Button" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
