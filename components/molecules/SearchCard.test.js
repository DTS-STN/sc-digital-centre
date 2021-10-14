import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SearchCard from './SearchCard'

expect.extend(toHaveNoViolations)

describe('SearchCard', () => {
  it('renders SearchCard in english', () => {
    render(
      <SearchCard
        lang="en"
        headerText="header text"
        paraText="paragraph text"
        viewBenefitsServices="View all Test"
        searchBarPlaceholder="placeholder text"
        searchBarText="search text"
      />
    )
    const searchText = screen.getByText('search text')
    expect(searchText).toBeInTheDocument()
  })

  it('renders SearchCard in french', () => {
    render(
      <SearchCard
        lang="fr"
        headerText="header text"
        paraText="paragraph text"
        viewBenefitsServices="View all Test"
        searchBarPlaceholder="placeholder text"
        searchBarText="Recherche"
      />
    )
    const searchText = screen.getByText('Recherche')
    expect(searchText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <SearchCard
        lang="en"
        headerText="header text"
        paraText="paragraph text"
        viewBenefitsServices="View all Test"
        searchBarPlaceholder="placeholder text"
        searchBarText="search text"
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
