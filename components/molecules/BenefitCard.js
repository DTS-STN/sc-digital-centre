import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import BenefitCardHeaderActive from '../atoms/BenefitCardHeaderActive'
import BenefitCardHeaderInactive from '../atoms/BenefitCardHeaderInactive'
import BenefitCardHeaderPending from '../atoms/BenefitCardHeaderPending'
import BenefitCardHeaderActiveAgreement from '../atoms/BenefitCardHeaderActiveAgreement'
import BenefitTasks from './BenefitTasks'
import HorizontalRule from '../atoms/HorizontalRule'
import BenefitStatus from '../../constants/BenefitStatus'
import en from '../../locales/en'
import fr from '../../locales/fr'
import ViewMoreLessButton from '../atoms/ViewMoreLessButton'
import { getBenefitType } from '../organisms/DashboardUtils'
import BenefitCode from '../../constants/BenefitCode'

const BenefitCard = (props) => {
  const t = props.locale === 'en' ? en : fr
  const [isOpen, setIsOpen] = useState(false)
  const [btnCaption, setBtnCaption] = useState(t.viewMore)
  const topOfCardRef = useRef(null)
  const topOfTaskRef = useRef(null)
  const handleClick = () => {
    setBtnCaption(isOpen ? t.viewMore : t.viewLess)
    setIsOpen(!isOpen)
  }

  const getBenefitTypeName = () => {
    let benefitType
    if (props.benefit.benefitType === BenefitCode.cpp && props.activeCppApi) {
      //benefit type is mapped benefitType to for active cpp
      benefitType = getBenefitType(props.activeCppApi.benefitType)
    } else if (
      props.benefit.benefitType === BenefitCode.ei &&
      props.activeEiApi
    ) {
      //benefit type is mapped enmBenefitType to for active ei
      benefitType = getBenefitType(props.activeEiApi.enmBenefitType)
    } else {
      //benefit type when is not coming from API, eventually this should be replaced with value from an API e.g active cppd, OAS, etc...
      return props.benefit.pendingBenefits
    }
    return benefitType.map((i) => i.nameEn).toString()
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

  const renderBenefitHeader = () => {
    switch (props.benefit.status.toUpperCase()) {
      case BenefitStatus.active.toUpperCase():
        return (
          <BenefitCardHeaderActive
            benefit={props.benefit}
            activeCppApi={props.activeCppApi}
            activeEiApi={props.activeEiApi}
            locale={props.locale}
          />
        )
      case BenefitStatus.pending.toUpperCase():
        return (
          <BenefitCardHeaderPending
            benefit={props.benefit}
            locale={props.locale}
          />
        )
      case BenefitStatus.inactive.toUpperCase():
        return (
          <BenefitCardHeaderInactive
            benefit={props.benefit}
            locale={props.locale}
          />
        )
      case BenefitStatus.activeAgreement.toUpperCase():
        return (
          <BenefitCardHeaderActiveAgreement
            benefit={props.benefit}
            locale={props.locale}
          />
        )
      default:
        return null
    }
  }

  const renderBenefitStatus = () => {
    switch (props.benefit.status.toUpperCase()) {
      case BenefitStatus.active.toUpperCase():
        return (
          <>
            <span className="font-bold">{t.activeBenefits}</span>
            <span className="ml-2">{getBenefitTypeName()}</span>
          </>
        )
      case BenefitStatus.pending.toUpperCase():
        return (
          <>
            <span className="font-bold">{t.pendingBenefits}</span>
            <span className="ml-2">{props.benefit.pendingBenefits}</span>
          </>
        )
      case BenefitStatus.inactive.toUpperCase():
        return (
          <span className="font-bold">
            {`You have no active ${props.benefit.benefitType} benefit`}
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="benefit-card" ref={topOfCardRef}>
      {/* Benefit Card Header */}
      {renderBenefitHeader()}

      {/* Pending benefits */}
      <HorizontalRule width="w-auto sm:w-full" />
      {renderBenefitStatus() != null ? (
        <>
          <div className="font-display text-lg ml-4 py-5 sm:ml-8">
            {renderBenefitStatus()}
          </div>
          <HorizontalRule width="w-auto sm:w-full" />
        </>
      ) : null}

      {!(
        props.benefit.status.toUpperCase() ===
          BenefitStatus.inactive.toUpperCase() &&
        props.benefit.tasks?.length < 6
      ) && (
        <ViewMoreLessButton
          id={props.benefit.benefitType + '-card-button'}
          onClick={() => {
            handleClick()
            scrollTo()
          }}
          icon={isOpen}
          caption={btnCaption}
        />
      )}

      {/* Top tasks */}
      <div
        ref={topOfTaskRef}
        className={` ${
          props.benefit.taskGroups ? 'grid sm:grid-cols-2 bg-gray-lighter' : ''
        }`}
      >
        {!props.benefit.taskGroups ? (
          <BenefitTasks
            benefitType={props.benefit.benefitType}
            isExpanded={isOpen}
            tasks={props.benefit.tasks}
          />
        ) : !isOpen ? null : (
          props.benefit.tasks.map((value, index) => {
            return (
              <div key={index}>
                <BenefitTasks
                  benefitType={props.benefit.benefitType}
                  isExpanded={true}
                  header={t[value.Header]}
                  tasks={value.Tasks}
                  locale={props.locale}
                />
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default BenefitCard

BenefitCard.propTypes = {
  benefit: PropTypes.shape({
    benefitType: PropTypes.oneOf(['CPP', 'OAS', 'GIS', 'EI', 'CPPD', 'SEB']),
    benefitName: PropTypes.oneOf([
      'Canada Pension Plan',
      'Old Age Security',
      'Guaranteed Income Supplement',
      'Employment Insurance',
      'Canada Pension Plan Disability',
      'Self Employment Benefits',
    ]),
    status: PropTypes.oneOf([
      'Active',
      'Pending',
      'Inactive',
      'ActiveAgreement',
    ]),
  }),
}
