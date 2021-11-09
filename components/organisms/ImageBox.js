import propTypes from 'prop-types'

import Image from 'next/image'

import SearchCard from '../molecules/SearchCard'

import en from '../../locales/en'
import fr from '../../locales/fr'
/**
 *
 */
export default function ImageBox(props) {
  const t = props.locale === 'en' ? fr : en

  return (
    <div className=" bg-deep-blue-solid">
      <div
        className="flex flex-col md:flex-row  bg-deep-blue-solid  md:container mx-auto md:pl-6 md:px-2"
        id="image-box"
        data-testid="image-box"
      >
        <SearchCard
          lang={props.locale}
          headerText={t.searchFindBenefits}
          paraText={t.searchDesc}
          viewBenefitsServices={t.searchViewAllBenefits}
          searchBarPlaceholder={t.searchPlaceholder}
          searchBarText={t.search}
          onSubmitHref="/searchResult"
        />
        <div className="aspect-w-5 aspect-h-2 md:aspect-h-1 xl:ml-3 w-full min-w-max mr-break-out">
          <Image
            src={
              'https://www.canada.ca/content/dam/decd-endc/images/clear-lake-snowy-mountain.png'
            }
            alt="Picture of something nice"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
      </div>
    </div>
  )
}

ImageBox.propTypes = {
  // id of the element for testing
  id: propTypes.string,
}
