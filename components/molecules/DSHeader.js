import { Header } from '@dts-stn/service-canada-design-system'
import en from '../../locales/en'
import fr from '../../locales/fr'
import { signOut } from 'next-auth/react'

export default function DSHeader(props) {
  const t = props.locale === 'en' ? en : fr
  const defaultBreadcrumbs = [
    {
      link: t.url_canada_ca,
      text: t.canada_ca,
    },
    {
      link: t.url_serviceCanada,
      text: t.serviceCanada,
    },
  ]
  const topnavProps = {
    skipToMainPath: '#mainContent',
    skipToAboutPath: '#page-footer',
    switchToBasicPath: '',
    displayAlternateLink: false,
  }
  return (
    <Header
      id="header"
      lang={props.locale}
      linkPath={props.langToggleLink}
      breadCrumbItems={
        props.breadCrumbItems
          ? defaultBreadcrumbs.concat(props.breadCrumbItems)
          : defaultBreadcrumbs
      }
      topnavProps={topnavProps}
      isAuthenticated={props.isAuth}
      menuProps={{
        craPath: t.craPath,
        dashboardPath: t.dashboardPath,
        onSignOut: () => signOut(),
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
