import { ProgramCodes } from '../../../constants/ProgramCodes'
import { TypeCodes } from '../../../constants/ProgramTypeCodes'
import { StatusCodes } from '../../../constants/StatusCodes'
import { SummaryTypes } from '../../../constants/SummaryTypes'
import { CreateBenefitSummary, CreateGenericBenefitObj } from './_middleware'

export default async function GetCPPProgramData() {
  try {
    const cppData = await fetch(process.env.CPP_ACTIVE_BENEFIT_URL, {
      headers: new Headers({
        'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
      }),
    })
    return CreateBenefitObjWithCPPData(await cppData.json())
  } catch (e) {
    console.log(e)
    return null
  }
}

const CPPTypes = [
  {
    value: 'Beneficial',
    type: TypeCodes.CPPBeneficial,
  },
]

const CPPStatus = [
  {
    value: 32294,
    status: StatusCodes.inPayment,
  },
]

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
function CreateBenefitObjWithCPPData(cppBenefitData) {
  //convert to a data object so we can do date math
  let nextPayment = new Date(cppBenefitData.lastPaymentDate)
  if (cppBenefitData.paymentProcessType == 'Monthly') {
    //set it back to a string so it can seralize to JSON
    nextPayment = nextPayment.setMonth(nextPayment.getMonth() + 1)
  }
  let benefit = CreateGenericBenefitObj(
    ProgramCodes.CPP,
    CPPStatus.find((s) => s.value == cppBenefitData.programCode).status,
    CPPTypes.find((s) => s.value == cppBenefitData.benefitType).type,
    [
      CreateBenefitSummary(
        SummaryTypes.PaymentAmount,
        cppBenefitData.netAmount
      ),
      CreateBenefitSummary(SummaryTypes.NextPayment, nextPayment),
      CreateBenefitSummary(SummaryTypes.LatestStatus, null, null),
    ]
  )
  return benefit
}
