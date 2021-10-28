import PropTypes from 'prop-types'
import SearchBar from '../atoms/SearchBar'

export default function SearchHeader(props) {
  return (
    <div className="flex w-full md:layout-container ">
      <div className="flex flex-col lg:flex-row w-full py-2 lg:py-6 px-6 bg-gray-light text-white space-y-2 lg:space-y-0 lg:space-x-6">
        <h2 className="text-xl text-black font-bold"> {props.headerText} </h2>
        <SearchBar
          placeholderText={props.searchBarPlaceholder}
          btnText={props.searchBarText}
          btnClasses={(props.lang === 'en' ? 'w-24' : 'w-28') + ' rounded-r-sm'}
          onSubmitHref={props.onSubmitHref}
        />

        <button
          aria-label={props.btnClearLabel}
          className={
            'hidden md:inline-block w-48 py-1 px-6 bg-deep-blue-solid rounded '
          }
        >
          {props.btnClearText}
        </button>
      </div>
    </div>
  )
}

SearchHeader.propTypes = {
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
