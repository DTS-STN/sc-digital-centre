import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import MostRequestedPages from './MostRequestedPages'

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

describe('MostRequestedPages', () => {
  it('renders MostRequestedPages component', () => {
    const { container } = render(
      <MostRequestedPages
        title="CardList Title"
        cardList={[
          {
            key: 'Page Name 1',
            title: 'Title 1',
            tag: 'Program 1',
            text: 'Short Description 1',
            callToActionText: 'Call to Action 1',
            btnId: 'idx',
            callToActionHref: '#',
          },
        ]}
      ></MostRequestedPages>
    )
    const titletext = screen.getByText('CardList Title')
    expect(titletext).toBeInTheDocument()
    const cardTitleText = screen.getByText('Title 1')
    expect(cardTitleText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <MostRequestedPages
        title="Card Title"
        cardList={[
          {
            key: 'Page Name 1',
            title: 'Title 1',
            tag: 'Program 1',
            text: 'Short Description 1',
            callToActionText: 'Call to Action 1',
            btnId: 'idx',
            callToActionHref: '#',
          },
        ]}
      ></MostRequestedPages>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
