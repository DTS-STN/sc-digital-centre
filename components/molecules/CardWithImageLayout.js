import PropTypes from 'prop-types'

export default function CardWithImageLayout(props) {
  return (
    <div className={'flex flex-col sm:flex-row w-full ' + props.layoutClasses}>
      <div className={props.cardClasses + ' flex '}>{props.card}</div>
      <div className={props.imageClasses + ' flex '}>{props.image}</div>
    </div>
  )
}

CardWithImageLayout.PropTypes = {
  card: PropTypes.element.isRequired,
  image: PropTypes.element.isRequired,
  cardClasses: PropTypes.string,
  imageClasses: PropTypes.string,
  layoutClasses: PropTypes.string,
}
