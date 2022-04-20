import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from './HorizontalRule'

export default function BenefitCardHeaderActive(props) {
  const t = props.locale === 'en' ? en : fr
  const benefitType = props.benefit.benefitType

  const getBenefitCardTitle = () => {
    return t[benefitType.toLowerCase()]
  }

  return (
    <div className="px-4 md:px-6">
      <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2 pt-6">
        <div
          id={`${benefitType}-nobenefit-title`}
          className="col-span-1 py-4 md:px-0 lg:px-3"
        >
          <div className="font-bold font-display text-4xl sm:text-2xl lg:text-4xl mb-2 w-44 sm:w-32 lg:w-44">
            {getBenefitCardTitle()}
          </div>
        </div>
        <HorizontalRule width="w-1/3" visibility="sm:hidden" />
        <div
          id={`${benefitType}-nobenefit-learnmore`}
          className="col-span-2 font-display text-xl my-4 xl:mt-10 pl-2 sm:pl-8 "
        >
          <a className=" cursor-text " href={props.benefit.learnMoreLink}>
            {t.learnMoreAbout}
            <span className="underline hover:text-bright-blue-solid cursor-pointer">
              {getBenefitCardTitle()}
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
