import '@testing-library/jest-dom'
import MyDocument from '../../pages/_document'

describe('_document', () => {
  it('returns initialProps', async () => {
    const props = { html: 'html', head: 'head', styles: 'styles' }
    const result = await MyDocument.getInitialProps({
      defaultGetInitialProps: async (docCtx, options = {}) => {
        return props
      },
    })
    expect(result).toStrictEqual(props)
  })

  it('renders', () => {
    const sut = new MyDocument()
    const result = sut.render()
    expect(result).toBeTruthy()
  })
})
