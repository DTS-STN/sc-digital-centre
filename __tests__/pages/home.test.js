/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages/home'
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

describe('Home page', () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
  })
  it('should render', () => {
    render(<Home />)
    const enLink = screen.getByText('English')
    expect(enLink).toBeInTheDocument()
  })

  it('should render SearchCard', () => {
    render(<Home />)
    expect(screen.getByTestId('searchCard')).toBeTruthy()
  })
  it('should render serviceCanada', () => {
    render(<Home />)
    expect(screen.getByTestId('serviceCanada')).toBeTruthy()
  })
  it('should render topTasks', () => {
    render(<Home />)
    expect(screen.getByTestId('topTasks')).toBeTruthy()
  })
  it('should render mostRequestedList', () => {
    render(<Home />)
    expect(screen.getByTestId('mostRequestedList')).toBeTruthy()
  })
  it('should render featureBlock', () => {
    render(<Home />)
    expect(screen.getByTestId('featureBlock')).toBeTruthy()
  })
  it('should render contactUs', () => {
    render(<Home />)
    expect(screen.getByTestId('contactUs')).toBeTruthy()
  })
  it('has no a11y violations', async () => {
    const { container } = render(<Home />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
