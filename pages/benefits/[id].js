import Layout from '../../components/organisms/Layout'
import en from '../../locales/en'
import fr from '../../locales/fr'
import aemService from '../api/aemServiceInstance'
import { BENEFITS } from '../../constants/aem'

export default function BenefitPage({ locale, aemPage }) {
  const t = locale === 'en' ? en : fr

  return (
    <Layout
      locale={locale}
      aemPage={aemPage}
      phase={t.phaseBannerTag}
      bannerText={t.phaseBannerText}
    >
      <h1 className="font-extrabold text-red-800 text-3xl text-center mt-12">
        {aemPage.title[locale]}
      </h1>

      <div className="w-9/12 mx-auto border my-24">
        <p className="p-5">{aemPage.longDescription[locale]}</p>
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
  const aemPage = await aemService.getPage(
    `benefits/${params.id}/${params.id}.json`
  )

  return {
    props: {
      locale: locale,
      aemPage,
    },
  }
}
