import PropTypes from 'prop-types'
import { ContactCard } from '../atoms/ContactCard'

export const ContactUs = ({ mainTitle, contactList }) => {
  return (
    <div className="layout-container" data-testid="contactUs">
      <h2 className="font-bold text-center text-2xl my-8">{mainTitle}</h2>

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {contactList.map((contact) => (
          <li key={contact.cardId}>
            <ContactCard
              iconSrc={contact.iconSrc}
              iconAlt={contact.iconAlt}
              title={contact.title}
              text={contact.text}
              linkText={contact.linkText}
              linkHref={contact.linkHref}
              cardId={contact.cardId}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

ContactUs.propTypes = {
  mainTitle: PropTypes.string,
  /**
   * The contact page that the card will display
   */
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The icon that will be shown
       */
      iconSrc: PropTypes.string.isRequired,
      /**
       * The Alt title that the icon will show when hovering and no-images
       */
      iconAlt: PropTypes.string.isRequired,
      /**
       * Title for the card
       */
      title: PropTypes.string,

      /**
       * Text for the card
       */
      text: PropTypes.string,

      /**
       * The text that the button will display
       */
      linkText: PropTypes.string.isRequired,

      /**
       * The href that the button will open
       */
      linkHref: PropTypes.string.isRequired,

      /**
       * The id for the card
       */
      cardId: PropTypes.string.isRequired,
    })
  ).isRequired,
}
