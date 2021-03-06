import SplashLanguageSelect from '../components/molecules/SplashLanguageSelect'
import PropTypes from 'prop-types'

export default function Index(props) {
  return (
    <div className="flex h-screen bg-cover bg-center bg-splash-page">
      <SplashLanguageSelect />
    </div>
  )
}

export async function getStaticProps() {
  const metadata = {
    title: 'Digital Centre (en) + Digital Centre (fr)',
    keywords: 'en + fr keywords',
    description: 'en + fr description',
  }
  const display = {
    hideHeader: true,
    hideFooter: true,
    fullscreen: true,
  }

  return {
    props: {
      metadata,
      display,
    },
  }
}

Index.propTypes = {
  /**
   * Metadata for the Head of Digital Centre
   */
  metadata: PropTypes.object,
}
