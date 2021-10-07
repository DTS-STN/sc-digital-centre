import PropTypes from 'prop-types'

import SearchBar from '../atoms/SearchBar'

export default function SearchCard(props) {
  return (
    <div
      className={
        'flex flex-col w-full py-6 px-4 sm:px-12 sm:py-8 sm:min-w-[26.25rem] lg:px-20 lg:py-12 text-white space-y-4 bg-blue-primary-deep'
      }
    >
      <h3 className="text-xl"> {props.headerText} </h3>

      <p className="max-w-[22.5rem]">{props.paraText}</p>

      <SearchBar
        placeholderText="Search benefits and services"
        btnText="Search"
        btnClasses="w-24"
      />

      <a className="text-sm underline">{props.viewBenefitsServices}</a>
    </div>
  )
}

SearchCard.PropTypes = {
  headerText: PropTypes.string,
  viewBenefitsServices: PropTypes.string,
  paraText: PropTypes.string,
}
