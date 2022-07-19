import PropTypes from 'prop-types'
import Script from 'next/script'
import Meta from '../atoms/Meta'
import PhaseBanner from '../atoms/PhaseBanner'
import DSHeader from '../molecules/DSHeader'
import DSFooter from '../molecules/DSFooter'
import Footer from '../molecules/Footer'
import { useEffect } from 'react'

import en from '../../locales/en'
import fr from '../../locales/fr'
import { LayoutContainer } from '@dts-stn/service-canada-design-system'

/**
 * Component which defines the layout of the page for all screen sizes
 */
export default function Layout(props) {
  const t = props.locale === 'en' ? en : fr
  //catch if display is null so page renders with defaults
  const display = props.display ?? {}

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
      window.adobeDataLayer.push({
        event: 'pageLoad',
        page: {
          title: document.title,
          language: props.locale === 'en' ? 'eng' : 'fra',
          creator:
            'Employment and Social Development Canada/Emploi et Développement social Canada',
          accessRights: '2',
          service: 'ESDC-EDSC_DC-CD',
        },
      })
    }
  }, [props.locale])

  return (
    <>
      {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
        <Script
          strategy="afterInteractive"
          id="AdobeSatellite"
          type="text/javascript"
        >
          _satellite.pageBottom();
        </Script>
      ) : null}
      <Meta lang={props.locale} metadata={props.metadata} />

      {display.showPhase ? (
        <>
          <PhaseBanner
            phase={props.phase}
            bannerText={props.bannerText}
            lang={props.locale}
          ></PhaseBanner>
        </>
      ) : (
        ''
      )}

      {display.hideHeader ? (
        ''
      ) : (
        <DSHeader
          locale={props.locale}
          langToggleLink={props.langToggleLink}
          isAuth={props.isAuth}
          breadCrumbItems={props.breadCrumbItems}
        />
      )}

      <main>
        {display.fullscreen ? (
          props.children
        ) : (
          <LayoutContainer>{props.children}</LayoutContainer>
        )}
      </main>

      {display.hideDSFooter ? '' : <DSFooter locale={props.locale} />}

      {display.showFooter ? (
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
      ) : (
        ''
      )}
    </>
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
  /*
   * Link of the page in opposite language
   */
  langToggleLink: PropTypes.string,
  display: PropTypes.shape({
    /*
     * Toggle use of header (default false)
     */
    hideHeader: PropTypes.bool,
    /*
     * Toggle use of Phase (default false)
     */
    showPhase: PropTypes.bool,
    /*
     * Toggle use of DS footer (default false)
     */
    hideDSFooter: PropTypes.bool,
    /*
     * Toggle use of footer (default false)
     */
    showFooter: PropTypes.bool,
    /*
     * Toggle the LayoutContainer from Design System (default on/true)
     */
    fullscreen: PropTypes.bool,
  }),
  breadCrumbItems: PropTypes.array,
}

Layout.defaultProps = {
  displayHeader: true,
  displayDSFooter: true,
}
