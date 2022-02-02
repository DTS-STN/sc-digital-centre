import React from 'react'
import PropTypes from 'prop-types'
import VerticalStepper from '../atoms/VerticalStepper'
import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from '../atoms/HorizontalRule'

const PendingBenefitDetails = (props) => {
  const t = props.locale === 'en' ? en : fr

  return (
    <section>
      <div className="flex-col ml-4 my-4 sm:m-8 sm:flex sm:flex-row">
        <VerticalStepper
          benefitStatus={props.benefit.status}
          lastUpdates={props.benefit.lastUpdates}
          locale={props.locale}
        />
        <div id="details" className="mt-4 sm:mt-0 sm:ml-20">
          <div id="application_details" className="mb-5 sm:mb-14">
            <p className="font-bold text-xl">{t.applicationDetails}</p>
            <p className="font-normal text-base">
              {props.benefit.statusDescription}
            </p>
          </div>
          <div id="application_description" className="mb-5 sm:mb-14">
            <p className="font-bold text-base">{t.applicationDescription}</p>
            <p className="text-base">{props.benefit.applicationDescription}</p>
          </div>
          <div id="additionalInformation">
            <p className="font-bold text-base">{t.additionalInformation}</p>
            <p className="text-base">{props.benefit.additionalInformation}</p>
          </div>
        </div>
      </div>
      <HorizontalRule width="w-auto sm:w-full" />
    </section>
  )
}

PendingBenefitDetails.propTypes = {
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

export default PendingBenefitDetails
