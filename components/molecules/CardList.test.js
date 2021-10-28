import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import { CardList } from './CardList'

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

describe('CardList', () => {
  it('renders CardList', () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    render(
      <CardList
        cardList={[
          {
            id: 1,
            title: 'titleTest',
            tag: 'tag test',
            text: 'text test',
            callToActionText: 'CallToActionTest',
            callToActionHref: '/home',
            btnId: 'btn1',
          },
        ]}
      />
    )
    const titleText = screen.getByText('titleTest')
    const tagText = screen.getByText('tag test')
    const textText = screen.getByText('text test')
    const linkText = screen.getByText('CallToActionTest')
    expect(titleText).toBeInTheDocument()
    expect(tagText).toBeInTheDocument()
    expect(textText).toBeInTheDocument()
    expect(linkText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    const { container } = render(
      <CardList
        cardList={[
          {
            id: 1,
            title: 'titleTest',
            tag: 'tag test',
            text: 'text test',
            callToActionText: 'CallToActionTest',
            callToActionHref: '/home',
            btnId: 'btn1',
          },
        ]}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
