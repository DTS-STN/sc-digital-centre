import {
  CPPPrograms,
  CPPStatus,
  CPPTypes,
} from '../../constants/CPPMappingCodes'
import { EIStatus, EITypes } from '../../constants/EIMappingCodes'
import { OASStatus, OASTypes } from '../../constants/OASMappingCodes'
import { GISStatus, GISTypes } from '../../constants/GISMappingCodes'
import { ProgramCodes } from '../../constants/ProgramCodes'
import { TypeCodes } from '../../constants/ProgramTypeCodes'
import { StatusCodes } from '../../constants/StatusCodes'
import { SummaryTypes } from '../../constants/SummaryTypes'
import { formatDate } from '../Utils'

export function FormatSummary(type, value, extra) {
  let benefitSummary = {
    type: type, // will define what header text to go with it and any links if applicable
    value: value, // a date or amount, defined by the type
  }
  //only add extra content if it exists
  if (extra) {
    benefitSummary.extra = extra //extra is additional text for display
  }
  return benefitSummary
}

export function MapBenefit(programCode, statusCode, typeCode, summaries) {
  const benefit = {
    programCode: programCode,
    statusCode: statusCode,
    typeCode: typeCode,
  }
  if (summaries) benefit.summaries = summaries

  return benefit
}

///EI result object maping
// {
//     "claimStatusCode": 3433, // status
//     "enmBenefitType": 1, //active benefit type
//     "messageData": "Important message", //latest update
//     "messageId": 32, //latest update
//     "publishDate": "2021-02-21", //latest update
//     "nextRptDueDate": "2023-04-24", //next report due
//     "programCode": 4543, //program name
//     "netAmount": 32.21 //payment amount
// }
export function MapEICard(eiBenefitData) {
  //if these "lookups" return undefined (because the API data isn't expected), we want an exception to occur (fail fast)
  //so that the API try/catch will track it properly
  const type = EITypes[eiBenefitData.enmBenefitType]
  const status = EIStatus[eiBenefitData.claimStatusCode]
  let summaries

  switch (status) {
    case StatusCodes.inPayment:
    case StatusCodes.benefitUpdate:
      summaries = [
        FormatSummary(SummaryTypes.LastNetPayment, eiBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextReport, eiBenefitData.nextRptDueDate),
        FormatSummary(
          SummaryTypes.LatestStatusMessage,
          eiBenefitData.publishDate,
          eiBenefitData.messageData
        ),
      ]
      break

    case StatusCodes.applicationReceived:
      const estimatedDateOfDecision = new Date(
        formatDate(eiBenefitData.publishDate, 'en')
      )
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(
          SummaryTypes.LatestStatus,
          eiBenefitData.publishDate,
          eiBenefitData.messageId
        ),
        FormatSummary(
          SummaryTypes.EstimatedDecisionDate,
          estimatedDateOfDecision.setDate(
            estimatedDateOfDecision.getDate() + 28
          )
        ),
      ]
      //remove estimated decision date if current day is past that point
      if (Date.now() > estimatedDateOfDecision.getTime()) {
        summaries.pop()
      }
      break

    case StatusCodes.exhausted:
      summaries = [
        FormatSummary(SummaryTypes.LastPayment, eiBenefitData.netAmount),
        FormatSummary(SummaryTypes.LatestStatus, eiBenefitData.publishDate),
      ]
      break

    default:
      break
  }
  const benefit = MapBenefit(ProgramCodes.EI, status, type, summaries)
  return benefit
}

