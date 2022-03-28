import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

import DSFooter from './DSFooter'

expect.extend(toHaveNoViolations)

describe('Design System footer tests', () => {
  it('renders DSFooter', () => {
    const { container } = render(<DSFooter />)
    expect(container).toMatchSnapshot()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<DSFooter />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
