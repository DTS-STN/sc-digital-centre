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
import {
  BENEFIT_EI,
  BENEFITS,
  HOME_PAGE,
  SEARCH_PAGE,
  TOP_TASKS,
  DICTIONARY,
} from '../constants/aem'
import aemService from './api/aemServiceInstance'
import { getPageContent } from '../lib/pageContent'

export default function Home({
  aemPage,
  locale,
  searchPageHref,
  featured,
  mostRequestedPages,
  topTasks,
}) {
  const t = locale === 'en' ? en : fr

  return (
    <Layout
      locale={locale}
      phase={t.phaseBannerTag}
      bannerText={t.phaseBannerText}
      aemPage={aemPage}
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
          lang={locale}
          headerText={t.searchFindBenefits}
          paraText={t.searchDesc}
          viewBenefitsServices={t.searchViewAllBenefits}
          searchBarPlaceholder={t.searchPlaceholder}
          searchBarText={t.search}
          onSubmitHref={searchPageHref[locale]}
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
            topTasksHeader={topTasks.topTaskTitle}
            topTasksDescription={t.topTasksDescritpion}
            topTasksList={topTasks.topTasksList}
          />
        </div>
        <div className="lg:w-3/4 md:pl-12">
          <h2 className="font-bold font-display text-2xl mb-4">
            {t.mostRequestedTitle}
          </h2>
          <CardList cardList={mostRequestedPages.cards} />
        </div>
      </div>
      {/* feature with image */}
      <FeatureBlock
        title={featured.header}
        body={featured.body}
        imgSrc={featured.imgSrc}
        imgAlt={featured.imgAlt}
        buttonText="Text on button"
        featuredHref="#"
        btnId="featured-content"
      ></FeatureBlock>
      <ContactUs mainTitle={t.contactUsTitle} contactList={t.contactInfo} />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  let { mostRequestedPages, topTasks, featured } = await getPageContent(
    HOME_PAGE,
    locale
  )

  const aemPage = await aemService.getPage(HOME_PAGE)
  const searchPage = await aemService.getPage(SEARCH_PAGE)
  const searchPageHref = searchPage.link

  return {
    props: {
      mostRequestedPages,
      locale,
      featured,
      aemPage,
      searchPageHref,
      topTasks,
    },
  }
}
