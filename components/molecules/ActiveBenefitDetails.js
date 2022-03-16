import React from 'react'
import PropTypes from 'prop-types'
import VerticalStepper from '../atoms/VerticalStepper'
import en from '../../locales/en'
import fr from '../../locales/fr'
import HorizontalRule from '../atoms/HorizontalRule'
import Link from 'next/link'

const ActiveBenefitDetails = (props) => {
  const t = props.locale === 'en' ? en : fr

  return (
    <section>
      <div className="flex-col ml-4 my-4 sm:m-6 sm:flex sm:flex-row">
        <div className="lg:ml-7">
          <VerticalStepper
            benefitStatus={props.benefit.status}
            lastUpdates={props.benefit.lastUpdates}
            locale={props.locale}
          />
        </div>
        <div className="flex-col mt-7 sm:mt-0 sm:ml-5 lg:ml-24">
          <p className="font-bold text-xl">{t.pensionDetails}</p>
          <div className="flex-col sm:mt-3 sm:flex sm:flex-row">
            <div>
              <div id="application_date" className="mt-4 sm:mt-0">
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
            <div className="mt-7 sm:mt-0 sm:ml-5 lg:ml-32">
              <div id="payee_address">
                <div className="flex items-center">
                  <span className="font-bold text-base">{t.payeeAddress}</span>
                  <Link href={t.editAddress}>
                    <button className="ml-4">
                      <img src={'/edit.svg'} alt="Edit" className="w-5 h-4" />
                    </button>
                  </Link>
                </div>
                <p className="text-sm">{props.benefit.payeeAddress}</p>
              </div>
              <div id="phone_number" className="mt-7 w-36">
                <div className="flex items-center">
                  <span className="font-bold text-base">
                    {t.payeePhoneNumber}
                  </span>
                  <Link href={t.editPhoneNumber}>
                    <button className="ml-4">
                      <img src={'/edit.svg'} alt="Edit" className="w-5 h-4" />
                    </button>
                  </Link>
                </div>
                <p className="text-sm">{props.benefit.payeePhoneNumber}</p>
              </div>
            </div>
            <div
              id="payment_details"
              className="w-44 mt-7 sm:mt-0 sm:ml-5 lg:ml-16 2xl:ml-32"
            >
              <div className="flex items-center">
                <span className="font-bold text-base">{t.paymentDetails}</span>
                <Link href={t.editPayment}>
                  <button className="ml-4">
                    <img src={'/edit.svg'} alt="Edit" className="w-5 h-4" />
                  </button>
                </Link>
              </div>
              <div>
                <p className="text-sm">{props.benefit.paymentType}</p>
                <p className="text-sm">{props.benefit.institutionName}</p>
                <p className="text-sm">{props.benefit.accountNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HorizontalRule width="w-auto sm:w-full" />
    </section>
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
