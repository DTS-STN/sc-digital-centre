import '../styles/globals.css'
import '../styles/fonts.css'
import Layout from '../components/organisms/Layout'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let langToggleLink =
    pageProps.locale === 'en' ? '/fr' + router.pathname : router.pathname
  if (router.query.userid) {
    langToggleLink += '?userid=' + router.query.userid
  }
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
