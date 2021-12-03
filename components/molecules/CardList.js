import PropTypes from 'prop-types'
import { Card } from '../atoms/Card'

export const CardList = ({ cardList }) => {
  const displayCards = cardList.map((card) => (
    <li className="flex flex-grow" key={card.elements.scPageNameEn.value}>
      <Card
        title={card.elements.scTitleEn.value}
        tag={card.elements.scProgramEn?.value}
        text={card.elements.scDescriptionEn?.value}
        callToActionText={card.elements.scCallToActionEn.value}
        callToActionHref={`/benefits/${card.name}`.toLowerCase()}
        btnId={'btn-' + card.elements.scPageNameEn.value}
      />
    </li>
  ))
  return (
    <ul
      className="grid grid-cols-1 gap-6 md:grid-cols-2 md:pl-1"
      data-testid="cardList"
    >
      {cardList ? displayCards : ''}
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
