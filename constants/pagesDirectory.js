const HOME_PAGE = 'HOME_PAGE'
const SEARCH_PAGE = 'SEARCH_PAGE'

const directory = {
  [HOME_PAGE]: {
    fetchPath: 'alpha/home.json',
  },
  [SEARCH_PAGE]: {
    fetchPath: 'alpha/search.json',
  },
}

module.exports = {
  HOME_PAGE,
  SEARCH_PAGE,
  directory,
}
