import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SearchFiltersModal from './SearchFiltersModal'

expect.extend(toHaveNoViolations)

describe('SearchFiltersModal', () => {
  it('renders SearchFiltersModal', () => {
    render(<SearchFiltersModal filterHeader="test header" />)
    const searchText = screen.getByText('test header')
    expect(searchText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <SearchFiltersModal filterHeader="test header" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
