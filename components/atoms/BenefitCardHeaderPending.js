import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from './HorizontalRule'
import BenefitCode from '../../constants/BenefitCode'

export default function BenefitCardHeaderPending(props) {
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
      <div className="flex mr-12 justify-end">
        <h2
          className={
            'font-bold font-display text-white text-lg px-5 py-1 ml-8 mb-5 rounded-b-md bg-gray-pending'
          }
        >
          {props.benefit.applicationStatus}
        </h2>
      </div>
      <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2">
        <div
          id={`${props.benefit.benefitType}-pending`}
          className="col-span-1 py-4 md:px-0 lg:px-3"
        >
          <div className="font-bold font-display text-4xl sm:text-2xl lg:text-4xl mb-2 w-44 sm:w-32 lg:w-44">
            {getBenefitCardTitle()}
          </div>
        </div>
        <HorizontalRule width="w-1/3" visibility="sm:hidden" />
        <div
          id={`${props.benefit.benefitType}-pending-paymentStartDate`}
          className="grid col-span-3 gap-y-4 gap-x-1 sm:grid-cols-3 font-display sm:pl-8 lg:pl-10"
        >
          <div id={`${props.benefit.benefitType}-pending-applicationDate`}>
            <p className="text-base sm:pb-2">{t.applicationSubmitted}</p>
            <p className="font-bold text-lg">{props.benefit.applicationDate}</p>
          </div>

          <div
            id={`${props.benefit.benefitType}-pending-estimatedDateOfDecision`}
          >
            <p className="text-base sm:pb-2">{t.estimatedDateOfDecision}</p>
            <p className="font-bold text-lg">
              {props.benefit.estimatedDateOfDecision}
            </p>
          </div>

          <div id={`${props.benefit.benefitType}-pending-progressbar`}>
            <p className="font-display sm:pb-2">{t.latestStatus}</p>
            <p className="font-display font-bold text-lg">
              {props.benefit.benefitStatusProgress}
            </p>
            <p className="font-bold text-lg">
              {props.benefit.latestStatusDate}
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
  )
}
