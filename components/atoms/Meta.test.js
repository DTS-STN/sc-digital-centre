import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Meta from './Meta'

expect.extend(toHaveNoViolations)

describe('Meta', () => {
  it('has no a11y violations', async () => {
    const { container } = render(<Meta title="Hello world!!" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
