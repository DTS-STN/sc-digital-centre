import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Card from './Card'

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

describe('Card', () => {
  it('renders Card', () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    render(
      <Card
        title="title test"
        tag="tag test"
        text="text test"
        callToActionHref="href test"
        callToActionText="link test"
        btnId="btnTestId"
      />
    )
    const titleText = screen.getByText('title test')
    // const tagText = screen.getByText('tag test')   there are no tags in the current version of Card
    const textText = screen.getByText('text test')
    const linkText = screen.getByText('link test')
    expect(titleText).toBeInTheDocument()
    // expect(tagText).toBeInTheDocument()            there are no tags in the current version of Card
    expect(textText).toBeInTheDocument()
    expect(linkText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    const { container } = render(
      <Card
        title="title test"
        tag="tag test"
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
