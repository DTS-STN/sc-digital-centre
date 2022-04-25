import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

import InfoMessage from './InfoMessage'

expect.extend(toHaveNoViolations)

describe('Design System Info Message tests', () => {
  const { container } = render(<InfoMessage />)
  it('renders InfoMessage', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
