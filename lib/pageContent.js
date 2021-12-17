import { HOME_PAGE, SEARCH_PAGE, BENEFITS } from '../constants/aem'
import aemService from '../pages/api/aemServiceInstance'

export async function getPageContent(page) {
  switch (page) {
    case HOME_PAGE:
      console.log('Called home page content')
      return { gotData: 'true' }
    case SEARCH_PAGE:
      const { benefits } = await aemService.getBenefits(BENEFITS)
      const page = await aemService.getPage(SEARCH_PAGE)
      return { benefits: benefits, aemPage: page }
    default:
      console.log('Error no page found')
  }
}
