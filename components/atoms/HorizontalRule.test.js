import { axe, toHaveNoViolations } from 'jest-axe'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HorizontalRule from './HorizontalRule'

describe('HorizontalRule Component Tests', () => {
  it('renders HorizontalRule no width', () => {
    const noProp = render(<HorizontalRule />)
    expect(noProp).toBeTruthy()
  })

  it('renders HorizontalRule width', () => {
    const widthProp = render(<HorizontalRule width={'w-auto'} />)
    expect(widthProp).toBeTruthy()
  })

  it('renders HorizontalRule color', () => {
    const colorProp = render(<HorizontalRule color={'red'} />)
    expect(colorProp).toBeTruthy()
  })

  it('renders HorizontalRule visibility', () => {
    const visibilityProp = render(<HorizontalRule visibility={'hidden'} />)
    expect(visibilityProp).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<HorizontalRule />)
    const results = await axe(container)
    expect(results).toHaveNoViolations
  })
})
