import Layout from '../components/organisms/Layout'
import { getBenefitsAndServices, getLocalBenefits } from './api/getData'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import en from '../locales/en'
import fr from '../locales/fr'

export default function SearchResult(props) {
  const t = props.locale === 'en' ? en : fr
  const router = useRouter()

  const [search, setSearch] = useState('')

  useEffect(() => {
    if (router.query.search) {
      setSearch(router.query.search)
    }
  }, [router.query.search])

  return (
    <Layout locale={props.locale} title="searchResult">
      <h1 className="layout-container text-3xl">
        Search results page placeholder.
      </h1>
      <h2 className="layout-container text-2xl">
        Locale selected: {props.locale}.
      </h2>
      <h2 className="layout-container text-2xl">
        Current search: {search ? search : 'No search specified'}.
      </h2>
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
