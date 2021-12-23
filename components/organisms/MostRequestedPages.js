import { CardList } from '../molecules/CardList'
import PropTypes from 'prop-types'

export default function MostRequestedPages({ title, cardList }) {
  return (
    <div className="lg:w-3/4 md:pl-12">
      <h2 className="font-bold font-display text-2xl mb-4">{title}</h2>
      <CardList cardList={cardList} />
    </div>
  )
}

MostRequestedPages.propTypes = {
  // title of the cardlist
  title: PropTypes.string,

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
