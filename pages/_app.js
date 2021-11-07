import '../styles/globals.css'
import '../styles/fonts.css'

import BenefitsProvider from '../context/benefitsContext'

function MyApp({ Component, pageProps }) {
  return (
    <BenefitsProvider>
      <Component {...pageProps} />
    </BenefitsProvider>
  )
}

export default MyApp