///CPP result object maping
// {
//     "programCode": 32294, //status
//     "benefitCode": 30320, //program name
//     "benefitType": "Beneficial", //active type
//     "benefitStatus": "Active", //latest update XXX
//     "lastPaymentDate": "2021-02-21", //last day paid
//     "finalPaymentDate": "2024-02-13", //last payment (future)
//     "netAmount": 30.32, // payment amount
//     "paymentProcessType": "Monthly" //process type
// }
// also used by CPPD, not task list is differnt (handled in MapBenefit based on program & status)
export function MapCPPCard(cppBenefitData) {
  //if these "lookups" return undefined (because the API data isn't expected), we want an exception to occur (fail fast)
  //so that the API try/catch will track it properly
  const program = CPPPrograms[cppBenefitData.programCode]
  const type = CPPTypes[cppBenefitData.benefitType]
  const status = CPPStatus[cppBenefitData.benefitStatus]
  let summaries

  switch (status) {
    case StatusCodes.inPayment:
      let nextPayment = new Date(
        formatDate(cppBenefitData.lastPaymentDate, 'en')
      )
      if (cppBenefitData.paymentProcessType == 'Monthly') {
        nextPayment = nextPayment.setMonth(nextPayment.getMonth() + 1)
      }
      summaries = [
        FormatSummary(SummaryTypes.ActiveBenefit, type),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          cppBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.NextPayment, nextPayment),
        FormatSummary(SummaryTypes.LastPayment, cppBenefitData.netAmount),
      ]
      break

    case StatusCodes.applicationReceived:
      const lastStatusDate = new Date(
        formatDate(cppBenefitData.lastStatusDate, 'en')
      )
      const estimatedDateOffset = program === 'cppd' ? 120 : 14 //cppd has an estimated decision date of +120 days instead of +14
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, cppBenefitData.lastStatusDate),
        FormatSummary(
          SummaryTypes.EstimatedDecisionDate,
          lastStatusDate.setDate(lastStatusDate.getDate() + estimatedDateOffset)
        ),
      ]
      //remove estimated decision date if current day is past that point
      if (Date.now() > lastStatusDate.getTime()) {
        summaries.pop()
      }
      break

    case StatusCodes.decisionSent:
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, cppBenefitData.lastStatusDate),
      ]
      break

    case StatusCodes.paymentHold:
      summaries = [
        FormatSummary(SummaryTypes.BenefitAffected, type),
        FormatSummary(SummaryTypes.LatestStatus, cppBenefitData.lastStatusDate),
        FormatSummary(SummaryTypes.PresentStatus, cppBenefitData.benefitStatus),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          cppBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.LastPayment, cppBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextPaymentDate, cppBenefitData.message),
      ]

    default:
      break
  }
  const benefit = MapBenefit(program, status, type, summaries)
  return benefit
}

export function MapSEBCard(sebResult) {
  //seb only has one status and type
  const benefit = MapBenefit(
    ProgramCodes.SEB,
    StatusCodes.activeAgreement,
    TypeCodes.SEB,
    [
      FormatSummary(SummaryTypes.TransactionDate, sebResult.transactionDate),
      FormatSummary(SummaryTypes.AgreementStatus, sebResult.agreementStatus),
    ]
  )
  return benefit
}

///OAS result object maping
// {
//     "programCode": oas,
//     "benefitCode": 30320, //program name
//     "benefitType": "Unknown", //active type
//     "benefitStatus": "Active", //latest update XXX
//     "lastPaymentDate": "2021-02-21", //last day paid
//     "finalPaymentDate": "2024-02-13", //last payment (future)
//     "netAmount": 30.32, // payment amount
//     "paymentProcessType": "Monthly" //process type
// }
export function MapOASCard(oasBenefitData) {
  //if these "lookups" return undefined (because the API data isn't expected), we want an exception to occur (fail fast)
  //so that the API try/catch will track it properly
  const type = OASTypes[oasBenefitData.benefitType]
  const status = OASStatus[oasBenefitData.benefitStatus]
  let summaries

  switch (status) {
    case StatusCodes.inPayment:
      //convert to a date object so we can do date math
      let nextPayment = new Date(
        formatDate(oasBenefitData.lastPaymentDate, 'en')
      )
      if (oasBenefitData.paymentProcessType == 'Monthly') {
        //set it back to a string so it can seralize to JSON
        nextPayment = nextPayment.setMonth(nextPayment.getMonth() + 1)
      }
      summaries = [
        FormatSummary(SummaryTypes.ActiveBenefit, type),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          oasBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.LastPayment, oasBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextPayment, nextPayment),
      ]
      break

    case StatusCodes.applicationReceived:
      const lastStatusDate = new Date(
        formatDate(oasBenefitData.lastStatusDate, 'en')
      )
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, oasBenefitData.lastStatusDate),
        FormatSummary(
          SummaryTypes.EstimatedDecisionDate,
          lastStatusDate.setDate(lastStatusDate.getDate() + 14)
        ),
      ]
      //remove estimated decision date if current day is past that point
      if (Date.now() > lastStatusDate.getTime()) {
        summaries.pop()
      }
      break

    case StatusCodes.decisionSent:
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, oasBenefitData.lastStatusDate),
      ]
      break

    case StatusCodes.paymentHold:
      summaries = [
        FormatSummary(SummaryTypes.BenefitAffected, type),
        FormatSummary(SummaryTypes.LatestStatus, oasBenefitData.lastStatusDate),
        FormatSummary(SummaryTypes.PresentStatus, oasBenefitData.benefitStatus),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          oasBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.LastPayment, oasBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextPaymentDate, oasBenefitData.message),
      ]

    default:
      break
  }

  const benefit = MapBenefit(ProgramCodes.OAS, status, type, summaries)
  return benefit
}

