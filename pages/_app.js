import '../styles/globals.css'
import '../styles/fonts.css'
import Layout from '../components/organisms/Layout'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  let router = useRouter()
  router ??= {}
  let langToggleLink =
    pageProps.locale === 'en' ? '/fr' + router.asPath : router.asPath
  return (
    <Layout
      locale={pageProps.locale}
      title={pageProps.title}
      metadata={pageProps.metadata}
      langToggleLink={langToggleLink}
      display={pageProps.display}
      isAuth={pageProps.isAuth}
      breadCrumbItems={pageProps.breadCrumbItems}
    >
      <Component {...pageProps} />
    </Layout>
  )
}
