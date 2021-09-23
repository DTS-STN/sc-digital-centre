import PropTypes from 'prop-types'
import Footer from '../molecules/Footer'
import DateModified from '../atoms/DateModified'
import Head from 'next/head'

/**
 * Component which defines the layout of the page for all screen sizes
 */
export default function Layout({ children }) {
  return (
    <div>
      <Head></Head>

      <main>
        <div>{children}</div>
      </main>

      <footer>
        <h2 className="sr-only">siteFooter</h2>
        <div className="layout-container mt-5">Report a problem</div>
        <div className="layout-container mb-2">
          <DateModified date={process.env.NEXT_PUBLIC_BUILD_DATE} />
        </div>
        <Footer
          footerLogoAltText="symbol2"
          footerLogoImage="/wmms-blk.svg"
          footerNav1="aboutGovernment"
          footerNav2="aboutThisSite"
          links={[
            {
              link: 'footerSocialMediaURL',
              linkText: 'footerSocialMedia',
            },
            {
              link: 'footerMobileAppURL',
              linkText: 'footerMobileApp',
            },
            {
              link: 'footerTermsAndConditionURL',
              linkText: 'footerTermsAndCondition',
            },
            {
              link: 'footerPrivacyURL',
              linkText: 'footerPrivacy',
            },
          ]}
          footerBoxLinks={[
            {
              footerBoxlink: 'footerContactUsURL',
              footerBoxLinkText: 'footerContactUs',
            },
            {
              footerBoxlink: 'footerNewsURL',
              footerBoxLinkText: 'footerNews',
            },
            {
              footerBoxlink: 'footerPmURL',
              footerBoxLinkText: 'footerPm',
            },
            {
              footerBoxlink: 'footerDepartmentAgenciesURL',
              footerBoxLinkText: 'footerDepartmentAgencies',
            },

            {
              footerBoxlink: 'footerTreatiesURL',
              footerBoxLinkText: 'footerTreaties',
            },
            {
              footerBoxlink: 'footerHowGovWorksURL',
              footerBoxLinkText: 'footerHowGovWorks',
            },
            {
              footerBoxlink: 'footerPublicServiceURL',
              footerBoxLinkText: 'footerPublicService',
            },
            {
              footerBoxlink: 'footerGovReportingURL',
              footerBoxLinkText: 'footerGovReporting',
            },
            {
              footerBoxlink: 'footerOpenGovURL',
              footerBoxLinkText: 'footerOpenGov',
            },
          ]}
        />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  // Define props to pass here
}
