/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error404, { getStaticProps } from '../../pages/404'
import { axe } from 'jest-axe'

describe('404', () => {
  const { container } = render(
    <Error404
      metadata={{
        title: 'Digital Centre (en) + Digital Centre (fr)',
        keywords: 'en + fr keywords',
        description: 'en + fr description',
      }}
      locale="en"
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

  it('generates static Props', async () => {
    const returned = await getStaticProps({ locale: 'en' })
    expect(returned.props).toBeTruthy()
    const props = returned.props
    expect(props.locale).toBe('en')
    expect(props.langToggleLink).toBe('/fr/404')
    expect(props.metadata.title).toBeTruthy()
  })
  it('generates static Props for French', async () => {
    const returned = await getStaticProps({ locale: 'fr' })
    expect(returned.props.locale).toBe('fr')
    expect(returned.props.langToggleLink).toBe('/404')
  })
})
