import Document, { Html, Head, Main, NextScript } from 'next/document'
import { generateNonce } from '../lib/Utils.js'
import Script from 'next/script'

let prod = process.env.NODE_ENV == 'production'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const nonce = generateNonce()
    const initialProps = await Document.getInitialProps(ctx)

    //set csp
    let csp = ``
    csp += `base-uri 'self';`
    csp += `form-action 'self';`
    csp += `default-src 'self';`
    csp += `script-src 'self' 'nonce-${nonce}' 'unsafe-eval';`
    csp += `style-src 'self' fonts.googleapis.com 'unsafe-inline';`
    csp += `img-src 'self' data: blob:;`
    csp += `font-src 'self' https://fonts.gstatic.com data:;`

    if (ctx.res) {
      ctx.res.setHeader('content-security-policy', csp)
    }

    return { ...initialProps, nonce }
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
              id="1"
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
