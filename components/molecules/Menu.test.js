import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Menu from './Menu'

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

describe('Menu', () => {
  it('renders Menu in English', () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))

    render(
      <Menu
        loginText="Login"
        items={[
          {
            link: '/',
            text: 'englishLink',
          },
          {
            link: '/',
            text: 'englishLink2',
          },
          {
            link: '/',
            text: 'englishLink3',
          },
        ]}
      />
    )
    const MenuLink = screen.getByText('englishLink')
    const loginBtn = screen.getByText('Login')
    expect(MenuLink).toBeInTheDocument()
    expect(loginBtn).toBeInTheDocument()
  })

  it('renders Menu in French', () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))

    render(
      <Menu
        loginText="Connexion"
        items={[
          {
            link: '/',
            text: 'FrLink',
          },
          {
            link: '/',
            text: 'FrLink2',
          },
          {
            link: '/',
            text: 'FrLink3',
          },
        ]}
      />
    )
    const MenuLink = screen.getByText('FrLink')
    const loginBtn = screen.getByText('Connexion')

    expect(MenuLink).toBeInTheDocument()
    expect(loginBtn).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <Menu
        loginText="Connexion"
        items={[
          {
            link: '/',
            text: 'FrLink',
          },
          {
            link: '/',
            text: 'FrLink2',
          },
          {
            link: '/',
            text: 'FrLink3',
          },
        ]}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
