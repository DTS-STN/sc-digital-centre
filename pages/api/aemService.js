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

  async getFragment(fragPath) {
    if (!fragPath?.trim?.()) return

    // return memoized fragPath data if it's stored
    if (this.store[fragPath]) {
      return { data: this.store[fragPath], error: null }
    }

    // otherwise, fetch from AEM
    const res = await fetch(
      `${this.baseUrl}${fragPath}?dates=${this.cacheBustString}`
    )
    const error = res.ok ? false : res.status
    const data = res.ok ? await res.json() : null

    // if there's no error, store for memoization
    if (!error) {
      this.store[fragPath] = data
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

  async getPage(pageId) {
    if (this.pages[pageId]) return this.pages[pageId]

    const { directory } = require('../../constants/pagesDirectory')
    if (!directory?.[pageId]?.fetchPath)
      throw new Error('Page not defined with a fetch path in pages directory.')
    const { elements, error } = await this.getElements(
      directory[pageId].fetchPath
    )

    const normalizedPage = {
      id: pageId,
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
      this.pages[pageId] = normalizedPage
    }

    return this.pages[pageId]
  }
}

module.exports = AEMService
