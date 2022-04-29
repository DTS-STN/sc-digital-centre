import { ErrorPage } from '@dts-stn/decd-design-system'
import DSHeader from '../components/molecules/DSHeader'

export default function Error404(props) {
  const errorPageLink = props.locale === 'en' ? '/dashboard' : '/fr/dashboard'
  return (
    <>
      <DSHeader locale={props.locale} langToggleLink={props.langToggleLink} />
      <ErrorPage
        errType="404"
        lang={props.locale}
        accountPageLink="/dashboard"
        isAuth={true}
      />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const langToggleLink = locale === 'en' ? '/fr/404' : '/404'
  return {
    props: { locale, langToggleLink },
  }
}
