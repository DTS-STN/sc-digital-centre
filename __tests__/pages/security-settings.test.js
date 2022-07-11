import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SecuritySettings, {
  getServerSideProps,
} from '../../pages/security-settings'

expect.extend(toHaveNoViolations)

describe('Security Settings', () => {
  process.env = { AUTH_DISABLED: 'true' }
  const { container } = render(<SecuritySettings metadata={{}} locale="en" />)

  it('renders as expected', () => {
    expect(container).toBeTruthy()
    expect(screen.getByText('Security Settings')).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders in french', () => {
    render(<SecuritySettings metadata={{}} locale="fr" />)
    expect(screen.getByText('Paramètres de sécurité')).toBeInTheDocument()
  })

  it('returns static props', async () => {
    const result = await getServerSideProps({ locale: 'en' })
    expect(result.props).toBeTruthy()
    expect(result.props.metadata).toBeTruthy()
    expect(result.props.breadCrumbItems).toHaveLength(1)
  })

  it('returns static french props', async () => {
    const result = await getServerSideProps({ locale: 'fr' })
    expect(result.props).toBeTruthy()
    expect(result.props.locale).toBe('fr')
  })
})
