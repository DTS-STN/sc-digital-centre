import PropTypes from 'prop-types'

import SearchBar from '../atoms/SearchBar'

export default function SearchCard(props) {
  return (
    <div className="flex flex-col px-12 py-8 text-white space-y-4 bg-blue-primary-deep">
      <h3 className="text-xl"> {props.headerText} </h3>

      <p>{props.paraText}</p>

      <SearchBar placeholderText="Service Canada Labs" btnText="Search" />

      <a className="text-sm underline">{props.viewBenefitsServices}</a>
    </div>
  )
}

SearchCard.PropTypes = {
  headerText: PropTypes.string,
  viewBenefitsServices: PropTypes.string,
  paraText: PropTypes.string,
}
