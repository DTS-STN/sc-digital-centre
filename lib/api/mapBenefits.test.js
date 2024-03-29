import { MapCPPCard, MapEICard, MapSEBCard, MapOASGISCard } from './mapBenefits'
// import EIMockData from '../../mockdata/userDefault/ei.json'
// import CPPMockData from '../../mockdata/userDefault/cpp.json'
// import CPPDMockData from '../../mockdata/userDefault/cppd.json'
// import OASMockData from '../../mockdata/userDefault/oas.json'
// import GISMockData from '../../mockdata/userDefault/gis.json'
// import SEBMockData from '../../mockdata/userDefault/seb.json'
// import { StatusCodes } from '../../constants/StatusCodes'
// import { SummaryTypes } from '../../constants/SummaryTypes'
// import { newNormalizedDate } from '../Utils'
// import { ProgramCodes } from '../../constants/ProgramCodes'
import { FormatSummary, MapBenefit } from './mapBenefitsHelper'

const options = { year: 'numeric', month: 'numeric', day: 'numeric' }

jest.mock('./mapBenefitsHelper', () => ({
  FormatSummary: jest.fn().mockReturnValue({ TestSummary: 'Test Summary' }),
  MapBenefit: jest
    .fn()
    .mockReturnValue({
      programCode: 'test',
      statusCode: 'test',
      typeCode: 1,
      summaries: undefined,
    }),
}))

describe('MapSEBCard', () => {
  it('Map', () => {
    const benefits = MapSEBCard({
      transactionDate: 'Transaction date',
      agreementStatus: 'Agreement status',
    })
    expect(FormatSummary).toBeCalledTimes(2)
    expect(FormatSummary).toHaveBeenCalledWith(
      'TransactionDate',
      'Transaction date'
    )
    expect(FormatSummary).toHaveBeenCalledWith(
      'AgreementStatus',
      'Agreement status'
    )
    expect(MapBenefit).toBeCalledTimes(1)
    expect(MapBenefit).toHaveBeenCalledWith(
      'seb',
      'activeAgreement',
      'SEBRegular',
      [{ TestSummary: 'Test Summary' }, { TestSummary: 'Test Summary' }]
    )
    expect(benefits.length).toBe(1)
  })
})

// describe('Maps EI', () => {
//   it('Application Received status - With estimated decision', () => {
//     const mappedData = MapEICard(EIMockData[0])
//     expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
//     expect(mappedData.summaries).toHaveLength(3)
//     expect(mappedData.summaries[2].type).toBe('EstimatedDecisionDate')
//   })

//   it('Application Received status - Without estimated decision', () => {
//     EIMockData[0].publishDate = new Date('2020-01-01').toLocaleDateString(
//       'en-CA',
//       options
//     )
//     const mappedData = MapEICard(EIMockData[0])
//     expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
//     expect(mappedData.summaries).toHaveLength(2)
//     for (let summary of mappedData.summaries) {
//       expect(summary.type).not.toBe('EstimatedDecisionDate')
//     }
//   })

//   it('In Payment status', () => {
//     const mappedData = MapEICard(EIMockData[1])
//     expect(mappedData.statusCode).toBe(StatusCodes.inPayment)
//     expect(mappedData.summaries).toHaveLength(3)
//     expect(mappedData.summaries[2].value.en).toBeTruthy()
//     expect(mappedData.summaries[2].value.fr).toBeTruthy()
//   })

//   it('Benefit Update status', () => {
//     const mappedData = MapEICard(EIMockData[2])
//     expect(mappedData.statusCode).toBe(StatusCodes.benefitUpdate)
//     expect(mappedData.summaries).toHaveLength(3)
//   })

//   it('Exhausted status', () => {
//     const mappedData = MapEICard(EIMockData[3])
//     expect(mappedData.statusCode).toBe(StatusCodes.exhausted)
//     expect(mappedData.summaries).toHaveLength(2)
//   })

//   it('Inactive status', () => {
//     const mappedData = MapEICard(EIMockData[4])
//     expect(mappedData.statusCode).toBe(StatusCodes.inactive)
//     expect(mappedData.summaries).toBeFalsy()
//   })

