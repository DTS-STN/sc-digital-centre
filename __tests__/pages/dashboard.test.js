import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'

import Dashboard from '../../pages/dashboard'

expect.extend(toHaveNoViolations)

describe('Dashboard', () => {
  it('renders Dashboard', () => {
    const { container } = render(<Dashboard />)
    expect(container).toMatchSnapshot()
  })
})
