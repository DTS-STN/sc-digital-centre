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
        data-testid="image-box"
      >
        {props.children}

        <div className="aspect-w-5 aspect-h-2 md:aspect-h-1 xl:ml-3 w-full min-w-max mr-break-out">
          <Image
            src={props.imageSrc}
            alt={props.alt}
            layout={props.layout}
            objectFit={props.objectFit}
            objectPosition={props.objectPosition}
            priority={props.priority}
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

  // image alt text
  alt: PropTypes.string,
  // image layout
  layout: PropTypes.string,
  // image object fit
  objectFit: PropTypes.string,
  // image objectPosition
  objectPosition: PropTypes.string,
  // image priority - if the image is above the fold set to true otherwise it should be false
  // more info here https://nextjs.org/docs/api-reference/next/image#priority
  priority: PropTypes.bool,

  // other elements you want to add
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}
