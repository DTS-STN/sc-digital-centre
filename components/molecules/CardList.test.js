import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import CardList from './CardList'

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
            key: 'Page Name 1',
            title: 'Title 1',
            tag: 'Program 1',
            text: 'Short Description 1',
            callToActionText: 'Call to Action 1',
          },
        ]}
      />
    )
    const titleText = screen.getByText('Title 1')
    // const tagText = screen.getByText('Program 1')  there are no tags in the current version of Card
    const textText = screen.getByText('Short Description 1')
    const linkText = screen.getByText('Call to Action 1')
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
      <CardList
        cardList={[
          {
            key: 'Page Name 1',
            title: 'Title 1',
            tag: 'Program 1',
            text: 'Short Description 1',
            callToActionText: 'Call to Action 1',
          },
        ]}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
