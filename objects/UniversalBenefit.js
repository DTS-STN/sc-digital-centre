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
///programCode = programCode
///statusCode = claimStatusCode
///typeCode = enmBenefitType
///summaries = [ { PaymentAmount, netAmount },
///              { NextReport, nextRptDueDate },
///              { LatestStatus, publishDate, messageData } ]

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
///programCode = benefitCode
///statusCode = programCode
///typeCode = benefitType
///summaries = [ { PaymentAmount, netAmount },
///              { NextPayment, lastPaymentDate + PaymentProcessType },
///              { LatestStatus, null, null } ]
export default class UniversalBenefit {
  constructor(programCode, statusCode, typeCode, summaries) {
    this.programCode = programCode
    this.statusCode = statusCode
    this.typeCode = typeCode
    this.summaries = summaries // an array of BenefitSummaries
  }
}
