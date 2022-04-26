import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SettingsNavButton from './SettingsNavButton'

expect.extend(toHaveNoViolations)

describe('SettingsNavButton', () => {
  const { container } = render(
    <SettingsNavButton id="testId" data-testid="testId" text="test Button" />
  )

  it('renders SettingsNavButton', () => {
    const btn = screen.getByTestId('testId')
    expect(btn).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
