import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import ServiceCanada from './ServiceCanada'

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

describe('ServiceCanada', () => {
  it('renders ServiceCanada', () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    render(
      <ServiceCanada
        title="title test"
        text="text test"
        signInHref="/"
        signInText="Signin test"
        createAccountHref="/"
        createAccountText="create test"
      />
    )
    const titleText = screen.getByText('title test')
    const textText = screen.getByText('text test')
    const signInText = screen.getByText('Signin test')
    const createText = screen.getByText('create test')
    expect(titleText).toBeInTheDocument()
    expect(textText).toBeInTheDocument()
    expect(signInText).toBeInTheDocument()
    expect(createText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    const { container } = render(
      <ServiceCanada
        title="title test"
        text="text test"
        signInHref="/"
        signInText="Signin test"
        createAccountHref="/"
        createAccountText="create test"
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
