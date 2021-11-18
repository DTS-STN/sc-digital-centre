import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import ImageBox from './ImageBox'

expect.extend(toHaveNoViolations)

jest.mock(
  'next/image',
  () =>
    function Image({ imageSrc, alt }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={imageSrc} alt={alt} />
    }
)

// test to see if the image props and the children props are passed through
describe('ImageBox', () => {
  test('renders ImageBox component', () => {
    const { container } = render(
      <ImageBox
        imageSrc="title test"
        alt="tag test"
        layout="text test"
        objectFit="href test"
        objectPosition="link test"
      >
        <div id="children"></div>
      </ImageBox>
    )
    const children = container.querySelector('#children')
    expect(children).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(
      <ImageBox
        imageSrc="title test"
        alt="tag test"
        layout="text test"
        objectFit="href test"
        objectPosition="link test"
      >
        <div id="children"></div>
      </ImageBox>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
