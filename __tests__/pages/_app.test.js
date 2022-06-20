import MyApp from '../../pages/_app'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '../../pages/index'

describe('_app', () => {
  const { container } = render(
    <MyApp Component={Index} pageProps={{ metadata: {} }} />
  )

  it('renders as expected', () => {
    expect(container).toBeTruthy()
  })
})