///GIS result object maping
// {
//     "programCode": gis,
//     "benefitCode": 30320, //program name
//     "benefitType": "Unknown", //active type
//     "benefitStatus": "Active", //latest update XXX
//     "lastPaymentDate": "2021-02-21", //last day paid
//     "finalPaymentDate": "2024-02-13", //last payment (future)
//     "netAmount": 30.32, // payment amount
//     "paymentProcessType": "Monthly" //process type
// }
export function MapGISCard(gisBenefitData) {
  const type = GISTypes[gisBenefitData.benefitType]
  const status = GISStatus[gisBenefitData.benefitStatus]
  let summaries

  switch (status) {
    case StatusCodes.inPayment:
      //convert to a date object so we can do date math
      let nextPayment = new Date(
        formatDate(gisBenefitData.lastPaymentDate, 'en')
      )
      if (gisBenefitData.paymentProcessType == 'Monthly') {
        //set it back to a string so it can seralize to JSON
        nextPayment = nextPayment.setMonth(nextPayment.getMonth() + 1)
      }
      summaries = [
        FormatSummary(SummaryTypes.ActiveBenefit, type),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          gisBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.LastPayment, gisBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextPayment, nextPayment),
      ]
      break

    case StatusCodes.applicationReceived:
      const lastStatusDate = new Date(
        formatDate(gisBenefitData.lastStatusDate, 'en')
      )
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, gisBenefitData.lastStatusDate),
        FormatSummary(
          SummaryTypes.EstimatedDecisionDate,
          lastStatusDate.setDate(lastStatusDate.getDate() + 14)
        ),
      ]
      //remove estimated decision date if current day is past that point
      if (Date.now() > lastStatusDate.getTime()) {
        summaries.pop()
      }
      break

    case StatusCodes.decisionSent:
      summaries = [
        FormatSummary(SummaryTypes.RequestedBenefit, type),
        FormatSummary(SummaryTypes.LatestStatus, gisBenefitData.lastStatusDate),
      ]
      break

    case StatusCodes.paymentHold:
      summaries = [
        FormatSummary(SummaryTypes.BenefitAffected, type),
        FormatSummary(SummaryTypes.LatestStatus, gisBenefitData.lastStatusDate),
        FormatSummary(SummaryTypes.PresentStatus, gisBenefitData.benefitStatus),
        FormatSummary(
          SummaryTypes.LastPaymentDate,
          gisBenefitData.lastPaymentDate
        ),
        FormatSummary(SummaryTypes.LastPayment, gisBenefitData.netAmount),
        FormatSummary(SummaryTypes.NextPaymentDate, gisBenefitData.message),
      ]

    default:
      break
  }

  const benefit = MapBenefit(ProgramCodes.GIS, status, type, summaries)
  return benefit
}
