import React from 'react'
import PropTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from '../atoms/HorizontalRule'
import BenefitDetailPart from '../atoms/BenefitDetailPart'

const ActiveBenefitDetails = (props) => {
  const t = props.locale === 'en' ? en : fr

  return (
    <div>
      <section className="bg-gray-lighter px-8 py-6">
        <h3 className="font-bold text-xl">{t.accountDetails}</h3>
        <div className="grid md:grid-cols-3 md:gap-36 gap-8 pt-4">
          <BenefitDetailPart
            locale={props.locale}
            id="payee_address"
            title={t.payeeAddress}
            editLink={t.editAddress}
            content={
              props.benefit.payeeAddress
                ? props.benefit.payeeAddress
                : t.addYourAddress
            }
          />
          <BenefitDetailPart
            locale={props.locale}
            id="phone_number"
            title={t.payeePhoneNumber}
            editLink={t.editPhoneNumber}
            content={props.benefit.payeePhoneNumber}
          />
          <BenefitDetailPart
            locale={props.locale}
            id="payment_details"
            title={t.paymentDetails}
            editLink={t.editPayment}
          >
            {props.benefit.paymentType} <br />
            {props.benefit.institutionName} {props.benefit.accountNumber}
          </BenefitDetailPart>
        </div>
      </section>
      <HorizontalRule width="w-auto sm:w-full" />
    </div>
  )
}

ActiveBenefitDetails.propTypes = {
  benefit: PropTypes.shape({
    benefitType: PropTypes.string,
    benefitName: PropTypes.string,
    status: PropTypes.oneOf(['Active', 'Pending']),
    statusDesciption: PropTypes.string,
    applicationDate: PropTypes.string,
    applicationType: PropTypes.string,
    applicationDescription: PropTypes.string,
    withdrawalRequest: PropTypes.string,
    withdrawalStatus: PropTypes.string,
    withdrawalRequestDescription: PropTypes.string,
    applictionWithdrawn: PropTypes.string,
    additionalInformation: PropTypes.string,
  }),
}

export default ActiveBenefitDetails
