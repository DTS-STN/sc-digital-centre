import Layout from '../components/organisms/Layout'
import SearchHeader from '../components/molecules/SearchHeader'

import { getBenefitsAndServices, getLocalBenefits } from './api/getData'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { CardList } from '../components/molecules/CardList'

import en from '../locales/en'
import fr from '../locales/fr'

export default function SearchResult(props) {
  const t = props.locale === 'en' ? en : fr
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [benefitList, setbenefitList] = useState([
    {
      id: 1,
      title: 'Lorem Ipsum',
      tag: 'Public Pension',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      callToActionText: 'Lorem Ipsum',
      callToActionHref: '/searchResult',
      btnId: 'btn1',
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      tag: 'Public Pension',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      callToActionText: 'Lorem Ipsum',
      callToActionHref: '/searchResult',
      btnId: 'btn2',
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      tag: 'Public Pension',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      callToActionText: 'Lorem Ipsum',
      callToActionHref: '/searchResult',
      btnId: 'btn3',
    },
    {
      id: 4,
      title: 'Lorem Ipsum',
      tag: 'Public Pension',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      callToActionText: 'Lorem Ipsum',
      callToActionHref: '/searchResult',
      btnId: 'btn4',
    },
  ])

  useEffect(() => {
    if (router.query.search) {
      setSearch(router.query.search)
    }
  }, [router.query.search])

  return (
    <Layout locale={props.locale} title="searchResult">
      <SearchHeader
        lang={props.locale}
        headerText={'Search Benefits'}
        inputText={search ?? ''}
        searchBarPlaceholder={t.searchPlaceholder}
        searchBarText={t.search}
        btnClearText={t.clearResults}
        btnClearLabel={t.clearResults}
        btnFilterText={t.filterResults}
        btnFilterLabel={t.filterResults}
        onSubmitHref="/searchResult"
      />
      {/*
        Remove the line under
      */}
      {process.env.NEXT_CONTENT_API}
      <h1 className="layout-container text-3xl">
        Search results page placeholder.
      </h1>
      <h2 className="layout-container text-2xl">
        Locale selected: {props.locale}.
      </h2>
      <h2 className="layout-container text-2xl">
        Current search: {search ? search : 'No search specified'}.
      </h2>
      <CardList cardList={benefitList} />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  let benefits = []
  let errorCode = false

  //
  // IF content enabled get the data from the api
  //

  if (process.env.NEXT_CONTENT_API) {
    const { apiData, error } = await getBenefitsAndServices(locale)
    errorCode = error
    if (apiData && !errorCode) {
      benefits = apiData.entities
    }
  } else {
    //
    // Else get the content from the local file
    //
    const { localData } = getLocalBenefits()

    benefits = localData
    errorCode = false
  }

  return {
    props: {
      benefits,
      errorCode,
      locale,
    },
  }
}
