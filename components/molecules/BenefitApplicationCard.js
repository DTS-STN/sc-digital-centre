import en from '../../locales/en'
import fr from '../../locales/fr'
import PropTypes from 'prop-types'
import HorizontalRule from '../atoms/HorizontalRule'
import propTypes from 'prop-types'
import { ProgramCodes } from '../../constants/ProgramCodes'

const BenefitApplicationCard = (props) => {
  const t = props.locale === 'en' ? en : fr
  const benefitType = props.benefitApplication.benefitType
  const benefitSubType = props.benefitApplication.benefitSubType
  const benefitName = props.benefitApplication.benefitName

  const isEstimateButtonRequired = () => {
    return (
      (benefitType.toLowerCase() === ProgramCodes.CPP &&
        typeof benefitSubType === 'undefined') ||
      benefitType.toLowerCase() === ProgramCodes.OAS
    )
  }

  const getBenefitNameString = () => {
    return typeof benefitSubType === 'undefined'
      ? benefitName
      : `${benefitType} ${t[benefitSubType]}`
  }

  return (
    <div className="benefit-card px-4 md:px-6 py-7" data-cy="adcard">
      <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2">
        <div
          id={`${benefitType}-${benefitSubType}-app-card`}
          className="col-span-1 py-4"
        >
          <h2 className="font-bold font-display text-4xl sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">
            {benefitName}
          </h2>
          <div className="font-bold font-display text-md sm:text-md lg:text-md mb-2 w-44 sm:w-32 lg:w-44">
            {t[benefitSubType]}
          </div>
        </div>
        <HorizontalRule width="w-1/3" visibility="sm:hidden" />
        <div className="col-span-3 sm:grid sm:grid-cols-2">
          <div className="ml-2 sm:ml-8 mt-4 xl:mt-6">
            <p className="text-3xl sm:text-2xl lg:text-3xl mb-5">
              {t.youMightBeEligible}
            </p>
            <p className="text-xl whitespace-nowrap">{t.learnMoreAbout}</p>
            <a
              href={props.benefitApplication.learnMoreLink}
              className="text-xl underline hover:text-bright-blue-medium whitespace-pre-wrap"
            >
              {getBenefitNameString()}
            </a>
          </div>
          <div className="grid grid-cols-2 mt-6 sm:mt-2">
            {isEstimateButtonRequired() ? (
              <div className="sm:col-span-1">
                <a
                  href={props.benefitApplication.estimateLink}
                  className="font-normal float-right"
                >
                  <img src={props.benefitApplication.estimateIcon} alt="" />
                  <p className="w-36 sm:w-24 lg:w-36 font-normal text-sm pr-5 mt-3">
                    {t.estimateRetirementIncome}
                  </p>
                </a>
              </div>
            ) : (
              <div className="hidden sm:flex"></div>
            )}

            <div className="sm:col-span-1">
              <a
                href={props.benefitApplication.applicationLink}
                className="font-normal float-right"
              >
                <img src={props.benefitApplication.applyIcon} alt="" />
                <p className="w-36 sm:w-24 lg:w-36 font-normal text-sm pr-5 mt-3">
                  {`${t.applyFor} ${getBenefitNameString()}`}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitApplicationCard

BenefitApplicationCard.propTypes = {
  benefitApplication: PropTypes.shape({
    benefitType: PropTypes.string.isRequired,
    applyIcon: propTypes.string,
    learnMoreLink: propTypes.string,
    applicationLink: propTypes.string,
  }),
}
