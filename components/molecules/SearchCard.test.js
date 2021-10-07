import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SearchCard from './SearchCard'

expect.extend(toHaveNoViolations)

describe('SearchCard', () => {
  it('renders SearchCard in english', () => {
    const primary = render(<SearchCard lang="en" />)
    const searchText = screen.getByText('Search')
    expect(searchText).toBeInTheDocument()
  })

  it('renders SearchCard in french', () => {
    const primary = render(<SearchCard lang="fr" />)
    const searchText = screen.getByText('Recherche')
    expect(searchText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<SearchCard lang="en" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
