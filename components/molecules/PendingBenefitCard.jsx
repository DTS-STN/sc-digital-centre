import React from 'react'
import PropTypes from 'prop-types'
import VerticalStepper from '../atoms/VerticalStepper'
import en from '../../locales/en'
import fr from '../../locales/fr'

const PendingBenefitCard = (props) => {
  const t = props.locale === 'en' ? en : fr

  return (
    <div className="grid grid-cols-1 divide-y divide-grey-500 my-4">
      <section>
        <div className="sm:grid sm:grid-cols-7 sm:mx-auto sm:mt-4">
          <div
            id="claimUpdates"
            className="col-span-2 mb-3 sm:col-span-3 lg:col-span-2 sm:w-60 sm:ml-7"
          >
            <VerticalStepper
              benefitStatus={props.benefit.status}
              lastUpdates={props.benefit.lastUpdates}
              locale={props.locale}
            />
          </div>

          <div
            id="details"
            className="col-span-5 sm:col-span-4 lg:col-span-5 sm:grid mr-5"
          >
            <div id="application_details" className="ml-5 mb-5 sm:mb-0">
              <p className="font-bold text-xl">{t.applicationDetails}</p>
              <p className="font-normal text-base">
                {props.benefit.statusDescription}
              </p>
            </div>
            <div id="application_description" className="ml-5 mb-5 sm:mb-0">
              <p className="font-bold text-base">{t.applicationDescription}</p>
              <p className="text-base">
                {props.benefit.applicationDescription}
              </p>
            </div>
            <div id="additionalInformation" className="ml-5 mb-5 sm:mb-0">
              <p className="font-bold text-base">{t.additionalInformation}</p>
              <p className="text-base">{props.benefit.additionalInformation}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

PendingBenefitCard.propTypes = {
  benefit: PropTypes.shape({
    benefitType: PropTypes.string,
    benefitName: PropTypes.string,
    status: PropTypes.oneOf(['Active', 'Pending']),
    statusDesciption: PropTypes.string,
    applicationType: PropTypes.string,
    applicationDescription: PropTypes.string,
    additionalInformation: PropTypes.string,
  }),
}

export default PendingBenefitCard
