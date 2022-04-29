import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from './HorizontalRule'
import BenefitCode from '../../constants/BenefitCode'
import StatusBadge from './StatusBadge'

export default function BenefitCardHeaderActiveAgreement(props) {
  const t = props.locale === 'en' ? en : fr
  const getBenefitCardTitle = () => {
    if (props.benefit.benefitType === BenefitCode.cppd) {
      return t[BenefitCode.cpp.toLowerCase()]
    } else {
      return t[props.benefit.benefitType.toLowerCase()]
    }
  }

  return (
    <div>
      <StatusBadge
        className="bg-green-active"
        status={props.benefit.applicationStatus}
      />
      <div className="px-4 md:px-6 pb-4">
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
            className="grid col-span-3 gap-y-4 gap-x-1 sm:grid-cols-3 sm:pl-8 lg:pl-10 font-display"
          >
            <div id={`${props.benefit.benefitType}-active-nextPaymentDueDate`}>
              <p className="sm:pb-2">{t.transactionDate}</p>
              <p className="text-green-active font-bold text-lg">
                {props.benefit.transactionDate}
              </p>
            </div>

            <div
              id={`${props.benefit.benefitType}-active-latestUpdates`}
              className="sm:pb-2"
            >
              <p className="font-display sm:pb-2">{t.agreementStatus}</p>
              <p className="font-display font-bold text-lg">
                {props.benefit.benefitStatusProgress}
              </p>
              <a
                href={t.url_statusAndMessages}
                className="mt-1 text-bright-blue-solid underline"
              >
                {t.viewMyStatusAndMessages}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
