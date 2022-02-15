import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HorizontalRule from './HorizontalRule'

describe('HorizontalRule Component Tests', () => {
  it('renders HorizontalRule no width', () => {
    const noProp = render(<HorizontalRule />)
    expect(noProp).toMatchSnapshot()
  })

  it('renders HorizontalRule width', () => {
    const widthProp = render(<HorizontalRule width={'w-auto'} />)
    expect(widthProp).toMatchSnapshot()
  })

  it('renders HorizontalRule color', () => {
    const colorProp = render(<HorizontalRule color={'red'} />)
    expect(colorProp).toMatchSnapshot()
  })

  it('renders HorizontalRule visibility', () => {
    const visibilityProp = render(<HorizontalRule visibility={'hidden'} />)
    expect(visibilityProp).toMatchSnapshot()
  })
})
