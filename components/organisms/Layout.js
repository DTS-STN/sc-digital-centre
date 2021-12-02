import PropTypes from 'prop-types'
import Script from 'next/script'
import Meta from '../atoms/Meta'
import PhaseBanner from '../atoms/PhaseBanner'
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import { useEffect } from 'react'

import en from '../../locales/en'
import fr from '../../locales/fr'

/**
 * Component which defines the layout of the page for all screen sizes
 */
export default function Layout({ children, locale, title, phase, bannerText }) {
  const t = locale === 'en' ? en : fr

  useEffect(() => {
    if (/*process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL*/ false) {
      window.adobeDataLayer.push({
        event: 'pageLoad',
        page: {
          title: document.title,
          language: locale === 'en' ? 'eng' : 'fra',
          creator:
            'Employment and Social Development Canada/Emploi et Développement social Canada',
          accessRights: '2',
          service: 'ESDC-EDSC_DC-CD',
        },
      })
    }
  }, [])

  return (
    <div>
      <Meta title={title} lang={locale} />
      <PhaseBanner
        phase={phase}
        bannerText={bannerText}
        lang={locale}
      ></PhaseBanner>

      <Header language={locale} t={t} />

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

      {
        /*process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL */ false ? (
          <Script id="AdobeSatellite" type="text/javascript">
            _satellite.pageBottom();
          </Script>
        ) : (
          ''
        )
      }
    </div>
  )
}

Layout.propTypes = {
  /*
   * Locale current language
   */
  locale: PropTypes.string,
  /*
   * Title of the page
   */
  title: PropTypes.string,
}
