import Document, { Html, Head, Main, NextScript } from 'next/document'
import { generateNonce } from '../lib/Utils.js'
import Script from 'next/script'

let prod = process.env.NODE_ENV == 'production'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    //set csp
    const nonce = generateNonce()

    let csp = ``
    csp += `base-uri 'self';`
    csp += `form-action 'self';`
    csp += `default-src 'self' ${prod ? '' : "'unsafe-eval'"};`
    csp += `script-src-elem 'self' 'nonce-${nonce}';`
    csp += `style-src 'self' 'nonce-${nonce}';`
    csp += `img-src 'self' data: blob:;`
    csp += `font-src 'self' https://fonts.gstatic.com data:;`
    csp += `frame-ancestors 'self';`

    ctx.res.setHeader('Content-Security-Policy', csp)
    const initialProps = await Document.getInitialProps(ctx)
    const additionalProps = { nonce }

    return { ...initialProps, ...additionalProps }
  }

  render() {
    const { nonce } = this.props

    return (
      <Html className="no-js" dir="ltr" xmlns="http://www.w3.org/1999/xhtml">
        <Head nonce={nonce} prefix="og:http://ogp.me/ns#"></Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `window.__webpack_nonce__ = "${nonce}"`,
            }}
          ></script>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <Script
              strategy="beforeInteractive"
              src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL}
              nonce={nonce}
              dangerouslySetInnerHTML={{
                __html: `window.__webpack_nonce__ = "${nonce}"`,
              }}
            />
          ) : null}
        </body>
      </Html>
    )
  }
}

export default MyDocument
