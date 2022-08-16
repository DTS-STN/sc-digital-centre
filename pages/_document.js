import Document, { Html, Head, Main, NextScript } from 'next/document'
import { generateNonce } from '../lib/Utils.js'
import Script from 'next/script'

let prod = process.env.NODE_ENV == 'production'

function getCsp(nonce) {
  let csp = ``
  csp += `base-uri 'self';`
  csp += `form-action 'self';`
  csp += `default-src 'self';`
  csp += `script-src 'self' 'nonce-${nonce}' ${prod ? '' : "'unsafe-eval'"};`
  csp += `style-src 'self' fonts.googleapis.com ${
    prod ? '' : "'unsafe-inline'"
  };`
  csp += `img-src 'self' data: blob:;`
  csp += `font-src 'self' https://fonts.gstatic.com data:;`
  return csp
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    const nonce = generateNonce()
    let referrer = 'strict-origin'

    return (
      <Html className="no-js" dir="ltr" xmlns="http://www.w3.org/1999/xhtml">
        <Head nonce={nonce} prefix="og:http://ogp.me/ns#">
          <meta httpEquiv="Content-Security-Policy" content={getCsp(nonce)} />
          <meta name="referrer" content={referrer} />
        </Head>
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
