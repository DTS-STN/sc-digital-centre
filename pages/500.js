import { ErrorPage } from '@dts-stn/decd-design-system'

export default function Error500(props) {
  const errorPageLink = props.locale === 'en' ? '/dashboard' : '/fr/dashboard'
  return (
    <ErrorPage
      errType="500"
      lang={props.locale}
      accountPageLink={errorPageLink}
      isAuth={true}
    />
  )
}

export async function getStaticProps({ locale }) {
  const metadata = {
    title: 'Digital Centre (en) + Digital Centre (fr)',
    keywords: 'en + fr keywords',
    description: 'en + fr description',
  }
  const display = {
    hideDSFooter: true,
  }
  return {
    props: { locale, metadata, display },
  }
}
