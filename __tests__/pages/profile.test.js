import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Profile, { getStaticProps } from '../../pages/profile'

expect.extend(toHaveNoViolations)

describe('Profile', () => {
  const { container } = render(<Profile metadata={{}} />)

  it('renders Profile', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('returns static props', async () => {
    const result = await getStaticProps({ locale: 'en' })
    expect(result.props).toBeTruthy()
    expect(result.props.locale).toBe('en')
    expect(result.props.langToggleLink).toBe('/fr/profile')
    expect(result.props.metadata).toBeTruthy()
    expect(result.props.breadCrumbItems).toHaveLength(1)
  })

  it('returns static french props', async () => {
    const result = await getStaticProps({ locale: 'fr' })
    expect(result.props).toBeTruthy()
    expect(result.props.locale).toBe('fr')
    expect(result.props.langToggleLink).toBe('/profile')
  })
})
