import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

import Dashboard from '../../pages/dashboard'

expect.extend(toHaveNoViolations)

describe('Dashboard', () => {
  const { container } = render(<Dashboard />)
  it('renders Dashboard', () => {
    expect(container).toBeTruthy()
  })
  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
