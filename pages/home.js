import React from 'react'
import Layout from '../components/organisms/Layout'
import SearchCard from '../components/molecules/SearchCard'
import TopTasks from '../components/molecules/TopTasks'
import { CardList } from '../components/molecules/CardList'
import FeatureBlock from '../components/molecules/FeatureBlock'
import ImageBox from '../components/organisms/ImageBox'
import { ServiceCanada } from '../components/molecules/ServiceCanada'
import { ContactUs } from '../components/molecules/ContactUs'
import en from '../locales/en'
import fr from '../locales/fr'
import { HOME_PAGE, SEARCH_PAGE } from '../constants/aemPages'
import aemService from './api/aemServiceInstance'

export default function Home(
  aemPage,
  locale,
  searchPageHref,
  featured,
  benefits,
  topTasks,
  topTaskTitle
) {
  const t = locale === 'en' ? en : fr
  const topTasks = () => {
    return topTasks?.map((task) => {
      try {
        let title = task.properties.elements.scTitleEn.title
        let link = task.properties.elements.scLinkURLEn.value
        if (locale !== 'en') {
          link = task.properties.elements.scLinkURLFr.value
          title = task.properties.elements.scTitleFr.title
        }
        return { taskName: title, taskURL: link }
      } catch (e) {
        return { taskName: 'undefined', taskURL: '/' }
      }
    })
  }

  const topTaskTitle = () => {
    return locale !== 'en'
      ? topTaskTitle?.properties.elements.scLabelFr.value
      : topTaskTitle?.properties.elements.scLabelEn.value
  }
  return (
    <Layout
      locale={locale}
      phase={t.phaseBannerTag}
      bannerText={t.phaseBannerText}
      aemPage={aemPage}
      searchPageHref={searchPageHref}
    >
      <ImageBox
        imageSrc="https://www.canada.ca/content/dam/decd-endc/images/clear-lake-snowy-mountain.png"
        alt="Picture of something nice"
        layout="fill"
        objectFit="cover"
        objectPosition="20% 80%"
      >
        <SearchCard
          lang={locale}
          headerText={t.searchFindBenefits}
          paraText={t.searchDesc}
          viewBenefitsServices={t.searchViewAllBenefits}
          searchBarPlaceholder={t.searchPlaceholder}
          searchBarText={t.search}
          onSubmitHref={searchPageHref}
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
            topTasksHeader={topTaskTitle()}
            topTasksDescription={t.topTasksDescritpion}
            topTasksList={topTasks()}
          />
        </div>
        <div className="lg:w-3/4 md:pl-12">
          <h2 className="font-bold font-display text-2xl mb-4">
            {t.mostRequestedTitle}
          </h2>
          <CardList cardList={benefits} />
        </div>
      </div>
      {/* feature with image */}
      <FeatureBlock
        title="Featured: "
        // featuredContent and body text will come form the CMS
        featuredContent={featured.scTitleEn?.value}
        body={featured.scDescriptionEn?.value}
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
  let topTasks = []
  let topTaskTitle = []

  let { elements: featured, error: errorCode } = await aemService.getElements(
    'benefits/ei.json'
  )

  let AEMbenefits = await aemService.getBenefits('benefits.json')
  errorCode = AEMbenefits.error
  if (AEMbenefits.benefits && !errorCode) {
    benefits = AEMbenefits.benefits
  }

  // Get list of top tasks
  let topTasksReturned = await aemService.getFragment(
    'components/top-tasks.json'
  )
  errorCode = topTasksReturned.error
  if (topTasksReturned.data && !errorCode) {
    topTasks = topTasksReturned.data.entities
  }

  // Get miscellaneous components content
  let miscellaneousRes = await aemService.getFragment(
    'components/dictionary.json'
  )
  errorCode = miscellaneousRes.error
  if (miscellaneousRes.data && !errorCode) {
    miscellaneousRes.data.entities.forEach((item) => {
      // Extracting Top Task component content (Title and whatever else we add in AEM later on)
      if (item.properties.elements.scId.value === 'TOP-TASKS') {
        topTaskTitle = item
      }
      // Add any if statements to capture other misc component contents
    })
  }

  const aemPage = await aemService.getPage(HOME_PAGE)
  const searchPage = await aemService.getPage(SEARCH_PAGE)
  const searchPageHref = searchPage.link[locale]

  return {
    props: {
      benefits,
      errorCode,
      locale,
      featured,
      aemPage,
      searchPageHref,
      topTasks,
      topTaskTitle,
    },
  }
}
