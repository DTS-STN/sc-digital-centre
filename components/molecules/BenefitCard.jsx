import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PendingBenefitDetails from './PendingBenefitDetails'
import ActiveBenefitDetails from './ActiveBenefitDetails'
import BenefitTasks from './BenefitTasks'
import BenefitCardHeaderActive from '../atoms/BenefitCardHeaderActive'
import BenefitCardHeaderPending from '../atoms/BenefitCardHeaderPending'
import en from '../../locales/en'
import fr from '../../locales/fr'

const BenefitCard = (props) => {
  const t = props.locale === 'en' ? en : fr
  const [isOpen, setIsOpen] = useState(false)
  const [btnCaption, setBtnCaption] = useState(t.viewMore)
  const handleClick = () => {
    setBtnCaption(isOpen ? t.viewMore : t.viewLess)
    setIsOpen(!isOpen)
  }

  const renderBenefitDetails = () => {
    switch (props.benefit.status) {
      case 'Pending':
        return (
          <>
            <PendingBenefitDetails
              benefit={props.benefit}
              locale={props.locale}
            />
            <div className="flex-grow border-t-2 border-gray-solid-400 mx-4 sm:mx-0"></div>
          </>
        )
      case 'Active':
        return (
          <>
            <ActiveBenefitDetails
              benefit={props.benefit}
              locale={props.locale}
            />
            <div className="flex-grow border-t-2 border-gray-solid-400 mx-4 sm:mx-0"></div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="layout-container py-4">
      <div className="w-full mx-auto rounded overflow-hidden shadow-lg grid grid-cols-1">
        {/* Benefit Card Header */}
        <section>
          {props.benefit.status == 'Active' ? (
            <BenefitCardHeaderActive
              benefit={props.benefit}
              locale={props.locale}
            />
          ) : (
            <BenefitCardHeaderPending
              benefit={props.benefit}
              locale={props.locale}
            />
          )}
        </section>
        {/* Pending benefits */}
        <section>
          <div className="flex-grow border-t-2 border-gray-solid-400 mx-4 sm:mx-0"></div>
          <div className="font-display text-lg ml-4 py-5 sm:ml-8">
            <span className="font-bold">
              {props.benefit.status == 'Active'
                ? t.activeBenefits
                : t.pendingBenefits}
            </span>
            <span className="ml-2">{props.benefit.pendingBenefits}</span>
          </div>
          <div className="flex-grow border-t-2 border-gray-solid-400 mx-4 sm:mx-0"></div>
        </section>

        {/* Top tasks */}
        <section>
          <BenefitTasks
            benefitType={props.benefit.benefitType}
            isExpanded={isOpen}
          />
        </section>

        {/* Benefit Card Details */}
        <div>{isOpen && renderBenefitDetails()}</div>
        <section>
          <button onClick={handleClick} className="pl-5 py-5 sm:pl-10">
            {btnCaption}
          </button>
        </section>
      </div>
    </div>
  )
}

export default BenefitCard

BenefitCard.propTypes = {
  benefit: PropTypes.shape({
    benefitType: PropTypes.oneOf(['CPP', 'OAS', 'GIS', 'EI']),
    benefitName: PropTypes.oneOf([
      'Canada Pension Plan',
      'Old Age Security',
      'Guaranteed Income Supplement',
      'Employment Insurance',
    ]),
    status: PropTypes.oneOf(['Active', 'Pending', 'Past']),
  }),
}
