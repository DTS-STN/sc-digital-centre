import SplashLanguageSelect from '../components/molecules/SplashLanguageSelect'
import Link from 'next/link'
import ActionButton from '../components/atoms/ActionButton'
import Image from 'next/image'
import Layout from '../components/organisms/Layout'
import { getIndexPageContent } from './../lib/pageContent'
import PropTypes from 'prop-types'

export default function Index(props) {
  return (
    <Layout
      locale="en"
      displayHeader={false}
      displayFooter={false}
      metadata={props.metadata}
    >
      <div className="flex h-screen bg-cover bg-center bg-splash-page">
        <SplashLanguageSelect />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { metadata } = await getIndexPageContent()

  return {
    props: {
      metadata,
    },
  }
}

Index.propTypes = {
  /**
   * Metadata for the Head of Digital Centre
   */
  metadata: PropTypes.object,
}
