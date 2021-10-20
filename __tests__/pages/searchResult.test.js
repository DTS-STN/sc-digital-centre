import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchResult from '../../pages/searchResult'
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

describe('SearchResult page', () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
  })
  it('should render in French', () => {
    render(<SearchResult locale="fr" />)
    const enLink = screen.getByText('English')
    expect(enLink).toBeInTheDocument()
  })

  it('should render in English', () => {
    render(<SearchResult locale="en" />)
    const enLink = screen.getByText('Français')
    expect(enLink).toBeInTheDocument()
  })
})
