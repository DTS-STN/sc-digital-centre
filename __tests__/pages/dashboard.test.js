import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import { getAdvertsingCards } from '../../contents/BenefitAdvertisingCards'
import Dashboard from '../../pages/dashboard'
import { getNoBenefitCards } from '../../contents/NoBenefitCards'

expect.extend(toHaveNoViolations)

describe('Dashboard', () => {
  const { container } = render(
    <Dashboard
      advertisingCards={getAdvertsingCards()}
      noBenefitCards={getNoBenefitCards()}
      metadata={{
        title: 'Digital Centre (en) + Digital Centre (fr)',
        keywords: 'en + fr keywords',
        description: 'en + fr description',
      }}
    />
  )
  it('renders Dashboard', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
