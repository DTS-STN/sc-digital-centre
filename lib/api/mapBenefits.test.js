import {
  MapCPPCard,
  MapEICard,
  MapOASCard,
  MapGISCard,
  MapSEBCard,
} from './mapBenefits'
import EIMockData from '../../mockdata/userDefault/ei.json'
import CPPMockData from '../../mockdata/userDefault/cpp.json'
import CPPDMockData from '../../mockdata/userDefault/cppd.json'
import OASMockData from '../../mockdata/userDefault/oas.json'
import GISMockData from '../../mockdata/userDefault/gis.json'
import SEBMockData from '../../mockdata/userDefault/seb.json'
import { StatusCodes } from '../../constants/StatusCodes'
import { SummaryTypes } from '../../constants/SummaryTypes'

const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
const timezone = 'T12:00:00.000Z'

describe('Maps EI', () => {
  it('Application Received status - Without estimated decision', () => {
    const mappedData = MapEICard(EIMockData[0])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(2)
  })

  it('Application Received status - With estimated decision', () => {
    EIMockData[0].publishDate = new Date().toLocaleDateString('en-CA', options)
    const mappedData = MapEICard(EIMockData[0])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(3)
  })

  it('In Payment status', () => {
    const mappedData = MapEICard(EIMockData[1])
    expect(mappedData.statusCode).toBe(StatusCodes.inPayment)
    expect(mappedData.summaries).toHaveLength(3)
  })

  it('Benefit Update status', () => {
    const mappedData = MapEICard(EIMockData[2])
    expect(mappedData.statusCode).toBe(StatusCodes.benefitUpdate)
    expect(mappedData.summaries).toHaveLength(3)
  })

  it('Exhausted status', () => {
    const mappedData = MapEICard(EIMockData[3])
    expect(mappedData.statusCode).toBe(StatusCodes.exhausted)
    expect(mappedData.summaries).toHaveLength(2)
  })

  it('Inactive status', () => {
    const mappedData = MapEICard(EIMockData[4])
    expect(mappedData.statusCode).toBe(StatusCodes.inactive)
    expect(mappedData.summaries).toBeFalsy()
  })

  it('Calculates estimatedDecisionDate', () => {
    const dateTT = '2060-04-24'
    const dateTR = new Date('2060-05-22' + timezone).toDateString() //plus 28 days
    const mappedData = MapEICard({
      enmBenefitType: 1,
      claimStatusCode: 3435,
      publishDate: dateTT,
    })
    const summaryUT = mappedData.summaries[2]
    expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
    expect(new Date(summaryUT.value).toDateString()).toBe(dateTR)
  })
})

describe('CPP Mappings', () => {
  it('Maps Application Received status - Without estimated decision', () => {
    const mappedData = MapCPPCard(CPPMockData[0])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(2)
  })

  it('Maps Application Received status - With estimated decision', () => {
    CPPMockData[0].lastStatusDate = new Date().toLocaleDateString(
      'en-CA',
      options
    )
    const mappedData = MapCPPCard(CPPMockData[0])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(3)
  })

  it('Maps Decision Sent status', () => {
    const mappedData = MapCPPCard(CPPMockData[1])
    expect(mappedData.statusCode).toBe(StatusCodes.decisionSent)
    expect(mappedData.summaries).toHaveLength(2)
  })

  it('Maps In Payment status', () => {
    const mappedData = MapCPPCard(CPPMockData[2])
    expect(mappedData.statusCode).toBe(StatusCodes.inPayment)
    expect(mappedData.summaries).toHaveLength(4)
  })

  it('Maps Payment Hold status', () => {
    const mappedData = MapCPPCard(CPPMockData[3])
    expect(mappedData.statusCode).toBe(StatusCodes.paymentHold)
    expect(mappedData.summaries).toHaveLength(6)
  })

  it('Maps Inactive status', () => {
    const mappedData = MapCPPCard(CPPMockData[4])
    expect(mappedData.statusCode).toBe(StatusCodes.inactive)
    expect(mappedData.summaries).toBeFalsy()
  })

  it('Calculates next payment for monthly', () => {
    const dateTT = '2023-04-24'
    const dateTR = new Date('2023-05-24' + timezone).toDateString() //plus 1 month
    const mappedData = MapCPPCard({
      programCode: 32294,
      benefitType: 'Beneficial',
      benefitStatus: 'Active',
      lastPaymentDate: dateTT,
      paymentProcessType: 'Monthly',
    })
    const summaryUT = mappedData.summaries[2]
    expect(summaryUT.type).toBe(SummaryTypes.NextPayment)
    expect(new Date(summaryUT.value).toDateString()).toBe(dateTR)
  })

  it('Calculates lastStatusDate corectly', () => {
    const dateTT = '2060-04-04'
    const dateTR = new Date('2060-04-18' + timezone).toDateString() //plus 14 days for cpp
    const mappedData = MapCPPCard({
      programCode: 32294,
      benefitType: 'Beneficial',
      benefitStatus: 'Received',
      lastStatusDate: dateTT,
    })
    const summaryUT = mappedData.summaries[2]
    expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
    expect(new Date(summaryUT.value).toDateString()).toBe(dateTR)
  })
})

