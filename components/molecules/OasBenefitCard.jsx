import React from 'react'
import PropTypes from 'prop-types'
import VerticalStepper from '../atoms/VerticalStepper'
import en from '../../locales/en'
import fr from '../../locales/fr'

const OasBenefitCard = (props) => {
  const t = props.locale === 'en' ? en : fr

  return (
    <div className="grid grid-cols-1 divide-y divide-grey-500 font-display my-4">
      <section>
        <div className="sm:flex sm:justify-around sm:grid sm:grid-cols-7 sm:gap-4 sm:mx-auto sm:mt-4">
          <div
            id="right"
            className="col-span-2 sm:col-span-3 lg:col-span-2 sm:w-60 ml-7 mb-6 sm:mb-3"
          >
            <VerticalStepper
              benefitStatus={props.oldAgeSecurity.status}
              lastUpdates={props.oldAgeSecurity.lastUpdates}
              locale={props.locale}
            />
          </div>

          <div
            id="left"
            className="col-span-5 sm:col-span-4 lg:col-span-5 sm:grid sm:grid-cols-2 mr-5"
          >
            <div
              id="application_details"
              className="sm:col-span-2 ml-5 mb-5 sm:mb-0"
            >
              <p className="font-bold text-xl">{t.applicationDetails}</p>
              <p className="font-normal text-base">
                {props.oldAgeSecurity.statusDescription}
              </p>
            </div>
            <div
              id="application_date"
              className="sm:col-span-1 ml-5 mb-5 sm:mb-0"
            >
              <p className="font-bold text-base">{t.applicationDate}</p>
              <p className="text-base">
                {props.oldAgeSecurity.applicationDate}
              </p>
            </div>
            <div
              id="application_description"
              className="sm:col-span-1 mb-5 sm:mb-0 ml-5 sm:ml-0"
            >
              <p className="font-bold text-base">{t.applicationDescription}</p>
              <p className="text-base">
                {props.oldAgeSecurity.applicationDescription}
              </p>
            </div>
            <div id="left" className="sm:col-span-2 ml-5 mb-5 sm:mb-0">
              <p className="font-bold text-base">{t.additionalInformation}</p>
              <p className="text-base">
                {props.oldAgeSecurity.additionalInformation}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

OasBenefitCard.propTypes = {
  oldAgeSecurity: PropTypes.shape({
    benefitType: PropTypes.string,
    benefitName: PropTypes.string,
    status: PropTypes.oneOf(['Active', 'Pending']),
    statusDesciption: PropTypes.string,
    applicationdate: PropTypes.date,
    applicationType: PropTypes.string,
    applicationDescription: PropTypes.string,
    withdrawalRequest: PropTypes.string,
    withdrawalStatus: PropTypes.string,
    withdrawalRequestDescription: PropTypes.string,
    applictionWithdrawn: PropTypes.string,
    additionalInformation: PropTypes.string,
  }),
}

export default OasBenefitCard
