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
  const toLocale = locale === 'en' ? 'fr' : 'en'

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

  // Page metadata
  const metadata = {
    title: aemPage?.title?.[locale],
    toggleLangLink: aemPage.link[toLocale],
  }

  // Find Benefits and Services
  const findBenefitsAndServices = {
    searchLink: searchPage.link,
  }

  // Top Tasks
  let topTasksTitle = ''
  // Get miscellaneous components content
  if (miscellaneousRes.data) {
    miscellaneousRes.data.entities.forEach((item) => {
      // Extracting Top Task component content (Title and whatever else we add in AEM later on)
      if (item.properties.elements.scId.value === 'TOP-TASKS') {
        topTasksTitle = item.properties.elements.scLabelEn.value
      }
      // Add any if statements to capture other misc component contents
    })
  }

  let topTaskList = {}
  if (topTasksReturned.data?.entities) {
    topTaskList = topTasksReturned.data.entities.map((task) => {
      return {
        title: task.properties.elements.scTitleEn.title,
        link: task.properties.elements.scLinkURLEn.value,
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
    cards: mapBenefitCards(AEMBenefits),
  }

  // Featured
  const featured = {
    header: 'Featured: ' + eiBenefit.elements.scTitleEn?.value,
    body: eiBenefit.elements.scDescriptionEn?.value,
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
  const toLocale = locale === 'en' ? 'fr' : 'en'

  // AEM calls to run asynchronous
  const [aemSearchPage, AEMBenefits] = await Promise.all([
    aemService.getPage(SEARCH_PAGE),
    aemService.getBenefits(BENEFITS),
  ])

  const metadata = {
    title: aemSearchPage?.title?.[locale],
    toggleLangLink: aemSearchPage.link[toLocale],
    currentLink: aemSearchPage.link,
  }

  return { metadata, benefits: mapBenefitCards(AEMBenefits) }
}

// Maps AEM benfits object to react cards
function mapBenefitCards(AEMBenefits) {
  if (AEMBenefits.benefits) {
    return AEMBenefits.benefits.map((benefit) => {
      return {
        key: benefit.elements.scPageNameEn.value,
        title: benefit.elements.scTitleEn.value,
        tag: benefit.elements.scProgramEn?.value
          ? benefit.elements.scProgramEn?.value
          : null,
        text: benefit.elements.scDescriptionEn?.value
          ? benefit.elements.scDescriptionEn?.value
          : null,
        callToActionText: benefit.elements.scCallToActionEn.value,
        callToActionHref: `/benefits/${benefit.name}`.toLowerCase(),
        btnId: 'btn-' + benefit.elements.scPageNameEn.value,
      }
    })
  }
}
