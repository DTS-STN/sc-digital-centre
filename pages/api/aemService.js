export class AEMService {
  constructor(baseUrl, cacheBust) {
    if (!baseUrl?.trim?.()) throw new Error(`Provide a base URL for AEM.`)

    this.cacheBustString = !!cacheBust?.trim?.()
      ? cacheBust
      : new Date().toLocaleDateString('en-CA')
    this.baseUrl = baseUrl

    // maintain all fragments by their path
    this.store = new Map()
  }

  async getFragment(fragPath) {
    if (!fragPath?.trim?.()) throw new Error(`Provide non-empty fragment path.`)

    // return memoized fragPath data if it's stored
    if (this.store.has(fragPath)) {
      return { data: this.store.get(fragPath), error: null }
    }

    // otherwise, fetch from AEM
    const res = await fetch(
      `${this.baseUrl}${fragPath}?dates=${this.cacheBustString}`
    )
    const error = res.ok ? false : res.status
    const data = res.ok ? await res.json() : null

    // if there's no error, store for memoization
    if (!error) {
      this.store.set(fragPath, data)
    }

    return { data, error }
  }

  async getElements(elementsPath) {
    const { data, error } = await this.getFragment(elementsPath).catch((e) => {
      console.error(e.message)
    })
    return {
      elements: data?.properties?.elements || [],
      error: error,
    }
  }
}

const aemServiceInstance = new AEMService(
  process.env.NEXT_CONTENT_API,
  process.env.NEXT_PUBLIC_BUILD_DATE
)

export default aemServiceInstance
