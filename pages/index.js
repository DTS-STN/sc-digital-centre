import Head from 'next/head'
import SplashLanguageSelect from '../components/molecules/SplashLanguageSelect'
import Layout from '../components/organisms/Layout'

export default function Splash() {
  return (
    <Layout locale="en" displayHeader={false} displayFooter={false}>
      <div className="flex h-screen bg-cover bg-center bg-splash-page">
        <Head>
          <title>Digital Centre</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <SplashLanguageSelect />
      </div>
    </Layout>
  )
}
