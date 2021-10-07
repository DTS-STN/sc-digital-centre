import PropTypes from 'prop-types'
import SearchBar from '../atoms/SearchBar'

import en from '../../locales/en'
import fr from '../../locales/fr'

export default function SearchCard(props) {
  const t = props.lang === 'en' ? en : fr
  return (
    <div
      className={
        'flex flex-col w-full py-6 px-4 sm:px-12 sm:py-8 sm:min-w-[27.5rem] lg:px-20 lg:py-12 text-white space-y-4 bg-deep-blue-solid'
      }
    >
      <h3 className="text-xl"> {t.searchFindBenefits} </h3>

      <p className="max-w-[22.5rem]">{t.searchDesc}</p>

      <SearchBar
        placeholderText={t.searchPlaceholder}
        btnText={t.search}
        btnClasses={props.lang === 'en' ? 'w-24' : 'w-28'}
      />

      <a className="text-sm underline">{t.searchViewAllBenefits}</a>
    </div>
  )
}

SearchCard.propTypes = {
  lang: PropTypes.string,
  headerText: PropTypes.string,
  viewBenefitsServices: PropTypes.string,
  paraText: PropTypes.string,
}
