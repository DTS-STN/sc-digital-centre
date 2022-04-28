import { BenefitSummaries, SummaryTypes } from './BenefitSummaries'

export class UniversalBenefit {
  constructor(programCode, statusCode, typeCode, summaries) {
    this.programCode = programCode
    this.statusCode = statusCode
    this.typeCode = typeCode
    this.summaries = summaries // an array of BenefitSummaries
  }
}

///CPP map
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
export function CreateUniversalBenefitWithCPPData(cppBenefitData) {
  let nextPayment = cppBenefitData.lastPaymentDate
  if (cppBenefitData.PaymentProcessType == 'Monthly') {
    nextPayment = new Date(nextPayment.setMonth(nextPayment.getMonth() + 1))
  }
  let benefit = new UniversalBenefit(
    cppBenefitData.benefitCode,
    cppBenefitData.programCode,
    cppBenefitData.benefitType,
    [
      new BenefitSummaries(
        SummaryTypes.PaymentAmount,
        cppBenefitData.netAmount
      ),
      new BenefitSummaries(SummaryTypes.NextPayment, nextPayment),
      new BenefitSummaries(SummaryTypes.LatestStatus, null, null),
    ]
  )
  return benefit
}

///EI map
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
export function CreateUniversalBenefitWithEIData(eiBenefitData) {
  let benefit = new UniversalBenefit(
    eiBenefitData.programCode,
    eiBenefitData.claimStatusCode,
    eiBenefitData.enmBenefitType,
    [
      new BenefitSummaries(SummaryTypes.PaymentAmount, eiBenefitData.netAmount),
      new BenefitSummaries(
        SummaryTypes.NextReport,
        eiBenefitData.nextRptDueDate
      ),
      new BenefitSummaries(
        SummaryTypes.LatestStatus,
        eiBenefitData.publishDate,
        eiBenefitData.messageData
      ),
    ]
  )
  return benefit
}
