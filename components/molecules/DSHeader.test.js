import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

import DSHeader from './DSHeader'

expect.extend(toHaveNoViolations)

describe('Design System footer tests', () => {
  const { container } = render(<DSHeader isAuth={false} />)
  it('renders DSHeader', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
