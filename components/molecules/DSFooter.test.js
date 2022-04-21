import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

import DSFooter from './DSFooter'

expect.extend(toHaveNoViolations)

describe('Design System footer tests', () => {
  const { container } = render(<DSFooter />)
  it('renders DSFooter', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
