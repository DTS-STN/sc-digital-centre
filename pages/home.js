import Layout from '../components/organisms/Layout'
import SearchCard from '../components/molecules/SearchCard'
import {
  getBenefitsAndServices,
  getLocalBenefits,
  getAEMElements,
  getAEMFragments,
} from './api/getData'
import TopTasks from '../components/molecules/TopTasks'
import { CardList } from '../components/molecules/CardList'
import FeatureBlock from '../components/molecules/FeatureBlock'
import ImageBox from '../components/organisms/ImageBox'
import { ServiceCanada } from '../components/molecules/ServiceCanada'
import { ContactUs } from '../components/molecules/ContactUs'

import { useEffect, useContext } from 'react'
import { BenefitsContext } from '../context/benefitsContext'

import en from '../locales/en'
import fr from '../locales/fr'

export default function Home(props) {
  const t = props.locale === 'en' ? en : fr

  const { setBenefits } = useContext(BenefitsContext)
  useEffect(() => {
    setBenefits(props.benefits)
  })

  return (
    <Layout
      locale={props.locale}
      title={t.title}
      phase={t.phaseBannerTag}
      bannerText={t.phaseBannerText}
    >
      <ImageBox imageSrc="https://www.canada.ca/content/dam/decd-endc/images/clear-lake-snowy-mountain.png">
        <SearchCard
          lang={props.locale}
          headerText={t.searchFindBenefits}
          paraText={t.searchDesc}
          viewBenefitsServices={t.searchViewAllBenefits}
          searchBarPlaceholder={t.searchPlaceholder}
          searchBarText={t.search}
          onSubmitHref="/searchResult"
        />
      </ImageBox>

      <div className="layout-container md:flex my-5">
        <div className=" lg:w-1/4">
          <ServiceCanada
            title={t.serviceCanadaTitle}
            text={t.serviceCanadaText}
            signInHref="/"
            signInText={t.serviceCanadaSignIn}
            createAccountHref="/"
            createAccountText={t.serviceCanadaCreateAccount}
          />
          <TopTasks
            topTasksHeader={t.topTasksHeader}
            topTasksDescription={t.topTasksDescritpion}
            topTasksList={[
              { taskName: 'Apply for Employment Insurance', taskURL: '/home' },
              {
                taskName: 'Access an ROE (Record of Employment)',
                taskURL: '/home',
              },
              {
                taskName: 'Activate my Service Canada Access Code (PAC)',
                taskURL: '/home',
              },
              {
                taskName: 'Update my address and contact information',
                taskURL: '/home',
              },
            ]}
          />
        </div>
        <div className="lg:w-3/4 md:pl-12">
          <h2 className="font-bold font-display text-2xl mb-4">
            {t.mostRequestedTitle}
          </h2>
          <CardList cardList={props.benefits} />
        </div>
      </div>
      {/* feature with image */}
      <FeatureBlock
        title="Featured: "
        // featuredContent and body text will come form the CMS
        featuredContent={props.featured.scTitleEn.value}
        body={props.featured.scDescriptionEn?.value}
        buttonText="Text on button"
        featuredHref="#"
        btnId="featured-content"
      ></FeatureBlock>
      <ContactUs mainTitle={t.contactUsTitle} contactList={t.contactInfo} />
    </Layout>
  )
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
