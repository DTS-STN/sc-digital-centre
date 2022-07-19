import { ErrorPage } from '@dts-stn/service-canada-design-system'

export default function Error404(props) {
  const errorPageLink = props.locale === 'en' ? '/dashboard' : '/fr/dashboard'
  return (
    <ErrorPage
      errType="404"
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
