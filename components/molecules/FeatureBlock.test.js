import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import FeatureBlock from './FeatureBlock'

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

describe('FeatureBlock', () => {
  it('renders FeatureBlock', () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    render(
      <FeatureBlock
        title="title text"
        featuredContent="featured text"
        body="desctiption text"
        buttonText="button text"
        featuredHref="href text"
        btnId="btnTestId"
      />
    )
    const titleText = screen.getByRole('heading', {
      name: /title text featured text/i,
    })
    const bodyText = screen.getByText('desctiption text')
    const buttonText = screen.getByText('button text')
    expect(titleText).toBeInTheDocument()
    expect(bodyText).toBeInTheDocument()
    expect(buttonText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    const { container } = render(
      <FeatureBlock
        title="title text"
        featuredContent="featured text"
        body="desctiption text"
        buttonText="button text"
        featuredHref="href text"
        btnId="btnTestId"
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
