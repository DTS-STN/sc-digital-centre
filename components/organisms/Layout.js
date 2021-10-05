import PropTypes from 'prop-types'
import Footer from '../molecules/Footer'
import Head from 'next/head'
import { Menu } from '../molecules/Menu'

import en from '../../locales/en'
import fr from '../../locales/fr'

/**
 * Component which defines the layout of the page for all screen sizes
 */
export default function Layout({ children, locale }) {
  const t = locale === 'en' ? en : fr

  return (
    <div>
      <Head></Head>
      <Menu
        language={locale}
        items={[
          {
            link: '/',
            text: t.serviceAndBenefits,
          },
          {
            link: '/',
            text: t.tools,
          },
          {
            link: '/',
            text: t.contactUs,
          },
        ]}
      />
      <main>
        <div>{children}</div>
      </main>

      <Footer
        footerLogoAltText="symbol2"
        footerLogoImage="/wmms-blk.svg"
        footerNav1="aboutGovernment"
        footerNav2="aboutThisSite"
        links={[
          {
            link: t.footerSocialMediaURL,
            linkText: t.footerSocialMedia,
          },
          {
            link: t.footerMobileAppURL,
            linkText: t.footerMobileApp,
          },
          {
            link: t.footerAboutURL,
            linkText: t.footerAbout,
          },
          {
            link: t.footerTermsAndConditionURL,
            linkText: t.footerTermsAndCondition,
          },
          {
            link: t.footerPrivacyURL,
            linkText: t.footerPrivacy,
          },
        ]}
        footerBoxLinks={[
          {
            footerBoxlink: t.footerContactUsURL,
            footerBoxLinkText: t.footerContactUs,
          },
          {
            footerBoxlink: t.footerNewsURL,
            footerBoxLinkText: t.footerNews,
          },
          {
            footerBoxlink: t.footerPmURL,
            footerBoxLinkText: t.footerPm,
          },
          {
            footerBoxlink: t.footerDepartmentAgenciesURL,
            footerBoxLinkText: t.footerDepartmentAgencies,
          },
          {
            footerBoxlink: t.footerTreatiesURL,
            footerBoxLinkText: t.footerTreaties,
          },
          {
            footerBoxlink: t.footerHowGovWorksURL,
            footerBoxLinkText: t.footerHowGovWorks,
          },
          {
            footerBoxlink: t.footerPublicServiceURL,
            footerBoxLinkText: t.footerPublicService,
          },
          {
            footerBoxlink: t.footerGovReportingURL,
            footerBoxLinkText: t.footerGovReporting,
          },
          {
            footerBoxlink: t.footerOpenGovURL,
            footerBoxLinkText: t.footerOpenGov,
          },
        ]}
      />
    </div>
  )
}

Layout.propTypes = {
  // Locale current language
  locale: PropTypes.string,
}
