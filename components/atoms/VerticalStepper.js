import React from 'react'
import PropTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'

const VerticalLinearStepper = (props) => {
  const t = props.locale === 'en' ? en : fr
  const statusColor =
    props.benefitStatus === 'Active' ? 'bg-green-active' : 'bg-gray-pending'

  function StepList() {
    return props.lastUpdates.map((step) => (
      <div key={step.label.toString()} className={'py-2.5 flex w-60'}>
        <div className="v-stepper w-5">
          <div
            className={'w-3 h-3 mt-2 rounded-full ml-1/5 ' + statusColor}
          ></div>
          <div className={'w-0.5 mt-1.5 ml-[5px] h-[92%] ' + statusColor}></div>
        </div>

        <div className="ml-3 ">
          <p className="text-md font-bold">{step.label}</p>
          <p className="text-sm">{step.description}</p>
        </div>
      </div>
    ))
  }

  return (
    <div id="stepper-container">
      <h1 className="text-xl font-bold">{t.latestActivity}</h1>
      {StepList()}

      <div className={'pb-2.5 flex mt-0 h-max'}>
        <div id="v-stepper">
          <div className={'w-0.5 mt-1.5 ml-[5px] h-[92%] ' + statusColor}></div>
        </div>

        <div id="stepper-content" className="mt-1 ml-6">
          <a
            href="./dashboard"
            className="text-xs text-left text-bright-blue-solid underline"
          >
            {t.viewMyStatusAndMessages}
          </a>
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
