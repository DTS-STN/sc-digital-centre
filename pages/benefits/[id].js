import Layout from '../../components/organisms/Layout'
import { getPageNamesFromAEM } from '../api/getData'
import { useContext } from 'react'
import {
  BenefitsContext,
  BenefitsProvider,
} from '../../context/benefitsContext'

import en from '../../locales/en'
import fr from '../../locales/fr'

export default function BenefitPage(props) {
  //
  console.log('props : ', props)

  const t = props.locale === 'en' ? en : fr

  const { benefits } = useContext(BenefitsContext)

  console.log('Benefits stored :', benefits)

  return (
    <Layout locale={props.locale} title={props.benefit.id}>
      <h1 className="font-extrabold text-red-800 text-3xl text-center">
        {props.benefit.id}
      </h1>

      <p className="text-center my-24"> ... this ia a page</p>
    </Layout>
  )
}

export async function getStaticPaths() {
  const { elements } = await getPageNamesFromAEM(`benefits.json`)
  const paths = elements.map((name) => ({ params: { id: name } }))
  //console.log('paths', paths)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  //  console.log('context = ', context)

  return {
    props: {
      locale: context.locale,
      benefit: context.params,
    },
  }
}
