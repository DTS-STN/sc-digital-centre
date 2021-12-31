import PropTypes from 'prop-types'
import { Card } from '../atoms/Card'

export const CardList = (props) => {
  const displayCards = props.cardList.map((card) => (
    <li className="flex flex-grow" key={card.key}>
      <Card
        title={card.title}
        tag={card.tag}
        text={card.text}
        callToActionText={card.callToActionText}
        callToActionHref={card.callToActionHref}
        btnId={card.btnId}
      />
    </li>
  ))
  return (
    <ul
      className="grid grid-cols-1 gap-6 md:grid-cols-2 md:pl-1"
      data-testid="cardList"
    >
      {props.cardList ? displayCards : ''}
    </ul>
  )
}

CardList.propTypes = {
  /**
   * The card page that the card will display
   */
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Title for the card
       */
      title: PropTypes.string,

      /**
       * Text for the card
       */
      text: PropTypes.string,

      /**
       * CallToAction Text for the card
       */
      callToActionText: PropTypes.string,

      /**
       * Text for the card
       */
      callToActionHref: PropTypes.string,

      /**
       * Id for the callToAction btn on the card
       */
      btnId: PropTypes.string,
    })
  ).isRequired,
}
