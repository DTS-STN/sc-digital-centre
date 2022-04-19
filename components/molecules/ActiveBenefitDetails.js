import React from 'react'
import PropTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from '../atoms/HorizontalRule'
import Link from 'next/link'

const ActiveBenefitDetails = (props) => {
  const t = props.locale === 'en' ? en : fr

  return (
    <div>
      <section className="bg-gray-lighter px-8 py-6">
        <h3 className="font-bold text-xl">{t.accountDetails}</h3>
        <div className="grid grid-cols-3 gap-36 pt-4">
          <div id="payee_address">
            <h4 className="font-medium text-large inline">{t.payeeAddress}</h4>
            <a
              href={t.editAddress}
              className="float-right font-medium text-sm underline text-link-blue-default hover:text-link-blue-hover"
            >
              <img
                src={'/edit.svg'}
                alt=""
                className="w-6 h-6 pb-1  pr-2 inline"
              />
              {t.edit}
            </a>
            <p>
              <a
                href={t.editAddress}
                className="font-medium text-base underline text-link-blue-default hover:text-link-blue-hover"
              >
                {props.benefit.payeeAddress
                  ? props.benefit.payeeAddress
                  : t.addYourAddress}
              </a>
            </p>
          </div>
          <div id="phone_number">
            <h4 className="font-medium text-large inline">
              {t.payeePhoneNumber}
            </h4>
            <a
              href={t.editPhoneNumber}
              className="float-right font-medium text-sm underline text-link-blue-default hover:text-link-blue-hover"
            >
              <img
                src={'/edit.svg'}
                alt=""
                className="w-6 h-6 pb-1 pr-2 inline"
              />
              {t.edit}
            </a>
            <p>
              <a
                href={t.editPhoneNumber}
                className="underline text-link-blue-default hover:text-link-blue-hover"
              >
                {props.benefit.payeePhoneNumber}
              </a>
            </p>
          </div>

          <div id="payment_details">
            <h4 className="font-medium text-large inline">
              {t.paymentDetails}
            </h4>
            <a
              href={t.editPayment}
              className="float-right font-medium text-sm underline text-link-blue-default hover:text-link-blue-hover"
            >
              <img
                src={'/edit.svg'}
                alt=""
                className="w-6 h-6 pb-1 pr-2 inline"
              />
              {t.edit}
            </a>
            <p>
              <a
                href={t.editPayment}
                className="underline text-link-blue-default hover:text-link-blue-hover"
              >
                {props.benefit.paymentType} <br />
                {props.benefit.institutionName} {props.benefit.accountNumber}
              </a>
            </p>
          </div>
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
