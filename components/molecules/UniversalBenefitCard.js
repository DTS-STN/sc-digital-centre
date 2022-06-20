import propTypes from 'prop-types'
import BenefitCardHeaderSummary from './BenefitCardHeaderSummary'
import StatusBadge from '../atoms/StatusBadge'
import BenefitTasks from './BenefitTasks'
import HorizontalRule from '../atoms/HorizontalRule'
import { useState } from 'react'
import ViewMoreLessButton from '../atoms/ViewMoreLessButton'
import { StatusCodes } from '../../constants/StatusCodes'
import CardHeader from '../atoms/CardHeader'

export default function UniversalBenefitCard(props) {
  const [isOpen, setIsOpen] = useState(false)

  const benefitUniqueId = `${props.benefit.programCode}-${props.benefit.typeCode}-${props.benefit.statusCode}`
  const benefitCardId = `benefit-card-${benefitUniqueId}`
  const taskListId = `task-list-${benefitUniqueId}`

  return (
    <div className={`benefit-card`} id={benefitCardId}>
      {props.benefit.statusCode != StatusCodes.activeAgreement ? (
        <StatusBadge
          status={props.statusBadge.status}
          srDescription={props.statusBadge.srDescription}
          color={props.statusBadge.color}
        />
      ) : null}
      <div className="px-6 pb-6 pt-8">
        <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2">
          <div className="col-span-1 lg:px-1">
            <CardHeader
              text={props.program}
              summary={props.summary}
              locale={props.locale}
            />
          </div>

          <div className="grid col-span-3">
            {props.benefit.summaries == null ||
            props.benefit.summaries.length <= 0 ? (
              <div className="mx-8">
                <p className="pb-5 text-lg">{props.benefitDurationReached}</p>
                <a
                  href=""
                  className="underline text-blue-default hover:text-blue-hover"
                >
                  <img
                    src="/images/dashboard/apply-for-benefit-icon.svg"
                    alt=""
                  />
                  <p className="w-36 sm:w-24 lg:w-36 pr-5 pt-3">
                    {props.applyForProgram}
                  </p>
                </a>
              </div>
            ) : (
              <ul className="grid col-span-2 gap-y-4 gap-x-1 sm:grid-cols-3 sm:pl-8 lg:pl-10 font-display">
                {props.summaries.map((summary, index) => {
                  return (
                    <BenefitCardHeaderSummary
                      key={index}
                      title={summary.title}
                      status={summary.status}
                      statusClassName={summary.statusClassName}
                      value={summary.value}
                      valueClassName={summary.valueClassName}
                      link={summary.link}
                      linkText={summary.linkText}
                    />
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
      <HorizontalRule width="w-auto sm:w-full" />
      {/* Let the ViewMoreLessButton remain generic and set the heading level outside */}
      <h4>
        <ViewMoreLessButton
          id={props.benefit.programCode + '-card-button'}
          dataTestid={benefitUniqueId}
          onClick={() => {
            const newOpenState = !isOpen
            const idToScrollTo = newOpenState ? taskListId : benefitCardId
            document.getElementById(idToScrollTo).scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
            setIsOpen(newOpenState)
          }}
          ariaExpanded={isOpen.toString()}
          icon={isOpen}
          caption={props.taskHeading}
        />
      </h4>
      <div className="flex flex-col">
        {props.taskGroups == null || props.taskGroups.length <= 0 ? null : (
          <div
            id={taskListId}
            className="grid bg-gray-lighter sm:grid-cols-1 rounded-lg"
          >
            {!isOpen ? null : (
              <div className="bg-white pb-12 rounded-lg">
                {props.taskGroups.map((taskList, index) => {
                  return (
                    <div key={index}>
                      <BenefitTasks taskList={taskList} />
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

UniversalBenefitCard.propTypes = {
  locale: propTypes.string.isRequired,
  program: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  statusBadge: propTypes.shape({
    status: propTypes.string.isRequired,
    srDescription: propTypes.string,
    color: propTypes.string.isRequired,
  }),
  benefit: propTypes.shape({
    programCode: propTypes.string.isRequired,
    statusCode: propTypes.string.isRequired,
    summaries: propTypes.array,
  }),
  taskHeading: propTypes.string,
  taskGroups: propTypes.array.isRequired,
  benefitDurationReached: propTypes.string,
  applyForProgram: propTypes.string,
  summaries: propTypes.shape({
    title: propTypes.string.isRequired,
    status: propTypes.string,
    statusClassName: propTypes.string,
    value: propTypes.string.isRequired,
    valueClassNam: propTypes.string,
    link: propTypes.string,
    linkText: propTypes.string,
  }),
}
