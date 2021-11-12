import PropTypes from 'prop-types'
import SearchBar from '../atoms/SearchBar'

export default function SearchHeader(props) {
  return (
    <div className="flex flex-col w-full md:layout-container text-white ">
      <div className="block md:flex w-full py-2 md:py-6 px-6 bg-gray-light space-y-2 md:space-y-0 md:space-x-2 lg:space-x-6">
        <h1 className="text-xl text-black font-bold">{props.headerText}</h1>
        {/* note that the search button's left padding looks like more (approx 2 on the tailwind scale more) than the right padding of the same amount */}
        <SearchBar
          placeholderText={props.searchBarPlaceholder}
          inputText={props.inputText}
          btnText={props.searchBarText}
          btnClasses={'py-2 md:py-4 pl-2 pr-4 md:pl-4 md:pr-6 rounded-r'}
          onSubmitHref={props.onSubmitHref}
        />

        <button
          aria-label={props.searchBarPlaceholder}
          className={
            'hidden md:inline-block py-1 px-2 lg:px-6 bg-deep-blue-solid rounded '
          }
        >
          {props.btnClearText}
        </button>
      </div>
      <div className="flex flex-row md:hidden space-x-2 xs:space-x-6 w-full py-2 px-4 justify-around ">
        <button
          aria-label={props.btnFilterLabel}
          className={'block py-2 px-4 bg-deep-blue-solid rounded w-full'}
          onClick={() => props.setModalShow(true)}
        >
          {props.btnFilterText}
        </button>
        <button
          aria-label={props.btnClearLabel}
          className={'block py-2 px-4 bg-deep-blue-solid rounded w-full'}
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
   * Search Header Heading
   */
  headerText: PropTypes.string,

  /**
   * Search Header Paragraph
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

  /*
   * Clear button text
   */
  btnClearText: PropTypes.string,

  /*
   * Page to send the user after on submit. Defaults to none
   */
  onSubmitHref: PropTypes.string,

  /*
   * Clear button label
   */
  btnClearLabel: PropTypes.string,

  /*
   * Filter button text
   */
  btnFilterText: PropTypes.string,

  /*
   * Filter button label
   */
  btnFilterLabel: PropTypes.string,

  /*
   * Any text that should exist in the input beforehand
   */
  inputText: PropTypes.string,

  /*
   * Sets state for modal filter element.
   */
  setModalShow: PropTypes.func,
}
