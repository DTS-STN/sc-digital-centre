import Layout from '../components/organisms/Layout'
import { getAEMElements, getAEMFragments } from './api/getData'

import en from '../locales/en'
import fr from '../locales/fr'

export default function BenefitPage() {
  const t = props.locale === 'en' ? en : fr

  return (
    <Layout locale={props.locale} title="benefit">
      ... this ia a page
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAEMElementIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ locale }) {
  let benefits = []
  let errorCode = false
  let featured = []

  //
  // IF content enabled get the data from the api
  //

  let features = await getAEMElements('benefits/oas.json')
  errorCode = features.error
  if (features.elements && !errorCode) {
    featured = features.elements
  }

  let AEMbenefits = await getAEMFragments('benefits.json')
  errorCode = AEMbenefits.error
  if (AEMbenefits.apiData && !errorCode) {
    benefits = AEMbenefits.apiData.entities
  }

  return {
    props: {
      benefits,
      errorCode,
      locale,
      featured,
    },
  }
}

//   export async function getStaticPaths() {
//     scPageNameEn: [Object],
//     scPageNameFr: [Object],

//     // Return a list of possible value for id
//   }
