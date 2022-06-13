import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { axe } from 'jest-axe'
import Error400 from '../../pages/400'

describe('400', () => {
  const { container } = render(
    <Error400
      metadata={{
        title: 'Digital Centre (en) + Digital Centre (fr)',
        keywords: 'en + fr keywords',
        description: 'en + fr description',
      }}
      locale="en"
    />
  )
  it('renders without crashing', () => {
    expect(screen.getByText('Error 400')).toBeInTheDocument()
  })
  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations
  })
})
