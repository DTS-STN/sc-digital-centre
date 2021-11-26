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
  const benefits = [
    {
      elements: {
        scPageNameEn: {
          value: 'Page Name 1',
        },
        scTitleEn: {
          value: 'Title 1',
        },
        scProgramEn: {
          value: 'Program 1',
        },
        scDescriptionEn: {
          value: 'Short Description 1',
        },
        scCallToActionEn: {
          value: 'Call to Action 1',
        },
      },
    },
    {
      elements: {
        scPageNameEn: {
          value: 'Page Name 2',
        },
        scTitleEn: {
          value: 'Title 2',
        },
        scProgramEn: {
          value: 'Program 2',
        },
        scDescriptionEn: {
          value: 'Short Description 2',
        },
        scCallToActionEn: {
          value: 'Call to Action 2',
        },
      },
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
    render(<Search locale="fr" benefits={benefits} />)
    const enLink = screen.getByText('English')
    expect(enLink).toBeInTheDocument()
  })

  it('should render in English', () => {
    render(<Search locale="en" benefits={benefits} />)
    const enLink = screen.getByText('Français')
    expect(enLink).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<Search locale="en" benefits={benefits} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
