import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
          ) : (
            ''
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script id="AdobeSatellite" type="text/javascript">
              _satellite.pageBottom();
            </script>
          ) : (
            ''
          )}
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
