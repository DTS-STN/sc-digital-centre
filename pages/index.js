import SplashLanguageSelect from '../components/molecules/SplashLanguageSelect'
import Layout from '../components/organisms/Layout'
import { getIndexPageContent } from './../lib/pageContent'

export default function Splash(props) {
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
