import Layout from '../../components/organisms/Layout'
import en from '../../locales/en'
import fr from '../../locales/fr'
import aemService from '../api/aemServiceInstance'
import { BENEFITS } from '../../constants/aem'
import { getBenefitsPageContent } from '../../lib/pageContent'
import PropTypes from 'prop-types'

export default function BenefitPage(props) {
  const benefitData = props.benefit.elements

  const t = props.locale === 'en' ? en : fr

  return (
    <Layout
      locale={props.locale}
      title={benefitData.scTitleEn.value}
      phase={t.phaseBannerTag}
      bannerText={t.phaseBannerText}
      metadata={props.metadata}
    >
      <h1 className="font-extrabold text-red-800 text-3xl text-center mt-12">
        {props.locale === 'en'
          ? benefitData.scTitleEn.value
          : benefitData.scTitleFr.value}
      </h1>

      <div className="w-9/12 mx-auto border my-24">
        <p className="p-5">
          {props.locale === 'en'
            ? benefitData.scLongDescriptionEn.value
            : benefitData.scLongDescriptionFr.value}
        </p>
      </div>
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  const benefits = await aemService.getFragment(BENEFITS)
  const paths = benefits.data.entities.flatMap(({ properties }) => {
    return [
      { params: { id: properties.name }, locale: locales[0] },
      { params: { id: properties.name }, locale: locales[1] },
    ]
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ locale, params }) {
  let { metadata, benefit } = await getBenefitsPageContent(locale, params.id)

  return {
    props: {
      locale,
      metadata,
      benefit,
    },
  }
}

BenefitPage.propTypes = {
  /**
   * Metadata for the Head of Digital Centre
   */
  metadata: PropTypes.object,

  /**
   * current locale in the address
   */
  locale: PropTypes.string,

  /**
   * Selected benefit
   */
  benefit: PropTypes.object,
}
