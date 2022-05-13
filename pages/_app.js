import '../styles/globals.css'
import '../styles/fonts.css'
import Layout from '../components/organisms/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout
      locale={pageProps.locale}
      title={pageProps.title}
      metadata={pageProps.metadata}
      langToggleLink={pageProps.langToggleLink}
      display={pageProps.display}
      isAuth={pageProps.isAuth}
    >
      <Component {...pageProps} />
    </Layout>
  )
}
