import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

import Dashboard from '../../pages/dashboard'

expect.extend(toHaveNoViolations)

describe('Dashboard', () => {
  it('renders Dashboard', () => {
    const { container } = render(<Dashboard />)
    expect(container).toMatchSnapshot()
  })
  it('has no a11y violations', async () => {
    const { container } = render(<Dashboard />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
