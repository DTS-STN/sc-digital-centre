import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error500 from '../../pages/500'
import { axe } from 'jest-axe'

describe('500', () => {
  const { container } = render(
    <Error500
      metadata={{
        title: 'Digital Centre (en) + Digital Centre (fr)',
        keywords: 'en + fr keywords',
        description: 'en + fr description',
      }}
      locale="en"
    />
  )
  it('renders without crashing', () => {
    expect(screen.getByText('Error 500')).toBeInTheDocument()
  })
  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations
  })
})
