import propTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'
import BenefitCardHeaderSummary from './BenefitCardHeaderSummary'
import StatusBadge from '../atoms/StatusBadge'
import BenefitTasks from './BenefitTasks'
import HorizontalRule from '../atoms/HorizontalRule'
import { useState } from 'react'
import ViewMoreLessButton from '../atoms/ViewMoreLessButton'

export default function UniversalBenefitCard(props) {
  const t = props.locale === 'en' ? en : fr
  const [isOpen, setIsOpen] = useState(false)
  const benefitUniqueId =
    props.benefit.programCode +
    '-' +
    props.benefit.typeCode +
    '-' +
    props.benefit.statusCode
  const benefitCardId = 'benefit-card-' + benefitUniqueId
  const taskListId = 'task-list-' + benefitUniqueId

  return (
    <div className="benefit-card" id={benefitCardId}>
      <StatusBadge status={props.benefit.statusCode} locale={props.locale} />
      <div className="px-4 md:px-6 pb-6">
        <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2">
          <div className="col-span-1 py-4 md:px-0 lg:px-2">
            <h2 className="font-bold font-display text-4xl sm:text-2xl lg:text-4xl mb-2 w-44 sm:w-32 lg:w-44">
              {t[props.benefit.programCode]}
            </h2>
          </div>

          <div className="grid col-span-3">
            <div className="grid col-span-2 gap-y-4 gap-x-1 sm:grid-cols-3 sm:pl-8 lg:pl-10 font-display">
              {props.benefit.summaries == null ||
              props.benefit.summaries.length <= 0
                ? null
                : props.benefit.summaries.map((summary, index) => {
                    return (
                      <BenefitCardHeaderSummary
                        key={index}
                        locale={props.locale}
                        summary={summary}
                      />
                    )
                  })}
            </div>
          </div>
        </div>
      </div>
      <HorizontalRule width="w-auto sm:w-full" />
      <div className="">
        <ViewMoreLessButton
          id={props.benefit.programCode + '-card-button'}
          onClick={() => {
            const newOpenState = !isOpen
            const idToScrollTo = newOpenState ? taskListId : benefitCardId
            document.getElementById(idToScrollTo).scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
            setIsOpen(newOpenState)
          }}
          icon={isOpen}
          caption={t[props.benefit.taskHeadingKey]}
        />
      </div>
      {props.benefit.taskGroups == null ||
      props.benefit.taskGroups.length <= 0 ? null : (
        <div id={taskListId}>
          {!isOpen
            ? null
            : props.benefit.taskGroups.map((taskList, index) => {
                return (
                  <div className="group" key={index}>
                    <BenefitTasks
                      isExpanded={true}
                      header={taskList.Header}
                      tasks={taskList.Tasks}
                    />
                  </div>
                )
              })}
        </div>
      )}
    </div>
  )
}

UniversalBenefitCard.propTypes = {
  locale: propTypes.string.isRequired,
  benefit: propTypes.shape({
    programCode: propTypes.string.isRequired,
    statusCode: propTypes.string.isRequired,
    summaries: propTypes.array.isRequired,
    taskGroups: propTypes.array.isRequired,
    taskHeadingKey: propTypes.string.isRequired,
  }),
}
