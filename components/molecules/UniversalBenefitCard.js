import propTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'
import { ProgramCodes, StatusCodes } from '../../objects/UniversalBenefit'
import BenefitCardHeaderSummary from './BenefitCardHeaderSummary'
import BenefitTasks from './BenefitTasks'
import HorizontalRule from '../atoms/HorizontalRule'

export default function UniversalBenefitCard(props) {
  const t = props.locale === 'en' ? en : fr

  return (
    <div className="benefit-card">
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
      {props.benefit.taskGroups == null || props.benefit.taskGroups.length <= 0
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
  }),
}