//   it('Calculates estimatedDecisionDate', () => {
//     const dateTT = '2060-04-24'
//     const dateTR = newNormalizedDate('2060-05-22') //plus 28 days
//     const mappedData = MapEICard({
//       enmBenefitType: 1,
//       claimStatusCode: 3435,
//       publishDate: dateTT,
//     })
//     const summaryUT = mappedData.summaries[2]
//     expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
//     expect(new Date(summaryUT.value)).toStrictEqual(dateTR)
//   })
// })

// describe('CPP Mappings', () => {
//   it('Maps Application Received status - With estimated decision', () => {
//     const mappedData = MapCPPCard(CPPMockData[0])
//     expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
//     expect(mappedData.summaries).toHaveLength(3)
//     expect(mappedData.summaries[2].type).toBe('EstimatedDecisionDate')
//   })

//   it('Maps Application Received status - Without estimated decision', () => {
//     CPPMockData[0].lastStatusDate = new Date('2020-01-01').toLocaleDateString(
//       'en-CA',
//       options
//     )
//     const mappedData = MapCPPCard(CPPMockData[0])
//     expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
//     expect(mappedData.summaries).toHaveLength(2)
//     for (let summary of mappedData.summaries) {
//       expect(summary.type).not.toBe('EstimatedDecisionDate')
//     }
//   })

//   it('Maps Decision Sent status', () => {
//     const mappedData = MapCPPCard(CPPMockData[1])
//     expect(mappedData.statusCode).toBe(StatusCodes.decisionSent)
//     expect(mappedData.summaries).toHaveLength(2)
//   })

//   it('Maps In Payment status', () => {
//     const mappedData = MapCPPCard(CPPMockData[2])
//     expect(mappedData.statusCode).toBe(StatusCodes.inPayment)
//     expect(mappedData.summaries).toHaveLength(3)
//   })

//   it('Maps Payment Hold status', () => {
//     const mappedData = MapCPPCard(CPPMockData[3])
//     expect(mappedData.statusCode).toBe(StatusCodes.paymentHold)
//     expect(mappedData.summaries).toHaveLength(5)
//   })

//   it('Maps Inactive status', () => {
//     const mappedData = MapCPPCard(CPPMockData[4])
//     expect(mappedData.statusCode).toBe(StatusCodes.inactive)
//     expect(mappedData.summaries).toBeFalsy()
//   })

//   it('Maps Paid status', () => {
//     const mappedData = MapCPPCard(CPPMockData[6])
//     expect(mappedData.statusCode).toBe(StatusCodes.paid)
//     expect(mappedData.summaries).toHaveLength(2)
//   })

//   it('Calculates next payment for monthly', () => {
//     const dateTT = '2023-04-24'
//     const dateTR = newNormalizedDate('2023-05-24') //plus 1 month
//     const mappedData = MapCPPCard({
//       programCode: 2,
//       benefitCode: 1,
//       benefitType: 'RETIREMENT',
//       benefitStatus: 'COMPLETE',
//       paymentDate: dateTT,
//       paymentProcessType: 'MONTHLY',
//     })
//     const summaryUT = mappedData.summaries[2]
//     expect(summaryUT.type).toBe(SummaryTypes.NextPayment)
//     expect(new Date(summaryUT.value)).toStrictEqual(dateTR)
//   })

//   it('Calculates lastStatusDate corectly', () => {
//     const dateTT = '2060-04-04'
//     const dateTR = newNormalizedDate('2060-04-18') //plus 14 days for cpp
//     const mappedData = MapCPPCard({
//       programCode: 2,
//       benefitCode: 1,
//       benefitStatus: 'Received',
//       lastStatusDate: dateTT,
//     })
//     const summaryUT = mappedData.summaries[2]
//     expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
//     expect(new Date(summaryUT.value)).toStrictEqual(dateTR)
//   })
// })

// describe('CPPD Mappings', () => {
//   it('Maps Application Received status', () => {
//     const mappedData = MapCPPCard(CPPDMockData[0])
//     expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
//     expect(mappedData.summaries).toHaveLength(3)
//   })

