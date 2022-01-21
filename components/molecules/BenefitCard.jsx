import React, { useState } from 'react'
import PropTypes from 'prop-types'
import OasBenefitCard from './OasBenefitCard'
import BenefitCardHeader from '../atoms/BenefitCardHeader'
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
    switch (props.benefit.benefitType) {
      case 'CPP':
      case 'OAS':
        return (
          <OasBenefitCard
            oldAgeSecurity={props.benefit}
            locale={props.locale}
          />
        )
      case 'EI':
      case 'GIS':
      default:
        return null
    }
  }

  return (
    <div className="layout-container py-4">
      <div className="w-12/12 mx-auto rounded overflow-hidden shadow-lg grid grid-cols-1 divide-y divide-grey-500">
        {/* Benefit Card Header */}
        <section>
          <BenefitCardHeader benefit={props.benefit} locale={props.locale} />
        </section>

        {/* Pending benefits */}
        <section>
          <div className="font-display text-lg ml-10 py-5">
            <span className="font-bold">{t.pendingBenefits}</span>
            <span className="ml-2">{props.benefit.pendingBenefits}</span>
          </div>
        </section>

        {/* Top tasks */}
        <section>
          <div className="mt-5">
            <div className="pl-10 pt-5 h-32 bg-gray-solid">
              All {props.benefit.benefitType} tasks
            </div>
          </div>
        </section>

        {/* Benefit Card Details */}
        <div>{isOpen && renderBenefitDetails()}</div>
        <section>
          <button onClick={handleClick} className="px-10 py-5">
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
