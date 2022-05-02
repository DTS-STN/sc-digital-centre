import propTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'
import BenefitCardHeaderSummary from './BenefitCardHeaderSummary'

export default function UniversalBenefitCard(props) {
  const t = props.locale === 'en' ? en : fr

  return (
    <div className="benefit-card">
      {/* Status Bar Component goes here */}
      <h2>{t[props.benefit.programCode]}</h2>
      {props.benefit.summaries == null || props.benefit.summaries.length <= 0
        ? null
        : props.benefit.summaries.map((value, index) => {
            return (
              <BenefitCardHeaderSummary
                key={index}
                locale={t}
                summary={value}
              />
            )
          })}
      {/* map and add task list + view more button goes here*/}
    </div>
  )
}

UniversalBenefitCard.propTypes = {
  locale: propTypes.object.isRequired,
  benefit: propTypes.object.isRequired,
}
