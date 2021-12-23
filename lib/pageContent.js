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

  // Page metadata
  const metadata = mapMetadata(locale, aemPage)

  // Find Benefits and Services
  const findBenefitsAndServices = {
    searchLink:
      locale === 'en'
        ? `/${searchPage?.scPageNameEn?.value}`
        : `/fr/${searchPage?.scPageNameFr?.value}`,
  }

  // Top Tasks
  let topTasksTitle = ''
  // Get miscellaneous components content
  if (miscellaneousRes.data) {
    miscellaneousRes.data.entities.forEach((item) => {
      // Extracting Top Task component content (Title and whatever else we add in AEM later on)
      if (item.properties.elements.scId.value === 'TOP-TASKS') {
        topTasksTitle =
          locale === 'en'
            ? item.properties.elements.scLabelEn.value
            : item.properties.elements.scLabelFr.value
      }
      // Add any if statements to capture other misc component contents
    })
  }

  let topTaskList = {}
  if (topTasksReturned.data?.entities) {
    topTaskList = topTasksReturned.data.entities.map((task) => {
      return {
        title:
          locale === 'en'
            ? task.properties.elements.scTitleEn.title
            : task.properties.elements.scTitleFr.title,
        link:
          locale === 'en'
            ? task.properties.elements.scLinkURLEn.value
            : task.properties.elements.scLinkURLFr.value,
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
    cards: mapBenefitCards(locale, AEMBenefits),
  }

  // Featured
  const featured = {
    header:
      locale === 'en'
        ? 'Featured: ' + eiBenefit.elements.scTitleEn?.value
        : '(FR) Featured: ' + eiBenefit.elements.scTitleFr?.value,
    body:
      locale === 'en'
        ? eiBenefit.elements.scDescriptionEn?.value
        : eiBenefit.elements.scDescriptionFr?.value,
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

  const metadata = mapMetadata(locale, aemSearchPage)

  return { metadata, benefits: mapBenefitCards(locale, AEMBenefits) }
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
    toggleLangLink: '/fr/benefits/oas',
  }

  return { metadata, benefit }
}

function mapMetadata(locale, aemPage) {
  const toLocale = locale === 'en' ? 'fr' : 'en'
  return {
    name:
      locale === 'en'
        ? aemPage.scPageNameEn?.value
        : aemPage.scPageNameFr?.value,
    title:
      locale === 'en' ? aemPage.scTitleEn?.value : aemPage.scTitleFr?.value,
    toggleLangLink:
      toLocale === 'fr'
        ? `/fr/${aemPage.scPageNameFr?.value}`
        : `/${aemPage.scPageNameEn?.value}`,
    currentLink:
      locale === 'en'
        ? aemPage.scPageNameEn?.value
        : aemPage.scPageNameFr?.value,
    keywords:
      locale === 'en'
        ? aemPage.scKeywordsEn?.value || ''
        : aemPage.scKeywordsFr?.value || '',
    owner:
      locale === 'en'
        ? aemPage.scOwnerEn?.value || ''
        : aemPage.scOwnerFr?.value || '',
    description:
      locale === 'en'
        ? aemPage.scDescriptionEn?.value || ''
        : aemPage.scDescriptionFr?.value || '',
    dcTerms: aemPage.scSubject?.value,
    audience: aemPage.scAudience?.value || null,
    type: aemPage.scContentType?.value,
    img: {
      src:
        locale === 'en'
          ? aemPage.scImageEn?.value || ''
          : aemPage.scImageFr?.value || '',
      title:
        locale === 'en' ? aemPage.scTitleEn?.value : aemPage.scTitleFr?.value,
      alt:
        locale === 'en'
          ? aemPage.scImageAltTextEn?.value || ''
          : aemPage.scImageAltTextFr?.value || '',
      description:
        locale === 'en'
          ? aemPage.scDescriptionEn?.value || ''
          : aemPage.scDescriptionFr?.value || '',
    },
  }
}

// Maps AEM benfits object to react cards
function mapBenefitCards(locale, AEMBenefits) {
  if (AEMBenefits.benefits) {
    return AEMBenefits.benefits.map((benefit) => {
      return {
        key: benefit.elements.scPageNameEn.value,
        title:
          locale === 'en'
            ? benefit.elements.scTitleEn.value
            : benefit.elements.scTitleFr.value,
        tag: (
          locale === 'en'
            ? benefit.elements.scProgramEn?.value
            : benefit.elements.scProgramFr?.value
        )
          ? locale === 'en'
            ? benefit.elements.scProgramEn?.value
            : benefit.elements.scProgramFr?.value
          : null,
        text: (
          locale === 'en'
            ? benefit.elements.scDescriptionEn?.value
            : benefit.elements.scDescriptionFr?.value
        )
          ? locale === 'en'
            ? benefit.elements.scDescriptionEn?.value
            : benefit.elements.scDescriptionFr?.value
          : null,
        callToActionText:
          locale === 'en'
            ? benefit.elements.scCallToActionEn?.value
            : benefit.elements.scCallToActionFr.value,
        callToActionHref: `/benefits/${benefit.name}`.toLowerCase(),
        btnId: 'btn-' + benefit.elements.scPageNameEn.value,
      }
    })
  }
}
