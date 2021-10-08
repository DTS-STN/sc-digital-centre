import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ContactUs } from './ContactUs'
import icon from './../../public/Callback.png'

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

const testList = [
  {
    cardId: '1',
    iconSrc: icon,
    iconAlt: 'image description',
    title: 'titleTest',
    text: 'text test',
    linkText: 'CallToActionTest',
    linkHref: '/home',
  },
]

describe('ContactUs', () => {
  it('renders ContactUs', () => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
    render(<ContactUs mainTitle="Main Title" contactList={testList} />)
    const titleText = screen.getByText('titleTest')
    const textText = screen.getByText('text test')
    const linkText = screen.getByText('CallToActionTest')
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
      <ContactUs mainTitle="Main Title" contactList={testList} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
