import propTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'
import BenefitCardHeaderSummary from './BenefitCardHeaderSummary'
import StatusBadge from '../atoms/StatusBadge'
import BenefitTasks from './BenefitTasks'
import HorizontalRule from '../atoms/HorizontalRule'
import { useState } from 'react'
import ViewMoreLessButton from '../atoms/ViewMoreLessButton'
import { StatusCodes } from '../../constants/StatusCodes'

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
  //needed to flip the order of where the screen read only text is placed in relation to the header without injecting html though lanuage provider
  const programSummaryHeader = () => {
    return props.locale === 'en' ? (
      <>
        {t[props.benefit.programCode]}
        <span className="sr-only">{t.summary}</span>
      </>
    ) : (
      <>
        <span className="sr-only">{t.summary}</span>
        {t[props.benefit.programCode]}
      </>
    )
  }

  return (
    <div className={`benefit-card`} id={benefitCardId}>
      {props.benefit.statusCode != StatusCodes.activeAgreement ? (
        <StatusBadge
          status={
            <>
              <span className="sr-only">{t[props.benefit.programCode]} </span>
              t[props.benefit.statusCode]
            </>
          }
          color={
            props.benefit.statusCode === StatusCodes.inPayment
              ? 'bg-status-inPayment'
              : props.benefit.statusCode === StatusCodes.benefitUpdate
              ? 'bg-status-benefitUpdate'
              : props.benefit.statusCode === StatusCodes.applicationReceived ||
                props.benefit.statusCode === StatusCodes.decisionSent
              ? 'bg-status-applicationReceived'
              : props.benefit.statusCode == StatusCodes.paymentHold
              ? 'bg-status-hold'
              : 'bg-status-inactive'
          }
        />
      ) : null}
      <div className="px-6 pb-6 pt-8">
        <div className="mx-auto sm:grid sm:grid-cols-4 sm:divide-x-2">
          <div className="col-span-1 lg:px-1">
            <h3 className="font-bold font-display text-4xl sm:text-lg md:text-xl lg:text-3xl xl:text-4xl mb-2">
              {programSummaryHeader()}
            </h3>
          </div>

          <div className="grid col-span-3">
            {props.benefit.summaries == null ||
            props.benefit.summaries.length <= 0 ? (
              <div className="mx-8">
                <p className="pb-5 text-lg">{t.benefitDurationReached}</p>
                <a
                  href=""
                  className="underline text-link-blue-default hover:text-link-blue-hover"
                >
                  <img
                    src="/images/dashboard/apply-for-benefit-icon.svg"
                    alt=""
                  />
                  <p className="w-36 sm:w-24 lg:w-36 pr-5 pt-3">
                    {`${t.applyFor} ${t[props.benefit.programCode]}`}
                  </p>
                </a>
              </div>
            ) : (
              <ul className="grid col-span-2 gap-y-4 gap-x-1 sm:grid-cols-3 sm:pl-8 lg:pl-10 font-display">
                {props.benefit.summaries.map((summary, index) => {
                  return (
                    <BenefitCardHeaderSummary
                      key={index}
                      locale={props.locale}
                      summary={summary}
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
          caption={t[props.benefit.taskHeadingKey]}
        />
      </h4>
      <div className="flex flex-col">
        {props.benefit.taskGroups == null ||
        props.benefit.taskGroups.length <= 0 ? null : (
          <div
            id={taskListId}
            className="grid bg-gray-lighter sm:grid-cols-1 rounded-lg"
          >
            {!isOpen ? null : (
              <div className="bg-white pb-12 rounded-lg">
                {props.benefit.taskGroups.map((taskList, index) => {
                  return (
                    <div key={index}>
                      <BenefitTasks taskList={taskList} locale={props.locale} />
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
  benefit: propTypes.shape({
    programCode: propTypes.string.isRequired,
    statusCode: propTypes.string.isRequired,
    summaries: propTypes.array,
    taskGroups: propTypes.array.isRequired,
    taskHeadingKey: propTypes.string.isRequired,
  }),
}
