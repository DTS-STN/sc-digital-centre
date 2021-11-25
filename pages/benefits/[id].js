import Layout from '../../components/organisms/Layout'
import { getPageNamesFromAEM, getBenefitFromAEM } from '../api/getData'

import en from '../../locales/en'
import fr from '../../locales/fr'

export default function BenefitPage({ locale, benefit }) {
  const benefitData = benefit.elements

  const t = locale === 'en' ? en : fr

  return (
    <Layout
      locale={locale}
      title={benefitData.scTitleEn.value}
      phase={t.phaseBannerTag}
      bannerText={t.phaseBannerText}
    >
      <h1 className="font-extrabold text-red-800 text-3xl text-center mt-12">
        {benefitData.scTitleEn.value}
      </h1>

      <div className="w-9/12 mx-auto border my-24">
        <p className="p-5">{benefitData.scLongDescriptionEn.value}</p>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const { elements } = await getPageNamesFromAEM(`benefits.json`)
  const paths = elements.map((name) => ({ params: { id: name } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { benefit } = await getBenefitFromAEM(
    `benefits/${context.params.id}.json`
  )

  return {
    props: {
      locale: context.locale,
      benefit,
    },
  }
}
