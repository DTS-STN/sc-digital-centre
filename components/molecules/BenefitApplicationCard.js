import en from '../../locales/en'
import fr from '../../locales/fr'
import PropTypes from 'prop-types'
import HorizontalRule from '../atoms/HorizontalRule'
import propTypes from 'prop-types'
import { ProgramCodes } from '../../constants/ProgramCodes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStamp } from '@fortawesome/free-solid-svg-icons'

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
    <div className="benefit-card" data-cy="adcard">
      <div className="flex flex-col pt-6">
        <div
          id={`${benefitType}-${benefitSubType}-app-card`}
          className="col-span-1 py-4  px-4 sm:px-16 pt-6"
        >
          <h2 className="font-bold font-display text-4xl sm:text-6xl">
            {benefitName}
          </h2>
          <div className="font-bold font-display text-md sm:text-md lg:text-md mb-2 w-44 sm:w-32 lg:w-44 ">
            {t[benefitSubType]}
          </div>
          <ul className="pb-6 sm:mb-7">
            <li>
              <p className="text-xl">{t.status}</p>
              <p className="text-3xl font-bold mb-5 ">{t.youMightBeEligible}</p>
            </li>
          </ul>
        </div>
        <HorizontalRule />
        <div className="flex flex-col ">
          <div className="flex flex-col py-4  px-4 sm:px-16">
            {isEstimateButtonRequired() ? (
              <div className="my-4">
                <a
                  href={props.benefitApplication.estimateLink}
                  className="flex items-center underline  text-blue-default hover:text-blue-hover"
                >
                  <FontAwesomeIcon icon={faStamp} className="text-3xl pr-4 " />
                  <p className="font-normal text-xl pr-5 my-3 ">
                    {t.estimateRetirementIncome}
                  </p>
                </a>
              </div>
            ) : (
              <div className="hidden sm:flex"></div>
            )}

            <div className="my-4 ">
              <a
                href={props.benefitApplication.applicationLink}
                className="flex items-center underline  text-blue-default hover:text-blue-hover"
              >
                <FontAwesomeIcon icon={faStamp} className="text-3xl pr-4 " />
                <p className="font-normal text-xl pr-5 mt-3 ">
                  {`${t.applyFor} ${getBenefitNameString()}`}
                </p>
              </a>
            </div>
          </div>

          <HorizontalRule />
          <div className="my-10 px-4 sm:px-16">
            <p className="text-xl whitespace-nowrap ">
              {t.learnMoreAbout}
              <span>
                {' '}
                <a
                  href={props.benefitApplication.learnMoreLink}
                  className="text-xl underline hover:text-bright-blue-medium whitespace-pre-wrap "
                >
                  {getBenefitNameString()}
                </a>
              </span>
            </p>
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
