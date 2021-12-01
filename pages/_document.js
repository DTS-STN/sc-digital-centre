import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    this.locale = ctx.locale
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        className="no-js"
        dir="ltr"
        lang={this.locale}
        xmlns="http://www.w3.org/1999/xhtml"
      >
        <Head>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script async src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
          ) : (
            ''
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
          ></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
