/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '../../pages/index'

describe('Index page', () => {
  it('should render', () => {
    render(
      <Index
        metadata={{
          title: 'Digital Centre (en) + Digital Centre (fr)',
          keywords: 'en + fr keywords',
          description: 'en + fr description',
        }}
      />
    )
    const enLink = screen.getByText('English')
    expect(enLink).toBeInTheDocument()
  })
})
