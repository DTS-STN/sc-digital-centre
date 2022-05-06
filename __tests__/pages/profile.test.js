import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

import Profile from '../../pages/profile'

expect.extend(toHaveNoViolations)

describe('Profile', () => {
  const { container } = render(
    <Profile
      metadata={{
        title: 'Digital Centre (en) + Digital Centre (fr)',
        keywords: 'en + fr keywords',
        description: 'en + fr description',
      }}
    />
  )
  it('renders Profile', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
