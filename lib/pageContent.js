import {
  HOME_PAGE,
  SEARCH_PAGE,
  TOP_TASKS,
  BENEFITS,
  DICTIONARY,
} from '../constants/aem'
import aemService from './../pages/api/aemServiceInstance'

export async function getPageContent(page, locale) {
  switch (page) {
    case HOME_PAGE:
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
      return { benefitCards: await getBenefitCards(), topTasks }
    case SEARCH_PAGE:
      const { benefits } = await aemService.getBenefits(BENEFITS)
      let page = await aemService.getPage(SEARCH_PAGE)
      return { benefits: await getBenefitCards(), aemPage: page }
    default:
      console.log('Error no page found')
  }
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
