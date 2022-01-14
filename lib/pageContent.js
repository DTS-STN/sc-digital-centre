import {
  HOME_PAGE,
  SEARCH_PAGE,
  TOP_TASKS,
  BENEFITS,
  DICTIONARY,
  BENEFIT_EI,
} from '../constants/aem'
import aemService from './../pages/api/aemServiceInstance'

export async function getHomePageContent(locale) {
  // AEM calls to run asynchronous
  const [
    aemPage,
    searchPage,
    miscellaneousRes,
    topTasksReturned,
    eiBenefit,
    AEMBenefits,
  ] = await Promise.all([
    aemService.getPage(HOME_PAGE),
    aemService.getPage(SEARCH_PAGE),
    aemService.getFragment(DICTIONARY),
    aemService.getFragment(TOP_TASKS),
    aemService.getBenefit(BENEFIT_EI),
    aemService.getBenefits(BENEFITS),
  ])

  //the suffix to choose what language to use in each bilingual object field
  // e.g. choosing aemPage.scTitleEn or aemPage.scTitleFr
  const localeKey = locale === 'en' ? 'En' : 'Fr'

  // Page metadata
  const metadata = mapMetadata(localeKey, aemPage)

  // Find Benefits and Services
  const findBenefitsAndServices = {
    searchLink: `/${searchPage['scPageName' + localeKey]?.value}`,
  }

  // Top Tasks
  let topTasksTitle = ''
  // Get miscellaneous components content
  if (miscellaneousRes.data) {
    miscellaneousRes.data.entities.forEach((item) => {
      // Extracting Top Task component content (Title and whatever else we add in AEM later on)
      if (item.properties.elements.scId.value === 'TOP-TASKS') {
        topTasksTitle = item.properties.elements['scLabel' + localeKey].value
      }
      // Add any if statements to capture other misc component contents
    })
  }

  let topTaskList = {}
  if (topTasksReturned.data?.entities) {
    topTaskList = topTasksReturned.data.entities.map((task) => {
      return {
        title: task.properties.elements['scTitle' + localeKey].title,
        link: task.properties.elements['scLinkURL' + localeKey].value,
      }
    })
  }

  const topTasks = {
    header: topTasksTitle,
    topTasksList: topTaskList,
  }

  // Most Requested Pages
  const mostRequestedPages = {
    header: "todo: get 'Most Requested Page' header from AEM",
    cards: mapBenefitCards(localeKey, AEMBenefits),
  }

  // Featured
  const featured = {
    header: eiBenefit.elements['scTitle' + localeKey]?.value,
    body: eiBenefit.elements['scDescription' + localeKey]?.value,
    imgSrc:
      'https://www.canada.ca/content/dam/decd-endc/images/autumn_leaves_woman_hands.png',
    imgAlt: '',
  }

  return {
    metadata,
    findBenefitsAndServices,
    topTasks,
    mostRequestedPages,
    featured,
  }
}

export async function getSearchPageContent(locale) {
  // AEM calls to run asynchronous
  const [aemSearchPage, AEMBenefits] = await Promise.all([
    aemService.getPage(SEARCH_PAGE),
    aemService.getBenefits(BENEFITS),
  ])

  const localeKey = locale === 'en' ? 'En' : 'Fr'
  const metadata = mapMetadata(localeKey, aemSearchPage)

  return { metadata, benefits: mapBenefitCards(localeKey, AEMBenefits) }
}

export async function getIndexPageContent() {
  const metadata = {
    title: 'Digital Centre (en) + Digital Centre (fr)',
    keywords: 'en + fr keywords',
    description: 'en + fr description',
  }
  return { metadata }
}

export async function getBenefitsPageContent(locale, benefitId) {
  const benefit = await aemService.getBenefit(`benefits/${benefitId}.json`)

  //TODO: Add benefit page metadata
  const metadata = {
    toggleLangLink:
      locale === 'en' ? `/prestations/${benefitId}` : `/benefits/${benefitId}`,
  }

  return { metadata, benefit }
}

function mapMetadata(localeKey, aemPage) {
  return {
    name: aemPage['scPageName' + localeKey]?.value,
    title: aemPage['scTitle' + localeKey]?.value,
    toggleLangLink:
      localeKey === 'En'
        ? `/fr/${aemPage.scPageNameFr?.value}`
        : `/${aemPage.scPageNameEn?.value}`,
    currentLink: aemPage['scPageName' + localeKey]?.value,
    keywords: aemPage['scKeywords' + localeKey]?.value || '',
    owner: aemPage['scOwner' + localeKey]?.value || '',
    description: aemPage['scDescription' + localeKey]?.value || '',
    dcTerms: aemPage.scSubject?.value,
    audience: aemPage.scAudience?.value || null,
    type: aemPage.scContentType?.value,
    img: {
      src: aemPage['scImage' + localeKey]?.value || '',
      title: aemPage['scTitle' + localeKey]?.value,
      alt: aemPage['scImageAltText' + localeKey]?.value || '',
      description: aemPage['scDescription' + localeKey]?.value || '',
    },
  }
}

// Maps AEM benfits object to react cards
function mapBenefitCards(localeKey, AEMBenefits) {
  if (AEMBenefits.benefits) {
    return AEMBenefits.benefits.map((benefit) => {
      const elems = benefit.elements
      return {
        key: benefit.elements.scPageNameEn.value,
        title: elems['scTitle' + localeKey].value,
        tag: elems['scProgram' + localeKey]?.value || null,
        text: elems['scDescription' + localeKey]?.value || null,
        callToActionText: elems['scCallToAction' + localeKey].value,
        callToActionHref: localeKey === 'En' ? `/benefits/${benefit.name}`.toLowerCase() : `prestations/${benefit.name}`.toLowerCase(),
        btnId: 'btn-' + elems.scPageNameEn.value,
      }
    })
  }
}