//   it('Maps Decision Sent status', () => {
//     const mappedData = MapCPPCard(CPPDMockData[1])
//     expect(mappedData.statusCode).toBe(StatusCodes.decisionSent)
//     expect(mappedData.summaries).toHaveLength(2)
//   })

//   it('Maps In Payment status', () => {
//     const mappedData = MapCPPCard(CPPDMockData[2])
//     expect(mappedData.statusCode).toBe(StatusCodes.inPayment)
//     expect(mappedData.summaries).toHaveLength(3)
//   })

//   it('Maps Payment Hold status', () => {
//     const mappedData = MapCPPCard(CPPDMockData[3])
//     expect(mappedData.statusCode).toBe(StatusCodes.paymentHold)
//     expect(mappedData.summaries).toHaveLength(5)
//   })

//   it('Maps Inactive status', () => {
//     const mappedData = MapCPPCard(CPPDMockData[4])
//     expect(mappedData.statusCode).toBe(StatusCodes.inactive)
//     expect(mappedData.summaries).toBeFalsy()
//   })

//   it('Calculates next payment for monthly', () => {
//     const dateTT = '2023-04-24'
//     const dateTR = newNormalizedDate('2023-05-24') //plus 1 month
//     const mappedData = MapCPPCard({
//       programCode: 32295,
//       benefitCode: 16,
//       benefitStatus: 'COMPLETE',
//       paymentDate: dateTT,
//       paymentProcessType: 'MONTHLY',
//     })
//     const summaryUT = mappedData.summaries[2]
//     expect(summaryUT.type).toBe(SummaryTypes.NextPayment)
//     expect(new Date(summaryUT.value)).toStrictEqual(dateTR)
//   })

//   it('Calculates lastStatusDate corectly', () => {
//     const dateTT = '2060-04-04'
//     const dateTR = newNormalizedDate('2060-08-02') //plus 120 days for cppd
//     const mappedData = MapCPPCard({
//       programCode: 32295,
//       benefitCode: 16,
//       benefitStatus: 'Received',
//       lastStatusDate: dateTT,
//     })
//     const summaryUT = mappedData.summaries[2]
//     expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
//     expect(new Date(summaryUT.value)).toStrictEqual(dateTR)
//   })
// })

// describe('maps OAS', () => {
//   it('Inactive status', () => {
//     const mappedData = MapOASGISCard(OASMockData[0])
//     expect(mappedData.programCode).toBe(ProgramCodes.OAS)
//     expect(mappedData.statusCode).toBe(StatusCodes.inactive)
//     expect(mappedData.summaries).toBeFalsy()
//   })

//   it('Application Received status - With estimated decision', () => {
//     const mappedData = MapOASGISCard(OASMockData[1])
//     expect(mappedData.programCode).toBe(ProgramCodes.OAS)
//     expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
//     expect(mappedData.summaries).toHaveLength(3)
//     expect(mappedData.summaries[2].type).toBe('EstimatedDecisionDate')
//   })

//   it('Application received status - Without estimated decision', () => {
//     OASMockData[1].lastStatusDate = new Date('2020-01-01').toLocaleDateString(
//       'en-CA',
//       options
//     )
//     const mappedData = MapOASGISCard(OASMockData[1])
//     expect(mappedData.programCode).toBe(ProgramCodes.OAS)
//     expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
//     expect(mappedData.summaries).toHaveLength(2)
//     for (let summary of mappedData.summaries) {
//       expect(summary.type).not.toBe('EstimatedDecisionDate')
//     }
//   })

//   it('Decision sent status', () => {
//     const mappedData = MapOASGISCard(OASMockData[2])
//     expect(mappedData.programCode).toBe(ProgramCodes.OAS)
//     expect(mappedData.statusCode).toBe(StatusCodes.decisionSent)
//   })

//   it('Payment hold status', () => {
//     const mappedData = MapOASGISCard(OASMockData[3])
//     expect(mappedData.programCode).toBe(ProgramCodes.OAS)
//     expect(mappedData.statusCode).toBe(StatusCodes.paymentHold)
//     expect(mappedData.summaries).toHaveLength(5)
//   })

