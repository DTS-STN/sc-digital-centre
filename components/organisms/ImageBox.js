import PropTypes from 'prop-types'

import Image from 'next/image'

/**
 *
 */
export default function ImageBox(props) {
  return (
    <div className=" bg-deep-blue-solid">
      <div
        className="flex flex-col md:flex-row  bg-deep-blue-solid  md:container mx-auto md:pl-6 md:px-2"
        id="image-box"
        data-testid="image-box"
      >
        {props.children}

        <div className="aspect-w-5 aspect-h-2 md:aspect-h-1 xl:ml-3 w-full min-w-max mr-break-out">
          <Image
            src={props.imageSrc}
            alt="Picture of something nice"
            layout="fill"
            objectFit="cover"
            objectPosition="20% 80%"
          />
        </div>
      </div>
    </div>
  )
}

ImageBox.propTypes = {
  // id of the element for testing
  id: PropTypes.string,

  // URL to get image
  imageSrc: PropTypes.string,

  // other elements you want to add
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}
