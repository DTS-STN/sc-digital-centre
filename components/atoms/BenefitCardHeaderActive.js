import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from './HorizontalRule'
import BenefitCode from '../../constants/BenefitCode'

export default function BenefitCardHeaderActive(props) {
  const t = props.locale === 'en' ? en : fr
  const getBenefitCardTitle = () => {
    if (props.benefit.benefitType === BenefitCode.cppd) {
      return t[BenefitCode.cpp.toLowerCase()]
    } else {
      return t[props.benefit.benefitType.toLowerCase()]
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
          {props.benefit.applicationStatus}
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
          className="grid col-span-3 gap-y-2 sm:grid-cols-3 sm:pl-8 lg:pl-10 font-display bg-amber-300"
        >
          <div
            className="bg-blue-200"
            id={`${props.benefit.benefitType}-active-nextPaymentAmount`}
          >
            <p className="text-base pb-2 ">{t.paymentAmount}</p>
            <p className="font-bold text-4xl sm:text-3xl md:text-4xl whitespace-nowrap">
              {props.locale === 'en'
                ? `$ ${props.benefit.nextPaymentAmount}`
                : `${props.benefit.nextPaymentAmount} $`}
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
            className="  bg-lime-300"
          >
            <p className="pb-2">
              {props.benefit.benefitType != 'EI'
                ? t.daysUntilNextPayment
                : t.nextReportDue}
            </p>
            <p className="text-green-active font-bold">
              {props.benefit.nextPaymentDate}
            </p>
          </div>

          <div
            id={`${props.benefit.benefitType}-active-latestUpdates`}
            className="pb-2  bg-red-200"
          >
            <p className="font-display pb-2">{t.latestUpdate}</p>
            <p className="font-display font-bold text-lg">
              {props.benefit.benefitStatusProgress}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
