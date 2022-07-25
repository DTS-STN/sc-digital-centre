import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

import LoadingState from './LoadingState'

expect.extend(toHaveNoViolations)

describe('LoadingState', () => {
  const { container } = render(<LoadingState />)
  it('renders LoadingState', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
