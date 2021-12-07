import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Meta from './Meta'
import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

expect.extend(toHaveNoViolations)

const samplePage = {
  title: {
    en: 'Digital Centre (en) + Digital Centre (fr)',
    fr: 'Digital Centre (en) + Digital Centre (fr)',
  },
  meta: {
    keywords: {
      en: 'en + fr keywords',
      fr: 'en + fr keywords',
    },
    description: {
      en: 'en + fr description',
      fr: 'en + fr description',
    },
  },
}

describe('Meta', () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
      query: {
        search: '',
      },
    }))
  })
  it('has no a11y violations', async () => {
    const { container } = render(<Meta aemPage={samplePage} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
