import { ErrorPage } from '@dts-stn/decd-design-system'
import DSHeader from '../components/molecules/DSHeader'

export default function Error503(props) {
  const errorPageLink = props.locale === 'en' ? '/dashboard' : '/fr/dashboard'
  return (
    <>
      <DSHeader locale={props.locale} langToggleLink={props.langToggleLink} />
      <ErrorPage
        errType="503"
        lang={props.locale}
        accountPageLink={errorPageLink}
        isAuth={true}
      />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const langToggleLink = locale === 'en' ? '/fr/503' : '/503'
  return {
    props: { locale, langToggleLink },
  }
}
