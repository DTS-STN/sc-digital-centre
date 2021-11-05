import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SearchFilterForm from './SearchFilterForm'

expect.extend(toHaveNoViolations)

describe('SearchFilterForm', () => {
  it('renders SearchFilterForm in english', () => {
    render(
      <SearchFilterForm
        filterHeader="search text"
        cancelText="{t.cancel}"
        submitText="{t.submit}"
      />
    )
    const searchText = screen.getByText('search text')
    expect(searchText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <SearchFilterForm
        filterHeader="search text"
        cancelText="{t.cancel}"
        submitText="{t.submit}"
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
