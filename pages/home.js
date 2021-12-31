import React from 'react'
import Layout from '../components/organisms/Layout'
import SearchCard from '../components/molecules/SearchCard'
import TopTasks from '../components/molecules/TopTasks'
import FeatureBlock from '../components/molecules/FeatureBlock'
import ImageBox from '../components/organisms/ImageBox'
import MostRequestedPages from '../components/organisms/MostRequestedPages'
import { ServiceCanada } from '../components/molecules/ServiceCanada'
import { ContactUs } from '../components/molecules/ContactUs'
import en from '../locales/en'
import fr from '../locales/fr'
import {
  BENEFIT_EI,
  BENEFITS,
  HOME_PAGE,
  SEARCH_PAGE,
  TOP_TASKS,
  DICTIONARY,
} from '../constants/aem'
import aemService from './api/aemServiceInstance'
import { getHomePageContent } from '../lib/pageContent'

export default function Home(props) {
  const t = props.locale === 'en' ? en : fr

  return (
    <Layout
      locale={props.locale}
      phase={t.phaseBannerTag}
      bannerText={t.phaseBannerText}
      metadata={props.metadata}
    >
      <ImageBox
        imageSrc="https://www.canada.ca/content/dam/decd-endc/images/clear-lake-snowy-mountain.png"
        alt="Picture of something nice"
        layout="fill"
        objectFit="cover"
        objectPosition="20% 80%"
        priority={true}
      >
        <SearchCard
          lang={props.locale}
          headerText={t.searchFindBenefits}
          paraText={t.searchDesc}
          viewBenefitsServices={t.searchViewAllBenefits}
          searchBarPlaceholder={t.searchPlaceholder}
          searchBarText={t.search}
          onSubmitHref={props.findBenefitsAndServices.searchLink}
          dataCyInput="searchInput"
          dataCyButton="searchButton"
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
            topTasksHeader={props.topTasks.header}
            topTasksDescription={t.topTasksDescritpion}
            topTasksList={props.topTasks.topTasksList}
          />
        </div>
        <MostRequestedPages
          title={t.mostRequestedTitle}
          cardList={props.mostRequestedPages.cards}
        />
      </div>
      {/* feature with image */}
      <FeatureBlock
        title={props.featured.header}
        body={props.featured.body}
        imgSrc={props.featured.imgSrc}
        imgAlt={props.featured.imgAlt}
        buttonText="Text on button"
        featuredHref="#"
        btnId="featured-content"
      ></FeatureBlock>
      <ContactUs mainTitle={t.contactUsTitle} contactList={t.contactInfo} />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  let {
    metadata,
    findBenefitsAndServices,
    topTasks,
    mostRequestedPages,
    featured,
  } = await getHomePageContent(locale)

  return {
    props: {
      metadata,
      locale,
      findBenefitsAndServices,
      topTasks,
      mostRequestedPages,
      featured,
    },
  }
}
