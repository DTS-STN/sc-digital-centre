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

      return { page: page, locale: locale, topTasks }
    case SEARCH_PAGE:
      const { benefits } = await aemService.getBenefits(BENEFITS)
      const page = await aemService.getPage(SEARCH_PAGE)
      return { benefits: benefits, aemPage: page }
    default:
      console.log('Error no page found')
  }
}
