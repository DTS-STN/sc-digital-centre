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
  const [btnCaption, setBtnCaption] = useState(t.exploreCommonActions)
  const topOfCardRef = useRef(null)
  const topOfTaskRef = useRef(null)
  const handleClick = () => {
    setBtnCaption(isOpen ? t.exploreCommonActions : t.viewLess)
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
        <BenefitTasks taskList={props.benefit.taskList} locale={props.locale} />
      </div>

      {props.benefit.tasks?.length > 6 && (
        <ViewMoreLessButton
          id={props.benefit.benefitType + '-card-button'}
          onClick={() => {
            handleClick()
            scrollTo()
          }}
          icon={isOpen}
          caption={btnCaption}
          className="py-5 pl-2 md:pl-6"
        />
      )}
    </div>
  )
}
export default NoBenefitCard

NoBenefitCard.propTypes = {
  benefit: PropTypes.shape({
    benefitType: PropTypes.oneOf(['cpp', 'oas', 'gis', 'ei', 'cppd']),
  }),
}
