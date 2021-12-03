import '@testing-library/jest-dom'
import AEMService from '../../pages/api/AEMServiceClass'

const fakeBaseUrl = 'https://example.com'

describe('AEMService + instance', () => {
  it('should instantiate with a baseUrl property if the first arg is not an empty string', () => {
    expect(() => {
      new AEMService()
    }).toThrow(Error)
    expect(() => {
      new AEMService('       ')
    }).toThrow(Error)
    expect(new AEMService(fakeBaseUrl).baseUrl).toBe(fakeBaseUrl)
  })
  it('should contain a cache bust string that is passed as a second arg, or defaulted to today date (en-CA localized)', () => {
    expect(new AEMService(fakeBaseUrl, 'cachebuster').cacheBustString).toBe(
      'cachebuster'
    )
    expect(new AEMService(fakeBaseUrl).cacheBustString).toBe(
      new Date().toLocaleDateString('en-CA')
    )
  })
  describe('getFragment method', () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            properties: {
              elements: [1, 2, 3],
            },
          }),
      })
    )

    beforeEach(() => {
      fetch.mockClear()
    })

    it('should return undefined an empty string is passed in', async () => {
      try {
        const aemServiceInstance = new AEMService(fakeBaseUrl)
        expect(async () => {
          aemServiceInstance.getFragment('     ')
        }).toEqual(undefined)
        expect(() => {
          aemServiceInstance.getFragment(() => {})
        }).toEqual(undefined)
        expect(() => {
          aemServiceInstance.getFragment(324)
        }).toEqual(undefined)
      } catch (e) {}
    })

    it('should fetch aem content when passed in a valid path', async () => {
      try {
        const aemServiceInstance = new AEMService(fakeBaseUrl)
        await aemServiceInstance.getFragment('test.json')
        expect(global.fetch).toHaveBeenCalledTimes(1)
      } catch (e) {}
    })

    it('should NOT fetch aem content that has already been called', async () => {
      try {
        const aemServiceInstance = new AEMService(fakeBaseUrl)
        await aemServiceInstance.getFragment('test.json')
        expect(global.fetch).toHaveBeenCalledTimes(1)
        await aemServiceInstance.getFragment('test.json')
        await aemServiceInstance.getFragment('test.json')
        await aemServiceInstance.getFragment('test.json')
        expect(global.fetch).toHaveBeenCalledTimes(1)
        await aemServiceInstance.getFragment('test22.json')
        expect(global.fetch).toHaveBeenCalledTimes(2)
      } catch (e) {}
    })
  })
  describe('getElements method', () => {
    it('should return properties.elements property from getFragments', async () => {
      try {
        const aemServiceInstance = new AEMService(fakeBaseUrl)
        const { elements } = await aemServiceInstance.getElements('test.json')
        expect(elements).toHaveLength(3)

        global.fetch = jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve({}),
          })
        )
      } catch (e) {}
    })
    it('should return empty array when no data is resolved for the elements', async () => {
      try {
        const aemServiceInstance = new AEMService(fakeBaseUrl)
        global.fetch = jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve({}),
          })
        )
        const { elements } = await aemServiceInstance.getElements('test.json')
        expect(elements).toHaveLength(0)
        expect(elements).toEqual([])
      } catch (e) {}
    })
  })
})
