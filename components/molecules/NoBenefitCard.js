import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import NoBenefitCardHeader from '../atoms/NoBenefitCardHeader'
import BenefitTasks from './BenefitTasks'
import en from '../../locales/en'
import fr from '../../locales/fr'
import ViewMoreLessButton from '../atoms/ViewMoreLessButton'

const NoBenefitCard = (props) => {
  const t = props.locale === 'en' ? en : fr
  const [isOpen, setIsOpen] = useState(false)
  const [btnCaption, setBtnCaption] = useState(t.viewMore)
  const topOfCardRef = useRef(null)
  const topOfTaskRef = useRef(null)
  const handleClick = () => {
    setBtnCaption(isOpen ? t.viewMore : t.viewLess)
    setIsOpen(!isOpen)
  }

  const scrollTo = () => {
    if (!topOfTaskRef.current || !topOfCardRef.current) return
    isOpen
      ? topOfCardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      : topOfTaskRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
  }

  return (
    <div className="benefit-card" ref={topOfCardRef}>
      {/* NoBenefit Card Header */}
      <NoBenefitCardHeader benefit={props.benefit} locale={props.locale} />

      {/* Top tasks */}
      <div ref={topOfTaskRef}>
        <BenefitTasks
          benefitType={props.benefit.benefitType}
          isExpanded={isOpen}
          tasks={props.benefit.tasks}
          locale={props.locale}
          noBenefit={true}
        />
      </div>

      {props.benefit.tasks?.length > 6 && (
        <ViewMoreLessButton
          id={props.benefit.benefitType + '-card-button'}
          onClick={() => {
            handleClick()
            scrollTo()
          }}
          plus={isOpen}
          caption={btnCaption}
        />
      )}
    </div>
  )
}
export default NoBenefitCard

NoBenefitCard.propTypes = {
  benefit: PropTypes.shape({
    benefitType: PropTypes.oneOf(['CPP', 'OAS', 'GIS', 'EI', 'CPPD']),
  }),
}
