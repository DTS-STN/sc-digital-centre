import PropTypes from 'prop-types'
import Script from 'next/script'
import Meta from '../atoms/Meta'
import PhaseBanner from '../atoms/PhaseBanner'
import DSHeader from '../molecules/DSHeader'
import { useEffect } from 'react'
import { Footer, LayoutContainer } from '@dts-stn/service-canada-design-system'

/**
 * Component which defines the layout of the page for all screen sizes
 */
export default function Layout(props) {
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
      ) : null}

      {display.hideHeader ? null : (
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

      {display.hideFooter ? null : (
        <Footer
          id="page-footer"
          lang={props.locale}
          btnLink="/"
          isAuthenticated={true}
        />
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
     * Toggle use of Phase (default false)
     */
    showPhase: PropTypes.bool,
    /*
     * Toggle use of DS header (default false)
     */
    hideHeader: PropTypes.bool,
    /*
     * Toggle use of DS footer (default false)
     */
    hideFooter: PropTypes.bool,
    /*
     * Toggle the LayoutContainer from Design System (default on/true)
     */
    fullscreen: PropTypes.bool,
  }),
  breadCrumbItems: PropTypes.array,
}
