import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

import DSHeader from './DSHeader'

expect.extend(toHaveNoViolations)

describe('Design System footer tests', () => {
  it('renders DSHeader', () => {
    const { container } = render(<DSHeader />)
    expect(container).toMatchSnapshot()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<DSHeader />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
