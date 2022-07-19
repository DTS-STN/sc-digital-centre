import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="no-js" dir="ltr" xmlns="http://www.w3.org/1999/xhtml">
        <Head prefix="og:http://ogp.me/ns#"></Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
          ></script>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <Script
              strategy="beforeInteractive"
              src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL}
            />
          ) : null}
        </body>
      </Html>
    )
  }
}

export default MyDocument
