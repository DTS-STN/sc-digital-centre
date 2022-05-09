import { ProgramCodes } from '../../../constants/ProgramCodes'
import { SummaryTypes } from '../../../constants/SummaryTypes'
import {
  CreateBenefitSummary,
  CreateGenericBenefitObj,
} from '../../../lib/BenefitsMapping'

export default async function GetEIProgramData(req, res) {
  try {
    const eiData = await fetch(process.env.EI_ACTIVE_BENEFIT_URL, {
      headers: new Headers({
        'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
      }),
    })
    return CreateBenefitObjWithEIData(await eiData.json())
  } catch (e) {
    console.log(e)
    return null
  }
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
function CreateBenefitObjWithEIData(eiBenefitData) {
  let benefit = CreateGenericBenefitObj(
    ProgramCodes.EI,
    EIStatus.find((s) => s.value == eiBenefitData.claimStatusCode).status,
    EITypes.find((t) => t.value == eiBenefitData.enmBenefitType).type,
    [
      CreateBenefitSummary(SummaryTypes.PaymentAmount, eiBenefitData.netAmount),
      CreateBenefitSummary(
        SummaryTypes.NextReport,
        eiBenefitData.nextRptDueDate
      ),
      CreateBenefitSummary(
        SummaryTypes.LatestStatus,
        eiBenefitData.publishDate,
        eiBenefitData.messageData
      ),
    ]
  )
  return benefit
}