describe('CPPD Mappings', () => {
  it('Maps Application Received status', () => {
    const mappedData = MapCPPCard(CPPDMockData[0])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(3)
  })

  it('Maps Decision Sent status', () => {
    const mappedData = MapCPPCard(CPPDMockData[1])
    expect(mappedData.statusCode).toBe(StatusCodes.decisionSent)
    expect(mappedData.summaries).toHaveLength(2)
  })

  it('Maps In Payment status', () => {
    const mappedData = MapCPPCard(CPPDMockData[2])
    expect(mappedData.statusCode).toBe(StatusCodes.inPayment)
    expect(mappedData.summaries).toHaveLength(4)
  })

  it('Maps Payment Hold status', () => {
    const mappedData = MapCPPCard(CPPDMockData[3])
    expect(mappedData.statusCode).toBe(StatusCodes.paymentHold)
    expect(mappedData.summaries).toHaveLength(6)
  })

  it('Maps Inactive status', () => {
    const mappedData = MapCPPCard(CPPDMockData[4])
    expect(mappedData.statusCode).toBe(StatusCodes.inactive)
    expect(mappedData.summaries).toBeFalsy()
  })

  it('Calculates next payment for monthly', () => {
    const dateTT = '2023-04-24'
    const dateTR = new Date('2023-05-24' + timezone).toDateString() //plus 1 month
    const mappedData = MapCPPCard({
      programCode: 32295,
      benefitType: 'Survivor',
      benefitStatus: 'Active',
      lastPaymentDate: dateTT,
      paymentProcessType: 'Monthly',
    })
    const summaryUT = mappedData.summaries[2]
    expect(summaryUT.type).toBe(SummaryTypes.NextPayment)
    expect(new Date(summaryUT.value).toDateString()).toBe(dateTR)
  })

  it('Calculates lastStatusDate corectly', () => {
    const dateTT = '2060-04-04'
    const dateTR = new Date('2060-08-02' + timezone).toDateString() //plus 120 days for cppd
    const mappedData = MapCPPCard({
      programCode: 32295,
      benefitType: 'Survivor',
      benefitStatus: 'Received',
      lastStatusDate: dateTT,
    })
    const summaryUT = mappedData.summaries[2]
    expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
    expect(new Date(summaryUT.value).toDateString()).toBe(dateTR)
  })
})

describe('maps OAS', () => {
  it('Inactive status', () => {
    const mappedData = MapOASCard(OASMockData[0])
    expect(mappedData.statusCode).toBe(StatusCodes.inactive)
    expect(mappedData.summaries).toBeFalsy()
  })

  it('Application received status', () => {
    const mappedData = MapOASCard(OASMockData[1])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(2)
  })

  it('Application Received status - With estimated decision', () => {
    OASMockData[1].lastStatusDate = new Date().toLocaleDateString(
      'en-CA',
      options
    )
    const mappedData = MapOASCard(OASMockData[1])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(3)
  })

  it('Decision sent status', () => {
    const mappedData = MapOASCard(OASMockData[2])
    expect(mappedData.statusCode).toBe(StatusCodes.decisionSent)
  })

  it('Payment hold status', () => {
    const mappedData = MapOASCard(OASMockData[3])
    expect(mappedData.statusCode).toBe(StatusCodes.paymentHold)
    expect(mappedData.summaries).toHaveLength(6)
  })

  it('In payment status', () => {
    const mappedData = MapOASCard(OASMockData[4])
    expect(mappedData.statusCode).toBe(StatusCodes.inPayment)
    expect(mappedData.summaries).toHaveLength(4)
  })

  it('Calculates estimatedDecisionDate', () => {
    const dateTT = '2060-04-04'
    const dateTR = new Date('2060-04-18' + timezone).toDateString() //plus 14 days
    const mappedData = MapOASCard({
      programCode: 'oas',
      benefitCode: 30320,
      benefitType: 'OASBeneficial',
      benefitStatus: 'Received',
      lastStatusDate: dateTT,
    })
    const summaryUT = mappedData.summaries[2]
    expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
    expect(new Date(summaryUT.value).toDateString()).toBe(dateTR)
  })
})

describe('Maps GIS', () => {
  it('Inactive status', () => {
    const mappedData = MapGISCard(GISMockData[0])
    expect(mappedData.statusCode).toBe(StatusCodes.inactive)
    expect(mappedData.summaries).toBeFalsy()
  })

  it('Application received status - Without estimated decision', () => {
    const mappedData = MapGISCard(GISMockData[1])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(2)
  })

  it('Application Received status - With estimated decision', () => {
    GISMockData[1].lastStatusDate = new Date().toLocaleDateString(
      'en-CA',
      options
    )
    const mappedData = MapGISCard(GISMockData[1])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(3)
  })

  it('Decision sent status', () => {
    const mappedData = MapGISCard(GISMockData[2])
    expect(mappedData.statusCode).toBe(StatusCodes.decisionSent)
    expect(mappedData.summaries).toHaveLength(2)
  })

  it('Payment hold status', () => {
    const mappedData = MapGISCard(GISMockData[3])
    expect(mappedData.statusCode).toBe(StatusCodes.paymentHold)
    expect(mappedData.summaries).toHaveLength(6)
  })

  it('In payment status', () => {
    const mappedData = MapGISCard(GISMockData[4])
    expect(mappedData.statusCode).toBe(StatusCodes.inPayment)
    expect(mappedData.summaries).toHaveLength(4)
  })

  it('Calculates estimatedDecisionDate', () => {
    const dateTT = '2060-04-04'
    const dateTR = new Date('2060-04-18' + timezone).toDateString() //plus 14 days
    const mappedData = MapGISCard({
      programCode: 'gis',
      benefitCode: 30320,
      benefitType: 'GISBeneficial',
      benefitStatus: 'Received',
      lastStatusDate: dateTT,
    })
    const summaryUT = mappedData.summaries[2]
    expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
    expect(new Date(summaryUT.value).toDateString()).toBe(dateTR)
  })
})

describe('SEB Mappings', () => {
  it('Maps Card', () => {
    const mappedData = MapSEBCard(SEBMockData)
    expect(mappedData.statusCode).toBe(StatusCodes.activeAgreement)
    expect(mappedData.summaries).toHaveLength(2)
  })
})
