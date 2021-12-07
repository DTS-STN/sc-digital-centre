/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Splash from '../../pages/index'
import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

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

describe('Splash page', () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
      query: {
        search: '',
      },
    }))
  })

  it('should render', () => {
    render(<Splash locale={'en'} page={samplePage} />)
    const enLink = screen.getByText('English')
    expect(enLink).toBeInTheDocument()
  })
})
