import Layout from '../components/organisms/Layout'
import ModalElement from '../components/molecules/ModalElement'
import SearchFilterForm from '../components/molecules/SearchFilterForm'
import SearchHeader from '../components/molecules/SearchHeader'
import aemService from './api/aemServiceInstance'
import { getLocalBenefits } from './api/getData'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { CardList } from '../components/molecules/CardList'

import en from '../locales/en'
import fr from '../locales/fr'
import { HOME_PAGE, SEARCH_PAGE, BENEFITS, BENEFIT_EI } from '../constants/aem'

export default function SearchResult({
  locale,
  searchPageHref,
  benefits,
  aemPage,
}) {
  const t = locale === 'en' ? en : fr
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [modalShow, setModalShow] = useState(false)
  const [benefitList, setbenefitList] = useState(benefits)

  //for the filter form
  //maybe put these into state?
  const ageRangeOptions = [
    { key: 0, name: 'Under 18 years old' },
    { key: 1, name: '19-24 years old' },
    { key: 2, name: '25-34 years old' },
    { key: 3, name: '35-44 years old' },
    { key: 4, name: '45-54 years old' },
    { key: 5, name: '55-64 years old' },
    { key: 6, name: '65 years or older' },
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
    if (router.query.q) {
      setSearch(router.query.q)
    }
  }, [router.query.q])

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
      locale={locale}
      title="searchResult"
      phase={t.phaseBannerTag}
      bannerText={t.phaseBannerText}
      aemPage={aemPage}
      searchPageHref={searchPageHref}
    >
      <SearchHeader
        lang={locale}
        headerText={'Search Benefits'}
        inputText={search ?? ''}
        searchBarPlaceholder={t.searchPlaceholder}
        searchBarText={t.search}
        btnClearText={t.clearResults}
        btnClearLabel={t.clearResults}
        btnFilterText={t.filterResults}
        btnFilterLabel={t.filterResults}
        setModalShow={setModalShow}
        onSubmitHref={searchPageHref}
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
  const { benefits } = await aemService.getBenefits(BENEFITS)
  const aemPage = await aemService.getPage(SEARCH_PAGE)
  const searchPage = await aemService.getPage(SEARCH_PAGE)
  const searchPageHref = searchPage.link[locale]

  return {
    props: {
      benefits,
      locale,
      searchPageHref,
      aemPage,
    },
  }
}
