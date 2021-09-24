import PropTypes from 'prop-types'
import Footer from '../molecules/Footer'
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
    </div>
  )
}

Layout.propTypes = {
  // Define props to pass here
}