//   it('In payment status', () => {
//     const mappedData = MapOASGISCard(OASMockData[4])
//     expect(mappedData.programCode).toBe(ProgramCodes.OAS)
//     expect(mappedData.statusCode).toBe(StatusCodes.inPayment)
//     expect(mappedData.summaries).toHaveLength(3)
//   })

//   it('Calculates estimatedDecisionDate', () => {
//     const dateTT = '2060-04-04'
//     const dateTR = newNormalizedDate('2060-04-18') //plus 14 days
//     const mappedData = MapOASGISCard({
//       programCode: 'oas',
//       benefitCode: 30320,
//       benefitType: 'OASBeneficial',
//       benefitStatus: 'Received',
//       lastStatusDate: dateTT,
//     })
//     const summaryUT = mappedData.summaries[2]
//     expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
//     expect(new Date(summaryUT.value)).toStrictEqual(dateTR)
//   })
// })

// describe('Maps GIS', () => {
//   it('Inactive status', () => {
//     const mappedData = MapOASGISCard(GISMockData[0])
//     expect(mappedData.programCode).toBe(ProgramCodes.GIS)
//     expect(mappedData.statusCode).toBe(StatusCodes.inactive)
//     expect(mappedData.summaries).toBeFalsy()
//   })

//   it('Application Received status - With estimated decision', () => {
//     const mappedData = MapOASGISCard(GISMockData[1])
//     expect(mappedData.programCode).toBe(ProgramCodes.GIS)
//     expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
//     expect(mappedData.summaries).toHaveLength(3)
//     expect(mappedData.summaries[2].type).toBe('EstimatedDecisionDate')
//   })

//   it('Application received status - Without estimated decision', () => {
//     GISMockData[1].lastStatusDate = new Date('2020-01-01').toLocaleDateString(
//       'en-CA',
//       options
//     )
//     const mappedData = MapOASGISCard(GISMockData[1])
//     expect(mappedData.programCode).toBe(ProgramCodes.GIS)
//     expect(mappedData.statusCode).toBe(StatusCodes.applicationReceived)
//     expect(mappedData.summaries).toHaveLength(2)
//     for (let summary of mappedData.summaries) {
//       expect(summary.type).not.toBe('EstimatedDecisionDate')
//     }
//   })

//   it('Decicion sent status', () => {
//     const mappedData = MapOASGISCard(GISMockData[2])
//     expect(mappedData.programCode).toBe(ProgramCodes.GIS)
//     expect(mappedData.statusCode).toBe(StatusCodes.decisionSent)
//     expect(mappedData.summaries).toHaveLength(2)
//   })

//   it('Payment hold status', () => {
//     const mappedData = MapOASGISCard(GISMockData[3])
//     expect(mappedData.programCode).toBe(ProgramCodes.GIS)
//     expect(mappedData.statusCode).toBe(StatusCodes.paymentHold)
//     expect(mappedData.summaries).toHaveLength(5)
//   })

//   it('In payment status', () => {
//     const mappedData = MapOASGISCard(GISMockData[4])
//     expect(mappedData.programCode).toBe(ProgramCodes.GIS)
//     expect(mappedData.statusCode).toBe(StatusCodes.inPayment)
//     expect(mappedData.summaries).toHaveLength(3)
//   })

//   it('Calculates estimatedDecisionDate', () => {
//     const dateTT = '2060-04-04'
//     const dateTR = newNormalizedDate('2060-04-18') //plus 14 days
//     const mappedData = MapOASGISCard({
//       programCode: 'gis',
//       benefitCode: 30320,
//       benefitType: 'GISBeneficial',
//       benefitStatus: 'Received',
//       lastStatusDate: dateTT,
//     })
//     const summaryUT = mappedData.summaries[2]
//     expect(summaryUT.type).toBe(SummaryTypes.EstimatedDecisionDate)
//     expect(new Date(summaryUT.value)).toStrictEqual(dateTR)
//   })
// })

// describe('SEB Mappings', () => {
//   it('Maps Card', () => {
//     const mappedData = MapSEBCard(SEBMockData)[0]
//     expect(mappedData.statusCode).toBe(StatusCodes.activeAgreement)
//     expect(mappedData.summaries).toHaveLength(2)
//   })
// })
