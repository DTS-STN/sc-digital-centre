import Layout from '../components/organisms/Layout'
import ModalElement from '../components/molecules/ModalElement'
import SearchFilterForm from '../components/molecules/SearchFilterForm'
import SearchHeader from '../components/molecules/SearchHeader'

import { getAEMFragments, getLocalBenefits } from './api/getData'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { CardList } from '../components/molecules/CardList'

import en from '../locales/en'
import fr from '../locales/fr'

export default function SearchResult(props) {
  const t = props.locale === 'en' ? en : fr
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [modalShow, setModalShow] = useState(false)
  const [benefitList, setbenefitList] = useState(props.benefits)

  useEffect(() => {
    if (router.query.search) {
      setSearch(router.query.search)
    }
  }, [router.query.search])

  //handle submit event from filter form here
  function filterSubmitHandler(event) {
    event.preventDefault()
    setModalShow(false) //set the modal to be hidden, doesnt change anything on desktop form
  }

  function filterCancelHandler(event) {
    event.preventDefault()
    setModalShow(false)
  }

  return (
    <Layout locale={props.locale} title="searchResult">
      <ModalElement
        modalShow={modalShow}
        setModalShow={setModalShow}
        bgClasses="md:hidden" // modal should always be hidden on desktop view
      >
        <SearchFilterForm
          filterHeader={t.filters}
          cancelText={t.cancel}
          submitText={t.submit}
          cancelHandler={filterCancelHandler}
          submitHandler={filterSubmitHandler}
        />
      </ModalElement>
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
        setModalShow={setModalShow}
        onSubmitHref="/searchResult"
      />
      <div className="flex layout-container h-auto mt-4 justify-between children:flex">
        <div className="h-auto w-0 md:w-1/4">
          <SearchFilterForm
            formClasses=" hidden md:inline-block"
            filterHeader={t.filters}
            cancelText={t.cancel}
            submitText={t.submit}
            cancelHandler={filterCancelHandler}
            submitHandler={filterSubmitHandler}
          />
        </div>
        <div className="w-full md:w-2/3 h-auto float-right">
          <CardList cardList={benefitList} />
        </div>
      </div>

      <h2 className="layout-container text-3xl">
        Search results page placeholder.
      </h2>
      <h3 className="layout-container text-2xl">
        Locale selected: {props.locale}.
      </h3>
      <h3 className="layout-container text-2xl">
        Current search: {search ? search : 'No search specified'}.
      </h3>
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
    let AEMbenefits = await getAEMFragments('benefits.json')
    errorCode = AEMbenefits.error
    if (AEMbenefits.apiData && !errorCode) {
      benefits = AEMbenefits.apiData.entities
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
