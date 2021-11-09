import Layout from '../../components/organisms/Layout'
import { getAEMElements, getAEMFragments } from '../api/getData'
import en from '../../locales/en'
import fr from '../../locales/fr'
export default function BenefitPage(props) {
  const t = props.locale === 'en' ? en : fr
  return (
    <Layout locale={props.locale} title={props.params.id}>
      ... this ia a page
    </Layout>
  )
}
export async function getStaticPaths() {
  let features = await getAEMElements('benefits/oas.json')
  return {
    paths: [
      {
        params: {
          id: features.elements.scPageNameFr.value,
        },
      },
    ],
    fallback: false,
  }
}
export async function getStaticProps({ locale, params }) {
  // Here we can fetch the chosen benefits with params.id before returning it as a prop.
  return {
    props: {
      locale,
      params,
    },
  }
}
//   export async function getStaticPaths() {
//     scPageNameEn: [Object],
//     scPageNameFr: [Object],
//     // Return a list of possible value for id
//   }
