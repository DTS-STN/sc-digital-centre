import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import { getAdvertsingCards } from '../../contents/BenefitAdvertisingCards'
import Dashboard from '../../pages/dashboard'
import { getNoBenefitCards } from '../../contents/NoBenefitCards'
import NoBenefitCard from '../../components/molecules/NoBenefitCard'
import { getCookie } from 'cookies-next'

expect.extend(toHaveNoViolations)

jest.mock('cookies-next', () => ({
  getCookie: () => 'default',
}))

describe('Dashboard', () => {
  const { container } = render(
    <Dashboard
      advertisingCards={getAdvertsingCards()}
      noBenefitCards={getNoBenefitCards('en')}
      metadata={{
        title: 'Digital Centre (en) + Digital Centre (fr)',
        keywords: 'en + fr keywords',
        description: 'en + fr description',
      }}
    />
  )

  const NoBenefitCards =
    getCookie() == 'default'
      ? render(
          getNoBenefitCards('en').map((value, index) => {
            return (
              <div key={index}>
                <NoBenefitCard locale="en" benefit={value} />
              </div>
            )
          })
        )
      : null

  it('renders Dashboard', () => {
    expect(container).toBeTruthy()
  })

  it('renders NoBenefitCards', () => {
    expect(NoBenefitCards).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
