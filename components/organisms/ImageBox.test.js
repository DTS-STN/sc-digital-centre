import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import { axe, toHaveNoViolations } from 'jest-axe'
import ImageBox from './ImageBox'

jest.mock(
  'next/image',
  () =>
    function Image({ imageSrc, alt }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={imageSrc} alt={alt} />
    }
)

// the code below is to avoid the following error:
//    "An update to Link inside a test was not wrapped in act(...)"

// expect.extend(toHaveNoViolations)

describe('ImageBox', () => {
  test('renders ImageBox component', () => {
    render(<ImageBox />)
    const children = screen.getByTestId('image-box')
    expect(children).toBeInTheDocument()
    //   const item = screen.getByTestId('image-box')
    //   expect(item).toBeInTheDocument()

    screen.debug()
  })
})
