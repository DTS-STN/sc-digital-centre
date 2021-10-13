import PropTypes from 'prop-types'
import SearchBar from '../atoms/SearchBar'

export default function SearchCard(props) {
  return (
    <div
      className={
        'flex flex-col sm:w-1/2 py-6 px-4 sm:pl-12 sm:py-8 sm:min-w-[27.5rem] lg:pl-20 lg:py-12 text-white space-y-4 bg-deep-blue-solid'
      }
    >
      <h3 className="text-xl"> {props.headerText} </h3>

      <p className="max-w-[22.5rem]">{props.paraText}</p>

      <SearchBar
        placeholderText={props.searchBarPlaceholder}
        btnText={props.searchBarText}
        btnClasses={props.lang === 'en' ? 'w-24' : 'w-28'}
      />

      <a className="text-sm underline">{props.viewBenefitsServices}</a>
    </div>
  )
}

SearchCard.propTypes = {
  /**
   * Language currently selected
   */
  lang: PropTypes.string,
  /**
   * Search Card Heading
   */
  headerText: PropTypes.string,
  /**
   * Search Card View all benefits text
   */
  viewBenefitsServices: PropTypes.string,
  /**
   * Search Card Paragraph
   */
  paraText: PropTypes.string,
  /**
   * Search Bar Placeholder
   */
  searchBarPlaceholder: PropTypes.string,
  /**
   * Search Bar Text
   */
  searchBarText: PropTypes.string,
}
