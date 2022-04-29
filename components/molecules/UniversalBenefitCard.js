import propTypes from 'prop-types'
import { UniversalBenefit } from '../../objects/UniversalBenefit'

export default function UniversalBenefitCard(props) {
  const t = props.locale

  return (
    <div className="benefit-card">
      {/* Status Bar Component goes here */}
      <h2>{t[props.benefit.programCode]}</h2>
    </div>
  )
}

UniversalBenefitCard.propTypes = {
  locale: propTypes.object.isRequired,
  benefit: propTypes.objectOf(typeof UniversalBenefit).isRequired,
}
