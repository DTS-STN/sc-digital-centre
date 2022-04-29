import { Header } from '@dts-stn/decd-design-system'
import en from '../../locales/en'
import fr from '../../locales/fr'

export default function DSHeader(props) {
  const t = props.locale === 'en' ? en : fr
  return (
    <Header
      id="header"
      lang={props.locale}
      linkPath={props.langToggleLink}
      breadCrumbItems={[
        {
          link: t.url_canada_ca,
          text: t.canada_ca,
        },
        {
          link: t.url_serviceCanada,
          text: t.serviceCanada,
        },
        {
          link: t.url_myBenefitsAndServices,
          text: t.myBenefitsAndServices,
        },
      ]}
      menuProps={{
        craPath: t.craPath,
        dashboardPath: t.dashboardPath,
        isAuthenticated: true,
        onSignOut: function noRefCheck() {},
        profilePath: t.profilePath,
        securityPath: t.securityPath,
        signOutPath: t.signOutPath,
      }}
      searchProps={{
        onChange: function noRefCheck() {},
        onSubmit: function noRefCheck() {},
      }}
    />
  )
}
