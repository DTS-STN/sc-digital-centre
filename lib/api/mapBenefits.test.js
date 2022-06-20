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

describe('maps EI', () => {
  it('Application Received status', () => {
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

  it('calculates estimatedDecisionDate', () => {
    const dateTT = '2023-04-24'
    const dateTR = new Date('2023-05-24').toDateString() //plus 1 month
    const mappedData = MapEICard({
      enmBenefitType: 1,
      claimStatusCode: 3435,
      nextRptDueDate: dateTT,
    })
    const summaryUT = mappedData.summaries[2]
    expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
    expect(new Date(summaryUT.value).toDateString()).toBe(dateTR)
  })
})

describe('CPP Mappings', () => {
  it('Maps Application Received status', () => {
    const mappedData = MapCPPCard(CPPMockData[0])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(3)
  })

  it('Maps Decision Sent status', () => {
    const mappedData = MapCPPCard(CPPMockData[1])
    expect(mappedData.statusCode).toBe(StatusCodes.decisionSent)
    expect(mappedData.summaries).toHaveLength(3)
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
    const dateTR = new Date('2023-05-24').toDateString() //plus 1 month
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
    const dateTT = '2023-04-24'
    const dateTR = new Date('2023-05-24').toDateString() //plus 1 month
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
    expect(mappedData.summaries).toHaveLength(3)
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
    const dateTR = new Date('2023-05-24').toDateString() //plus 1 month
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
    const dateTT = '2023-04-24'
    const dateTR = new Date('2023-05-24').toDateString() //plus 1 month
    const mappedData = MapCPPCard({
      programCode: 32295,
      benefitType: 'Survivor',
      benefitStatus: 'Decision',
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

  it('Application receieved status', () => {
    const mappedData = MapOASCard(OASMockData[1])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(3)
  })

  it('Decicion sent status', () => {
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

  it('calculates estimatedDecisionDate', () => {
    const dateTT = '2023-04-24'
    const dateTR = new Date('2023-05-24').toDateString() //plus 1 month
    const mappedData = MapOASCard({
      programCode: 'oas',
      benefitCode: 30320,
      benefitType: 'OASBeneficial',
      benefitStatus: 'Decision',
      lastStatusDate: dateTT,
    })
    const summaryUT = mappedData.summaries[2]
    expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
    expect(new Date(summaryUT.value).toDateString()).toBe(dateTR)
  })
})

describe('maps GIS', () => {
  it('Inactive status', () => {
    const mappedData = MapGISCard(GISMockData[0])
    expect(mappedData.statusCode).toBe(StatusCodes.inactive)
    expect(mappedData.summaries).toBeFalsy()
  })

  it('Application receieved status', () => {
    const mappedData = MapGISCard(GISMockData[1])
    expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
    expect(mappedData.summaries).toHaveLength(3)
  })

  it('Decicion sent status', () => {
    const mappedData = MapGISCard(GISMockData[2])
    expect(mappedData.statusCode).toBe(StatusCodes.decisionSent)
    expect(mappedData.summaries).toHaveLength(3)
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

  it('calculates estimatedDecisionDate', () => {
    const dateTT = '2023-04-24'
    const dateTR = new Date('2023-05-24').toDateString() //plus 1 month
    const mappedData = MapGISCard({
      programCode: 'gis',
      benefitCode: 30320,
      benefitType: 'GISBeneficial',
      benefitStatus: 'Decision',
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
