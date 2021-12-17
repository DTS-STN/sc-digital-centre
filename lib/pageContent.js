import { HOME_PAGE, SEARCH_PAGE } from '../constants/aem'

export function getPageContent(page) {
  switch (page) {
    case HOME_PAGE:
      console.log('Called home page content')
      return { gotData: 'true' }
    case SEARCH_PAGE:
      console.log('Called search page content')
      break
    default:
      console.log('Error no page found')
  }
}
