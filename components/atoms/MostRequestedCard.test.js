import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import { MostRequestedCard } from './MostRequestedCard'

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

describe('MostRequestedCard', () => {
  it('renders MostRequestedCard', () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    render(
      <MostRequestedCard
        title="title test"
        text="text test"
        callToActionHref="href test"
        callToActionText="link test"
        btnId="btnTestId"
      />
    )
    const titleText = screen.getByText('title test')
    const textText = screen.getByText('text test')
    const linkText = screen.getByText('link test')
    expect(titleText).toBeInTheDocument()
    expect(textText).toBeInTheDocument()
    expect(linkText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    const { container } = render(
      <MostRequestedCard
        title="title test"
        text="text test"
        callToActionHref="href test"
        callToActionText="link test"
        btnId="btnTestId"
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
