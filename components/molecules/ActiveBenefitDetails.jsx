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
            id="vertical_stepper"
            className="col-span-2 sm:col-span-3 lg:col-span-2 sm:w-60 sm:ml-7 mb-6 sm:mb-3"
          >
            <VerticalStepper
              benefitStatus={props.benefit.status}
              lastUpdates={props.benefit.lastUpdates}
              locale={props.locale}
            />
          </div>

          <div
            id="details"
            className="col-span-5 sm:col-span-4 lg:col-span-5 sm:grid sm:grid-cols-3 mr-5"
          >
            <p className="font-bold text-xl col-span-3 ml-10 sm:ml-0">
              {t.pensionDetails}
            </p>
            <div className="sm:col-span-1 ml-10 sm:ml-0 mb-5 sm:mb-0">
              <div id="application_date" className="mt-5 sm:mt-0">
                <p className="font-bold text-base">{t.nextPayment}</p>
                <p className="text-sm">{props.benefit.nextPaymentDate}</p>
              </div>
              <div id="last_payment" className="mt-7">
                <p className="font-bold text-base">{t.lastPayment}</p>
                <p className="text-sm">{props.benefit.lastPaymentDate}</p>
              </div>
              <div id="pension_start_date" className="mt-7">
                <p className="font-bold text-base">
                  {props.benefit.benefitType != 'EI'
                    ? t.pensionStartDate
                    : t.benefitStartDate}
                </p>
                <p className="text-sm">
                  {props.benefit.benefitType != 'EI'
                    ? props.benefit.pensionStartDate
                    : props.benefit.benefitStartDate}
                </p>
              </div>
            </div>
            <div className="sm:col-span-1 ml-10 sm:ml-0 mb-5 sm:mb-0 sm:w-24 lg:w-48">
              <div id="payee_address">
                <span className="font-bold text-base">{t.payeeAddress}</span>
                {props.benefit.payeeAddress != '' ? (
                  <button className="ml-5">
                    <img src={'/edit.svg'} alt="Edit" className="w-5 h-4" />
                  </button>
                ) : (
                  <br />
                )}
                {props.benefit.payeeAddress != '' ? (
                  <p className="text-base">{props.benefit.payeeAddress}</p>
                ) : (
                  <a
                    href={'./dashboard'}
                    className="text-sm text-bright-blue-solid underline"
                  >
                    {t.addYourAddress}
                  </a>
                )}
              </div>
              <div id="phone_number" className="mt-7">
                <span className="font-bold text-base">
                  {t.payeePhoneNumber}
                </span>
                {props.benefit.payeePhoneNumber != '' ? (
                  <button className="ml-5">
                    <img src={'/edit.svg'} alt="Edit" className="w-5 h-4" />
                  </button>
                ) : (
                  <br />
                )}
                {props.benefit.payeePhoneNumber != '' ? (
                  <p className="text-sm">{props.benefit.payeePhoneNumber}</p>
                ) : (
                  <a
                    href={'./dashboard'}
                    className="text-sm text-bright-blue-solid underline"
                  >
                    {t.addYourPhoneNumber}
                  </a>
                )}
              </div>
            </div>
            <div id="payment_details" className="ml-10 sm:ml-0">
              <span className="font-bold text-base">{t.paymentDetails}</span>
              {props.benefit.paymentType != '' ? (
                <button className="ml-5">
                  <img src={'/edit.svg'} alt="Edit" className="w-5 h-4" />
                </button>
              ) : (
                <br />
              )}
              {props.benefit.paymentType != '' ? (
                <div>
                  <p className="text-sm">{props.benefit.paymentType}</p>
                  <p className="text-sm">{props.benefit.institutionName}</p>
                  <p className="text-sm">{props.benefit.accountNumber}</p>
                </div>
              ) : (
                <a
                  href={'./dashboard'}
                  className="text-sm text-bright-blue-solid underline"
                >
                  {t.addYourPaymentDetails}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

OasBenefitCard.propTypes = {
  benefit: PropTypes.shape({
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
