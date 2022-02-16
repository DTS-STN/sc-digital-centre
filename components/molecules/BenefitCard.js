import { useState } from 'react'
import en from '../../locales/en'
import fr from '../../locales/fr'
import PropTypes from 'prop-types'
import BenefitCardHeaderActive from '../atoms/BenefitCardHeaderActive'
import BenefitCardHeaderPending from '../atoms/BenefitCardHeaderPending'
import BenefitTasks from './BenefitTasks'
import PendingBenefitDetails from './PendingBenefitDetails'
import ActiveBenefitDetails from './ActiveBenefitDetails'
import HorizontalRule from '../atoms/HorizontalRule'

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
          <PendingBenefitDetails
            benefit={props.benefit}
            locale={props.locale}
          />
        )
      case 'Active':
        return (
          <ActiveBenefitDetails benefit={props.benefit} locale={props.locale} />
        )
      default:
        return null
    }
  }

  return (
    <div className="mt-12 rounded-lg shadow-tile">
      {/* Benefit Card Header */}
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
      {/* Pending benefits */}
      <HorizontalRule width="w-auto sm:w-full" />
      <div className="font-display text-lg ml-4 py-5 sm:ml-8">
        <span className="font-bold">
          {props.benefit.status == 'Active'
            ? t.activeBenefits
            : t.pendingBenefits}
        </span>
        <span className="ml-2">{props.benefit.pendingBenefits}</span>
      </div>
      <HorizontalRule width="w-auto sm:w-full" />

      {/* Top tasks */}
      <section>
        <BenefitTasks
          benefitType={props.benefit.benefitType}
          isExpanded={isOpen}
          tasks={props.tasks}
        />
      </section>

      {/* Benefit Card Details */}
      {isOpen && renderBenefitDetails()}
      <button onClick={handleClick} className="pl-5 py-5 sm:pl-10">
        {btnCaption}
      </button>
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
