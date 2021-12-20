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

  const aemPage = await aemService.getPage(HOME_PAGE)
  const metadata = {
    title: aemPage?.title?.[locale],
    toggleLangLink: aemPage.link[toLocale],
  }
  let topTasksTitle = ''
  // Get miscellaneous components content
  let miscellaneousRes = await aemService.getFragment(DICTIONARY)
  if (miscellaneousRes.data) {
    miscellaneousRes.data.entities.forEach((item) => {
      // Extracting Top Task component content (Title and whatever else we add in AEM later on)
      if (item.properties.elements.scId.value === 'TOP-TASKS') {
        topTasksTitle = item.properties.elements.scLabelEn.value
      }
      // Add any if statements to capture other misc component contents
    })
  }

  let topTasksReturned = await aemService.getFragment(TOP_TASKS)

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
  const mostRequestedPages = {
    header: "todo: get 'Most Requested Page' header from AEM",
    cards: await getBenefitCards(),
  }
  const eiBenefit = (await aemService.getBenefit(BENEFIT_EI)).elements
  const featured = {
    header: 'Featured: ' + eiBenefit.scTitleEn?.value,
    body: eiBenefit.scDescriptionEn?.value,
    imgSrc:
      'https://www.canada.ca/content/dam/decd-endc/images/autumn_leaves_woman_hands.png',
    imgAlt: '',
  }
  return { metadata, mostRequestedPages, topTasks, featured }
}

export async function getSearchPageContent(locale) {
  const { benefits } = await aemService.getBenefits(BENEFITS)
  const aemSearchPage = await aemService.getPage(SEARCH_PAGE)
  const toLocale = locale === 'en' ? 'fr' : 'en'
  const metadata = {
    title: aemSearchPage?.title?.[locale],
    toggleLangLink: aemSearchPage.link[toLocale],
    currentLink: aemSearchPage.link,
  }
  console.log(metadata)
  return { benefits: await getBenefitCards(), metadata }
}

//This can use some rework to be getBenefits -> getBenefitCards
async function getBenefitCards() {
  let AEMbenefits = await aemService.getBenefits(BENEFITS)
  let benefitCards = {}
  if (AEMbenefits.benefits) {
    benefitCards = AEMbenefits.benefits.map((benefit) => {
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
  return benefitCards
}
