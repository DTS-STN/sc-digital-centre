/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error404 from '../../pages/404'
import { axe } from 'jest-axe'

describe('404', () => {
  const { container } = render(
    <Error404
      metadata={{
        title: 'Digital Centre (en) + Digital Centre (fr)',
        keywords: 'en + fr keywords',
        description: 'en + fr description',
      }}
    />
  )
  it('renders without crashing', () => {
    expect(
      screen.getByText('We couldn’t find that web page')
    ).toBeInTheDocument()
  })
  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations
  })
})
