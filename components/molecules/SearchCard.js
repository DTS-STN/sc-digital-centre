import PropTypes from 'prop-types'
import SearchBar from '../atoms/SearchBar'
import Link from 'next/link'

export default function SearchCard(props) {
  return (
    <div
      data-testid="searchCard"
      className={
        'flex flex-col sm:w-1/2 py-6 px-4 sm:pl-12 sm:py-8 sm:min-w-[27.5rem] lg:pl-20 lg:py-12 text-white space-y-4 bg-deep-blue-solid'
      }
    >
      <h3 className="text-xl"> {props.headerText} </h3>

      <p className="max-w-[22.5rem]">{props.paraText}</p>

      <SearchBar
        placeholderText={props.searchBarPlaceholder}
        btnText={props.searchBarText}
        btnClasses={
          (props.lang === 'en' ? 'w-24' : 'w-28') + ' border border-white'
        }
        onSubmitHref={props.onSubmitHref}
      />
      <Link href="/searchResult">
        <a className="text-sm underline" lang={props.lang}>
          {props.viewBenefitsServices}
        </a>
      </Link>
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
  /**
   * Optional on submit to send the user to another page.
   */
  onSubmitHref: PropTypes.string,
}
