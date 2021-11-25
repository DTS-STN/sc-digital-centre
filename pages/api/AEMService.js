const {
  HOME_PAGE,
  SEARCH_PAGE,
  BENEFITS,
  BENEFIT_EI,
  TOP_TASKS,
  DICTIONARY,
} = require('../../constants/aem')

const DIRECTORY = {
  PAGES: {
    [HOME_PAGE]: {
      fetchPath: 'home.json',
    },
    [SEARCH_PAGE]: {
      fetchPath: 'search.json',
    },
  },
  FRAGMENTS: {
    [BENEFITS]: {
      fetchPath: 'benefits.json',
    },
    [BENEFIT_EI]: {
      fetchPath: 'benefits/ei.json',
    },
    [TOP_TASKS]: {
      fetchPath: 'components/top-tasks.json',
    },
    [DICTIONARY]: {
      fetchPath: 'components/dictionary.json',
    },
  },
}

class AEMService {
  constructor(baseUrl, cacheBust) {
    if (!baseUrl?.trim?.()) throw new Error(`Provide a base URL for AEM.`)

    this.cacheBustString = !!cacheBust?.trim?.()
      ? cacheBust
      : new Date().toLocaleDateString('en-CA')
    this.baseUrl = baseUrl

    // maintain all fragments by their path
    this.store = {}
    this.pages = {}
  }

  async getFragment(fragId) {
    if (!fragId?.trim?.()) return

    // return memoized fragId data if it's stored
    if (this.store[fragId]) {
      return { data: this.store[fragId], error: null }
    }

    if (!DIRECTORY.FRAGMENTS?.[fragId]?.fetchPath)
      throw new Error(
        'Fragment not defined with a fetch path in pages directory.'
      )

    // otherwise, fetch from AEM
    const res = await fetch(
      `${this.baseUrl}${fragId}?dates=${this.cacheBustString}`
    )
    const error = res.ok ? false : res.status
    const data = res.ok ? await res.json() : null

    // if there's no error, store for memoization
    if (!error) {
      this.store[fragId] = data
    }

    return { data, error }
  }

  async getElements(elementsPath) {
    const { data, error } = await this.getFragment(elementsPath)
    return {
      elements: data?.properties?.elements || [],
      error: error,
    }
  }

  async getPage(pathId) {
    if (this.pages[pathId]) return this.pages[pathId]

    if (!DIRECTORY.PAGES?.[pathId]?.fetchPath)
      throw new Error('Page not defined with a fetch path in pages directory.')
    const { elements, error } = await this.getElements(
      DIRECTORY.PAGES[pathId].fetchPath
    )

    const normalizedPage = {
      id: pathId,
      name: {
        en: elements?.scPageNameEn?.value,
        fr: elements?.scPageNameFr?.value,
      },
      link: {
        en: `/${elements?.scPageNameEn?.value}`,
        fr: `/fr/${elements?.scPageNameFr?.value}`,
      },
      title: {
        en: elements?.scTitleEn?.value,
        fr: elements?.scTitleFr?.value,
      },
    }

    if (!error) {
      this.pages[pathId] = normalizedPage
    }

    return this.pages[pathId]
  }

  //
  // gets the data for all benefits, start by getting the urls for each, then get the benefit data using the url
  //
  async getBenefits(fragId) {
    const { data, error } = await this.getFragment(
      DIRECTORY.FRAGMENTS[fragId].fetchPath
    )
    let benefitsUrls = []
    let benefitData = []
    let errorCode = error

    if (!error) {
      benefitsUrls = data.entities.map((benefit) => {
        return {
          benefitName: benefit.properties.name,
          benefitUrl: benefit.links[0].href,
        }
      })

      benefitData = await Promise.all(
        benefitsUrls.map(async (url) => {
          let { elements, name, description, title, error } =
            await this.getBenefit(
              url.benefitUrl
                .replace(this.baseUrl, '')
                .replace(`?dates=${this.cacheBustString}`, '')
            )
          errorCode = error === null ? false : false
          return {
            benefit: { elements, name, description, title } || [],
          }
        })
      )
    }

    // errorCode is the value from the first fetch or from the last getBenefit (getBenefit can return null)
    return {
      benefits: benefitData,
      error: errorCode,
    }
  }

  //
  // gets the data for a single benefit
  //
  async getBenefit(benefitId) {
    const { data, error } = await this.getFragment(benefitId)
    return {
      elements: data?.entities[0]?.properties?.elements || [],
      name: data?.entities[0]?.properties?.name || '',
      description: data?.entities[0]?.properties?.description || '',
      title: data?.entities[0]?.properties?.title || '',
      error: error,
    }
  }
}

module.exports = AEMService
