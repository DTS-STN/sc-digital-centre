import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SearchHeader from './SearchHeader'

expect.extend(toHaveNoViolations)

describe('SearchHeader', () => {
  it('renders SearchHeader in english', () => {
    render(
      <SearchHeader
        lang="en"
        headerText="header text"
        searchBarPlaceholder="placeholder text"
        searchBarText="search text"
      />
    )
    const searchText = screen.getByText('search text')
    expect(searchText).toBeInTheDocument()
  })

  it('renders SearchHeader in french', () => {
    render(
      <SearchHeader
        lang="fr"
        headerText="header text"
        searchBarPlaceholder="placeholder text"
        searchBarText="Recherche"
      />
    )
    const searchText = screen.getByText('Recherche')
    expect(searchText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <SearchHeader
        lang="en"
        headerText={'Benefits and Services'}
        searchBarPlaceholder={'t.searchPlaceholder'}
        searchBarText={'t.search'}
        btnClearText={'t.clearResults'}
        btnClearLabel={'t.clearResults'}
        btnFilterText={'t.filterResults'}
        btnFilterLabel={'t.filterResults'}
        onSubmitHref="/searchResult"
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
