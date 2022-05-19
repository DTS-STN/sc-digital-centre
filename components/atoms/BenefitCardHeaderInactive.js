import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from './HorizontalRule'
import StatusBadge from './StatusBadge'
import BenefitCode from '../../constants/BenefitCode'

export default function BenefitCardHeaderInactive(props) {
  const t = props.locale === 'en' ? en : fr
  const getBenefitCardTitle = () => {
    return t[props.benefit.benefitType.toLowerCase()]
  }

  return (
    <div>
      <StatusBadge locale={props.locale} status="inactive" />
      <div className="px-4 md:px-6">
        <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2">
          <div
            id={`${props.benefit.benefitType}-inactive-title`}
            className="col-span-1 py-4"
          >
            <div className="font-bold font-display text-4xl sm:text-lg md:text-xl lg:text-3xl xl:text-4xl mb-2">
              {getBenefitCardTitle()}
            </div>
          </div>

          <HorizontalRule width="w-1/3" visibility="sm:hidden" />
          <div
            id={`${props.benefit.benefitType}-inactive-pastClaimOverview`}
            className="font-display py-4 sm:grid sm:pl-10"
          >
            <p className="font-bold text-lg mt-4">
              {`Your past ${props.benefit.benefitType} claim overview`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
