import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import SplashLanguageSelect from './SplashLanguageSelect'

expect.extend(toHaveNoViolations)

// the code below is to avoid the following error:
//    "An update to Link inside a test was not wrapped in act(...)"
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => (
    <children.type {...children.props} href={href} />
  ),
}))
jest.mock(
  'next/image',
  () =>
    function Image({ imageSrc, alt }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={imageSrc} alt={alt} />
    }
)

describe('SplashLanguageSelect', () => {
  it('renders SplashLanguageSelect component', () => {
    const { container } = render(<SplashLanguageSelect />)
    const enBtnText = screen.getByText('English')
    expect(enBtnText).toBeInTheDocument()
    const frBtnText = screen.getByText('Français')
    expect(frBtnText).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<SplashLanguageSelect />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
