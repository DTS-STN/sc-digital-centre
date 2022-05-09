import { ErrorPage } from '@dts-stn/decd-design-system'
import Layout from '../components/organisms/Layout'

export default function Error400(props) {
  const errorPageLink = props.locale === 'en' ? '/dashboard' : '/fr/dashboard'
  return (
    <>
      <Layout
        locale={props.locale}
        displayHeader={true}
        displayDSFooter={false}
        metadata={props.metadata}
        langToggleLink={props.langToggleLink}
      >
        <ErrorPage
          errType="400"
          lang={props.locale}
          accountPageLink={errorPageLink}
          isAuth={true}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const langToggleLink = locale === 'en' ? '/fr/400' : '/400'
  const metadata = {
    title: 'Digital Centre (en) + Digital Centre (fr)',
    keywords: 'en + fr keywords',
    description: 'en + fr description',
  }
  return {
    props: { locale, langToggleLink, metadata },
  }
}