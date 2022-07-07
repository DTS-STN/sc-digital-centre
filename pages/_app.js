import '../styles/globals.css'
import '../styles/fonts.css'
import Layout from '../components/organisms/Layout'
import { useRouter } from 'next/router'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import * as RegularIcons from '@fortawesome/free-regular-svg-icons'
import * as SolidIcons from '@fortawesome/free-solid-svg-icons'
const regularIconList = Object.keys(RegularIcons)
  .filter((key) => key !== 'far' && key !== 'prefix')
  .map((icon) => RegularIcons[icon])
const solidIconList = Object.keys(SolidIcons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => SolidIcons[icon])
console.log(regularIconList)
library.add(...regularIconList, ...solidIconList)
config.autoAddCss = false

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
