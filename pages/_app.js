import '../styles/globals.css'
import '../styles/fonts.css'
import Layout from '../components/organisms/Layout'
import { useRouter } from 'next/router'

import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

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
