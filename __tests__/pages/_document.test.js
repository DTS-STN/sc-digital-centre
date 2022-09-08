import '@testing-library/jest-dom'
import MyDocument from '../../pages/_document'

//mocks
jest.mock('../../lib/Utils', () => ({
  generateNonce: jest.fn().mockReturnValue('test'),
}))

describe('_document', () => {
  it('returns initialProps', async () => {
    const props = {
      html: 'html',
      head: 'head',
      styles: 'styles',
      nonce: 'test',
    }
    const result = await MyDocument.getInitialProps({
      defaultGetInitialProps: async (docCtx, options = {}) => {
        return props
      },
    })
    expect(result).toStrictEqual(props)
  })

  it('renders', () => {
    const sut = new MyDocument({ nonce: 'test' })
    const result = sut.render()
    expect(result).toBeTruthy()
  })
})
