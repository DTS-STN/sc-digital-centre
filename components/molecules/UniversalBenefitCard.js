import propTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'
import { ProgramCodes, StatusCodes } from '../../objects/UniversalBenefit'
import BenefitCardHeaderSummary from './BenefitCardHeaderSummary'
import BenefitTasks from './BenefitTasks'
import HorizontalRule from '../atoms/HorizontalRule'
import { useState, useRef } from 'react'
import ViewMoreLessButton from '../atoms/ViewMoreLessButton'

export default function UniversalBenefitCard(props) {
  const t = props.locale === 'en' ? en : fr
  const [isOpen, setIsOpen] = useState(false)
  const topOfCardRef = useRef(null)
  const topOfTaskRef = useRef(null)

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
      {/* Status Bar Component goes here */}
      <h2>{t[props.benefit.programCode]}</h2>
      {props.benefit.summaries == null || props.benefit.summaries.length <= 0
        ? null
        : props.benefit.summaries.map((summary, index) => {
            return (
              <BenefitCardHeaderSummary
                key={index}
                locale={t}
                summary={summary}
              />
            )
          })}
      {props.benefit.taskGroups == null ||
      props.benefit.taskGroups.length <= 0 ? null : (
        <div ref={topOfTaskRef}>
          {!isOpen
            ? null
            : props.benefit.taskGroups.map((taskList, index) => {
                return (
                  <div key={index}>
                    <BenefitTasks
                      isExpanded={true}
                      header={taskList.Header}
                      tasks={taskList.Tasks}
                    />
                    <HorizontalRule width="w-auto sm:w-full" />
                  </div>
                )
              })}
          <ViewMoreLessButton
            id={props.benefit.programCode + '-card-button'}
            onClick={() => {
              setIsOpen(!isOpen)
              scrollTo()
            }}
            plus={isOpen}
            caption={t[props.benefit.taskHeadingKey]}
          />
        </div>
      )}
    </div>
  )
}

UniversalBenefitCard.propTypes = {
  locale: propTypes.string.isRequired,
  benefit: propTypes.shape({
    programCode: propTypes.oneOf(ProgramCodes).isRequired,
    statusCode: propTypes.oneOf(StatusCodes).isRequired,
    summaries: propTypes.object.isRequired,
    taskGroups: propTypes.array.isRequired,
    taskHeadingKey: propTypes.string.isRequired,
  }),
}
