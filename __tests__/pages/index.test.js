import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index, { getStaticProps } from '../../pages/index'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('Index page', () => {
  const { container } = render(<Index metadata={{}} />)

  it('should render', () => {
    expect(container).toBeTruthy()
  })

  it('has no a11y violations', async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should return static props', async () => {
    const result = await getStaticProps()
    expect(result.props).toBeTruthy()
    expect(result.props.metadata).toBeTruthy()
  })
})
