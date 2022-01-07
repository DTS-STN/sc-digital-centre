import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from '../../pages/search'
import { axe, toHaveNoViolations } from 'jest-axe'
import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

// the code below is to avoid the following error:
//    "An update to Link inside a test was not wrapped in act(...)"
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => (
    <children.type {...children.props} href={href} />
  ),
}))

expect.extend(toHaveNoViolations)

describe('Search page', () => {
  const metadata = {
    title: 'Search',
    toggleLangLink: '/fr/search',
    currentLink: '/search',
  }

  const benefits = [
    {
      key: 'Page Name 1',
      title: 'Title 1',
      tag: 'Program 1',
      text: 'Short Description 1',
      callToActionText: 'Call to Action 1',
      btnId: 'idx1',
      callToActionHref: '#',
    },
    {
      key: 'Page Name 2',
      title: 'Title 1',
      tag: 'Program 2',
      text: 'Short Description 2',
      callToActionText: 'Call to Action 2',
      btnId: 'idx2',
      callToActionHref: '#',
    },
  ]

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
      query: {
        search: '',
      },
    }))
  })
  it('should render in French', () => {
    render(<Search locale="fr" metadata={metadata} benefits={benefits} />)
    const enLink = screen.getByText('English')
    expect(enLink).toBeInTheDocument()
  })

  it('should render in English', () => {
    render(<Search locale="en" metadata={metadata} benefits={benefits} />)
    const enLink = screen.getByText('Français')
    expect(enLink).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <Search locale="en" metadata={metadata} benefits={benefits} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
