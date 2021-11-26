import Layout from '../../components/organisms/Layout'
import en from '../../locales/en'
import fr from '../../locales/fr'
import aemService from '../api/aemServiceInstance'
import { BENEFITS, SEARCH_PAGE } from '../../constants/aem'

export default function BenefitPage({ locale, benefit, searchPageHref }) {
  const benefitData = benefit.elements

  const t = locale === 'en' ? en : fr

  return (
    <Layout
      locale={locale}
      title={benefitData.scTitleEn.value}
      phase={t.phaseBannerTag}
      bannerText={t.phaseBannerText}
      searchPageHref={searchPageHref}
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
  const benefits = await aemService.getFragment(BENEFITS)
  const paths = benefits.data.entities.map(({ properties }) => {
    return { params: { id: properties.name } }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ locale, params }) {
  const benefit = await aemService.getBenefit(`benefits/${params.id}.json`)
  const searchPage = await aemService.getPage(SEARCH_PAGE)
  const searchPageHref = searchPage.link[locale]

  return {
    props: {
      locale: locale,
      benefit,
      searchPageHref,
    },
  }
}
