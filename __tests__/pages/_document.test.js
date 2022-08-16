import '@testing-library/jest-dom'
import MyDocument from '../../pages/_document'
import * as utils from '../../lib/Utils.js'

describe('_document', () => {
  jest.spyOn(utils, 'generateNonce').mockReturnValue('test')
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
