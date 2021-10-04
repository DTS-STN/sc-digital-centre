import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SearchBar from './SearchBar'

expect.extend(toHaveNoViolations)

describe('SearchBar', () => {
  it('renders SearchBar', () => {
    const primary = render(<SearchBar />)
    expect(primary).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<SearchBar placeholderText="test" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
