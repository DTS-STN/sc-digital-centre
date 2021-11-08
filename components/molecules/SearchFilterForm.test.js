import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SearchFilterForm from './SearchFilterForm'

expect.extend(toHaveNoViolations)

describe('SearchFilterForm', () => {
  const ageRangeOptions = [
    { key: 0, name: 'Under 18 years old' },
    { key: 1, name: '18-100 bajillion' },
  ]
  const incomeOptions = [
    { key: 0, name: 'Between $0 - $23999' },
    { key: 1, name: 'Between $23999 - $42999' },
    { key: 2, name: 'Between $42999 - $72999' },
  ]
  const eligibilityOptions = [
    { key: 0, id: 'living-with-disability', name: 'living with a disability' },
    {
      key: 1,
      id: 'caregiver-to-disability',
      name: 'caregiver to someone with a disability',
    },
    { key: 2, id: 'widowed', name: 'widowed' },
  ]

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
        ageRangeOptions={ageRangeOptions}
        incomeOptions={incomeOptions}
        eligibilityOptions={eligibilityOptions}
        filterHeader="{t.filters}"
        cancelText="{t.cancel}"
        submitText="{t.submit}"
        ageRangeLabel="{t.ageRange}"
        incomeLabel="{t.annualIncome}"
        eligibilityLabel="{t.eligibility}"
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
