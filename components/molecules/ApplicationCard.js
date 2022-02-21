import en from '../../locales/en'
import fr from '../../locales/fr'
import PropTypes from 'prop-types'
import HorizontalRule from '../atoms/HorizontalRule'
import propTypes from 'prop-types'

const ApplicationCard = (props) => {
  const t = props.locale === 'en' ? en : fr

  return (
    <div className="mt-12 rounded-lg shadow-tile">
      <div className="px-4 md:px-6 py-7">
        <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2">
          <div id="benefitName" className="col-span-1 py-4 md:px-0 lg:px-3">
            <div className="font-bold font-display text-4xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 w-44 sm:w-32 lg:w-44">
              {props.benefitApplication.benefitName}
            </div>
          </div>
          <HorizontalRule width="w-1/3" visibility="sm:hidden" />
          <div className="col-span-3 sm:grid sm:grid-cols-2">
            <div className="ml-8 mt-10">
              <p className="text-3xl mb-5">{t.youMightBeEligible}</p>
              <a className="text-xl">{t.learnMoreAbout}</a>
              <a
                href={props.benefitApplication.learnMoreLink}
                className="text-xl underline hover:text-bright-blue-solid"
              >
                {props.benefitApplication.benefitName}
              </a>
            </div>
            <div className="grid grid-cols-2">
              {props.benefitApplication.benefitType == 'CPP' ||
              props.benefitApplication.benefitType == 'OAS' ? (
                <div className="sm:col-span-1">
                  <a
                    href={props.benefitApplication.estimateLink}
                    className="font-normal float-right"
                  >
                    <img src={props.benefitApplication.estimateIcon} alt="" />
                    <p className="w-36 sm:w-24 lg:w-36 font-normal text-sm pr-5">
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
                  <p className="w-36 sm:w-24 lg:w-36 font-normal text-sm pr-5">
                    Apply for {props.benefitApplication.benefitName}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationCard

ApplicationCard.propTypes = {
  benefitApplication: PropTypes.shape({
    benefitType: PropTypes.oneOf(['CPP', 'OAS', 'GIS', 'EI']),
    benefitName: PropTypes.oneOf([
      'Canada Pension Plan',
      'Old Age Security',
      'Guaranteed Income Supplement',
      'Employment Insurance',
    ]),
    applyIcon: propTypes.string,
    learnMoreLink: propTypes.string,
    applicationLink: propTypes.string,
  }),
}
