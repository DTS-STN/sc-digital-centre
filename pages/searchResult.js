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

  //for the filter form
  //maybe put these into state?
  const ageRangeOptions = [
    { key: 0, name: 'Under 18 years old' },
    { key: 1, name: '18-100 bajillion' },
  ]
  const incomeOptions = [
    { key: 0, name: 'Between $0 - $23999' },
    { key: 1, name: 'Between $23999 - $42999' },
    { key: 2, name: 'Between $42999 - $72999' },
  ]
  const eligibilityOptions = [
    { key: 0, id: 'living-with-disability', name: 'living with a disability' },
    {
      key: 1,
      id: 'caregiver-to-disability',
      name: 'caregiver to someone with a disability',
    },
    { key: 2, id: 'widowed', name: 'widowed' },
  ]

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
    <Layout
      locale={props.locale}
      title="searchResult"
      phase={t.phaseBannerTag}
      bannerText={t.phaseBannerText}
    >
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
      <ModalElement
        modalShow={modalShow}
        setModalShow={setModalShow}
        bgClasses="md:hidden" // modal should always be hidden on desktop view
      >
        <SearchFilterForm
          ageRangeOptions={ageRangeOptions}
          incomeOptions={incomeOptions}
          eligibilityOptions={eligibilityOptions}
          filterHeader={t.filters}
          cancelText={t.cancel}
          submitText={t.submit}
          cancelHandler={filterCancelHandler}
          submitHandler={filterSubmitHandler}
          ageRangeLabel={t.ageRange}
          incomeLabel={t.annualIncome}
          eligibilityLabel={t.eligibility}
        />
      </ModalElement>
      <div className="flex layout-container h-auto mt-4 justify-between children:flex">
        <div className="h-auto w-0 md:w-1/4">
          <SearchFilterForm
            formClasses=" hidden md:inline-block"
            ageRangeOptions={ageRangeOptions}
            incomeOptions={incomeOptions}
            eligibilityOptions={eligibilityOptions}
            filterHeader={t.filters}
            cancelText={t.cancel}
            submitText={t.submit}
            cancelHandler={filterCancelHandler}
            submitHandler={filterSubmitHandler}
            ageRangeLabel={t.ageRange}
            incomeLabel={t.annualIncome}
            eligibilityLabel={t.eligibility}
          />
        </div>
        <div className="w-full md:w-2/3 h-auto float-right">
          <CardList cardList={benefitList} />
        </div>
      </div>
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
