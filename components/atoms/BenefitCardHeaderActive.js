import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from './HorizontalRule'
import BenefitCode from '../../constants/BenefitCode'
import {
  formatDate,
  getBenefitCode,
  getProgramBenefit,
} from '../organisms/DashboardUtils'

export default function BenefitCardHeaderActive(props) {
  const t = props.locale === 'en' ? en : fr
  const getBenefitCardTitle = () => {
    if (props.benefit.benefitType === BenefitCode.cppd) {
      return t[BenefitCode.cpp.toLowerCase()]
    } else if (props.benefit.benefitType === BenefitCode.cpp) {
      const programBenefit = getProgramBenefit(props.api.programCode)
      return programBenefit.map((i) => i.nameEn).toString()
    } else {
      return t[props.benefit.benefitType.toLowerCase()]
    }
  }

  const getBenefitCodeName = () => {
    let benefitCode
    if (props.benefit.benefitType === BenefitCode.cpp) {
      benefitCode = getBenefitCode(props.api.benefitCode)
    } else if (props.benefit.benefitType === BenefitCode.ei) {
      benefitCode = getBenefitCode(props.api.claimStatusCode)
    } else {
      return props.benefit.applicationStatus
    }
    return benefitCode.map((i) => i.nameEn).toString()
  }

  const getNetAmount = () => {
    if (
      props.benefit.benefitType === BenefitCode.cpp ||
      props.benefit.benefitType === BenefitCode.ei
    ) {
      return props.api.netAmount
    } else {
      return props.benefit.nextPaymentAmount
    }
  }

  const getPaymentDate = () => {
    if (props.benefit.benefitType === BenefitCode.cpp) {
      return formatDate(props.api.lastPaymentDate)
    } else if (props.benefit.benefitType === BenefitCode.ei) {
      return formatDate(props.api.nextRptDueDate)
    } else {
      return props.benefit.nextPaymentDate
    }
  }

  return (
    <div className="px-4 md:px-6">
      <div className="flex mr-10 justify-end">
        <h2
          className={
            'font-bold font-display text-lg px-12 py-1 mb-5 rounded-b-md text-white bg-green-active'
          }
        >
          {getBenefitCodeName()}
        </h2>
      </div>
      <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2">
        <div
          id={`${props.benefit.benefitType}-active`}
          className="col-span-1 py-4 md:px-0 lg:px-3"
        >
          <div className="font-bold font-display text-4xl sm:text-2xl lg:text-4xl mb-2 w-44 sm:w-32 lg:w-44">
            {getBenefitCardTitle()}
          </div>
        </div>
        <HorizontalRule width="w-1/3" visibility="sm:hidden" />
        <div
          id={`${props.benefit.benefitType}-active-paymentStartDate`}
          className="font-display grid-cols-3 col-span-3 py-4 sm:grid sm:pl-10"
        >
          <div id={`${props.benefit.benefitType}-active-nextPaymentAmount`}>
            <p className="text-base">{t.paymentAmount}</p>
            <p className="font-bold text-4xl mt-1">
              {props.locale === 'en'
                ? `$ ${getNetAmount()}`
                : `${getNetAmount()} $`}
            </p>
            <a
              href="./dashboard"
              className="text-sm mt-1 text-bright-blue-solid underline"
            >
              {t.viewPaymentHistory}
            </a>
          </div>

          <div
            id={`${props.benefit.benefitType}-active-nextPaymentDueDate`}
            className="relative mb-20 mt-7 sm:mt-0"
          >
            <p>
              {props.benefit.benefitType != 'EI'
                ? t.daysUntilNextPayment
                : t.nextReportDue}
            </p>
            <p className="text-green-active">{getPaymentDate()}</p>
          </div>

          <div
            id={`${props.benefit.benefitType}-active-latestUpdates`}
            className="py-4 sm:pl-10"
          >
            <p className="font-display">{t.latestUpdate}</p>
            <p className="font-display font-bold text-lg">
              {props.benefit.benefitStatusProgress}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
