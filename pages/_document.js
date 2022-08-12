import Document, { Html, Head, Main, NextScript } from 'next/document'
import { generateNonce, generateCSP } from '../lib/Utils.js'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    //set csp
    const nonce = generateNonce()
    ctx.res.setHeader('Content-Security-Policy', generateCSP({ nonce }))
    const initialProps = await Document.getInitialProps(ctx)
    const additionalProps = { nonce }

    return { ...initialProps, ...additionalProps }
  }

  render() {
    const { nonce } = this.props

    return (
      <Html className="no-js" dir="ltr" xmlns="http://www.w3.org/1999/xhtml">
        <Head prefix="og:http://ogp.me/ns#"></Head>
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
