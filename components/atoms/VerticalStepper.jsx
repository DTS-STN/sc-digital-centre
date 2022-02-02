import React from 'react'
import PropTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'

const VerticalLinearStepper = (props) => {
  const t = props.locale === 'en' ? en : fr
  function StepList() {
    return props.lastUpdates.map((step) => (
      <div
        key={step.label.toString()}
        className={'step ' + props.benefitStatus.toLowerCase()}
      >
        <div className="v-stepper">
          <div className="circle"></div>
          <div className="line"></div>
        </div>

        <div className="stepper-content">
          <p>{step.label}</p>
          <p>{step.description}</p>
        </div>
      </div>
    ))
  }

  function onClick() {
    console.log('View all activity button is Clicked')
  }

  return (
    <div className="stepper-container">
      <h1>{t.latestActivity}</h1>
      {StepList()}

      <div className={'step ' + props.benefitStatus.toLowerCase()}>
        <div className="v-stepper">
          <div className="line"></div>
        </div>

        <div className="stepper-content">
          <button onClick={onClick}>
            <a
              href={'./dashboard'}
              className="text-xs text-bright-blue-solid underline"
            >
              {t.viewAllActivityButton}
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

VerticalLinearStepper.propTypes = {
  benefitStatus: PropTypes.oneOf(['Active', 'Pending']),
  lastUpdates: PropTypes.array,
}

export default VerticalLinearStepper
