const {
  HOME_PAGE,
  SEARCH_PAGE,
  BENEFITS,
  BENEFIT_EI,
  TOP_TASKS,
  DICTIONARY,
} = require('../../constants/aem')

const DIRECTORY = {
  [HOME_PAGE]: {
    fetchPath: 'home.json',
  },
  [SEARCH_PAGE]: {
    fetchPath: 'search.json',
  },
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
}

class AEMService {
  constructor(baseUrl, cacheBust) {
    if (!baseUrl?.trim?.()) throw new Error(`Provide a base URL for AEM.`)

    this.cacheBustString = !!cacheBust?.trim?.()
      ? cacheBust
      : new Date().toLocaleDateString('en-CA')
    this.baseUrl = baseUrl

    // maintain all fragments by their ids
    this.store = {}
  }

  async getFragment(fragId) {
    if (!fragId?.trim?.()) return

    // return memoized fragId data if it's stored
    if (this.store[fragId]) {
      return { data: this.store[fragId], error: null }
    }

    let path

    if (DIRECTORY?.[fragId]?.fetchPath) {
      path = DIRECTORY[fragId].fetchPath
    } else if (fragId.endsWith('.json')) {
      path = fragId
    } else {
      throw new Error(`Pass in either a directory constant or a json path`)
    }

    // otherwise, fetch from AEM
    const res = await fetch(
      `${this.baseUrl}${path}?dates=${this.cacheBustString}`
    )

    const error = res.ok ? false : res.status
    const data = res.ok ? await res.json() : null

    // if there's no error, store for memoization
    if (!error) {
      this.store[fragId] = data
    }

    return { data, error }
  }

  async getElements(fragId) {
    const { data, error } = await this.getFragment(fragId)
    return {
      elements: data?.properties?.elements || [],
      error: error,
    }
  }

  async getPage(pageId) {
    const { elements } = await this.getElements(pageId)

    return this.extractPageDetails({ elements })
  }

  //
  // gets the data for all benefits, start by getting the urls for each, then get the benefit data using the url
  //
  async getBenefits(fragId) {
    const { data, error } = await this.getFragment(fragId)
    let benefitsUrls = []
    let benefitData = []
    let errorCode = error

    if (!error) {
      benefitsUrls = data.entities.map((benefit) => {
        return {
          name: benefit.properties.name,
          href: benefit.links[0].href,
        }
      })

      benefitData = await Promise.all(
        benefitsUrls.map(async (benefit) => {
          const { data, error } = await this.getFragment(
            benefit.href
              .replace(this.baseUrl, '')
              .replace(`?dates=${this.cacheBustString}`, '')
          )
          return {
            elements: data?.entities[0]?.properties?.elements || [],
            name: data?.entities[0]?.properties?.name || '',
            description: data?.entities[0]?.properties?.description || '',
            title: data?.entities[0]?.properties?.title || '',
            error: error,
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

  extractPageDetails(data) {
    const { elements } = data
    return {
      name: {
        en: elements?.scPageNameEn?.value || '',
        fr: elements?.scPageNameFr?.value || '',
      },
      link: {
        en: `/${elements?.scPageNameEn?.value}`,
        fr: `/fr/${elements?.scPageNameFr?.value}`,
      },
      title: {
        en: elements?.scTitleEn?.value || '',
        fr: elements?.scTitleFr?.value || '',
      },
      longDescription: {
        en: elements?.scLongDescriptionEn?.value || '',
        fr: elements?.scLongDescriptionFr?.value || '',
      },
      meta: {
        keywords: {
          en: elements?.scKeywordsEn?.value || '',
          fr: elements?.scKeywordsFr?.value || '',
        },
        owner: {
          en: elements?.scOwnerEn?.value || '',
          fr: elements?.scOwnerFr?.value || '',
        },
        description: {
          en: elements?.scDescriptionEn?.value || '',
          fr: elements?.scDescriptionFr?.value || '',
        },
        dcTerms: elements?.scSubject?.value || [],
        audience: elements?.scAudience?.value || '',
        type: elements?.scContentType?.value || '',
        img: {
          en: {
            src: elements?.scImageEn?.value || '',
            title: elements?.scTitleEn?.value || '',
            alt: elements?.scImageAltTextEn?.value || '',
            description: elements?.scDescriptionEn?.value || '',
          },
          fr: {
            src: elements?.scImageFr?.value || '',
            title: elements?.scTitleFr?.value || '',
            alt: elements?.scImageAltTextFr?.value || '',
            description: elements?.scDescriptionFr?.value || '',
          },
        },
      },
    }
  }
}

module.exports = AEMService
