import propTypes from 'prop-types'
import BenefitCardHeaderSummary from './BenefitCardHeaderSummary'
import StatusBadge from '../atoms/StatusBadge'
import BenefitTasks from './BenefitTasks'
import HorizontalRule from '../atoms/HorizontalRule'
import { useState } from 'react'
import ViewMoreLessButton from '../atoms/ViewMoreLessButton'
import CardHeader from '../atoms/CardHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStamp } from '@fortawesome/free-solid-svg-icons'

export default function UniversalBenefitCard(props) {
  const [isOpen, setIsOpen] = useState(false)

  const benefitCardId = `benefit-card-${props.benefitUniqueId}`
  const taskListId = `task-list-${props.benefitUniqueId}`

  return (
    <div
      className={`benefit-card`}
      id={benefitCardId}
      data-testid={benefitCardId}
    >
      <div className="h-10">
        <StatusBadge
          status={props.statusBadge.status}
          srDescription={props.statusBadge.srDescription}
          color={props.statusBadge.color}
          hidden={props.statusBadge.hidden}
        />
      </div>
      <div className="px-4 sm:px-16">
        <CardHeader
          text={props.program}
          summary={props.summary}
          locale={props.locale}
        />
        <ul className="pb-10 sm:mb-7">
          <li>
            <p className="text-xl">{props.callout.label}</p>
            <p className="text-3xl font-bold">{props.callout.text}</p>
          </li>
        </ul>
      </div>
      <HorizontalRule />
      <div className="px-4 sm:px-16">
        {props.summaries == null || props.summaries.length <= 0 ? (
          <div className="my-10">
            <a
              href=""
              className="flex items-center underline text-blue-default hover:text-blue-hover"
            >
              <FontAwesomeIcon icon={faStamp} className="text-3xl pr-4 " />
              <p className="w-full font-normal text-xl">
                {props.applyForProgram}
              </p>
            </a>
          </div>
        ) : (
          <ul className="grid sm:grid-cols-3 sm:gap-4 lg:gap-7 py-6 sm:pt-2">
            {props.summaries.map((summary, index) => {
              return (
                <BenefitCardHeaderSummary
                  key={index}
                  title={summary.title}
                  status={summary.status}
                  value={summary.value}
                  link={summary.link}
                  linkText={summary.linkText}
                  valueStyle={summary.valueStyle}
                />
              )
            })}
          </ul>
        )}
      </div>
      <HorizontalRule width="w-auto sm:w-full" />
      {/* Let the ViewMoreLessButton remain generic and set the heading level outside */}
      <h3>
        <ViewMoreLessButton
          id={props.benefitUniqueId + '-card-button'}
          dataTestid={props.benefitUniqueId}
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
      </h3>
      <div className=" flex flex-col bg-white  rounded-b-xl">
        {props.taskGroups == null || props.taskGroups.length <= 0 ? null : (
          <div id={taskListId} className="  ">
            {!isOpen ? null : (
              <div className="pb-12">
                <div className="bg-gray-lighter grid grid-rows-1 md:grid-cols-2">
                  {props.taskGroups.map((taskList, index) => {
                    return (
                      <div
                        className="border-b-2 last:border-b-0 md:border-b-0 md:odd:border-r-2  my-4 pl-2 sm:pl-8"
                        key={index}
                      >
                        <BenefitTasks taskList={taskList} />
                      </div>
                    )
                  })}
                </div>
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
  benefitUniqueId: propTypes.string.isRequired,
  statusBadge: propTypes.shape({
    status: propTypes.string.isRequired,
    srDescription: propTypes.string,
    color: propTypes.string.isRequired,
    hidden: propTypes.bool,
  }).isRequired,
  taskHeading: propTypes.string.isRequired,
  taskGroups: propTypes.array.isRequired,
  benefitDurationReached: propTypes.string,
  applyForProgram: propTypes.string,
  summaries: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      status: propTypes.string,
      value: propTypes.string.isRequired,
      link: propTypes.string,
      linkText: propTypes.string,
      valueStyle: propTypes.string,
    })
  ),
  callout: propTypes.shape({
    label: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
  }).isRequired,
}
