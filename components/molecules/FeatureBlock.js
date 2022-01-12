import propTypes from 'prop-types'
import ActionButton from '../atoms/ActionButton'
import Image from 'next/image'
/**
 * Featured Content banner
 */
export default function FeatureBlock(props) {
  return (
    <div className=" bg-light-solid">
      <div
        className="flex flex-col  sm:flex-row-reverse bg-light-solid my-3 sm:container mx-auto sm:pl-6 sm:px-2"
        id="feature-block"
        data-testid="featureBlock"
      >
        <div className="aspect-w-5 aspect-h-2 sm:aspect-h-1 xl:ml-3 w-full min-w-max mr-break-out">
          <Image
            src={props.imgSrc}
            alt={props.imgAlt}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
        <div className="flex flex-col place-content-between mx-auto md:w-3/5">
          <div className="flex flex-col m-2">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-dark-solid">
              {props.title}
            </h2>
            <p className="font-body my-5">{props.body}</p>
          </div>

          <div className="sm:flex my-1 sm:ml-4">
            <ActionButton id={props.btnId} href={props.featuredHref}>
              {props.buttonText}
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  )
}

FeatureBlock.propTypes = {
  // title text to be displayed
  title: propTypes.string,

  // body text to be displayed
  body: propTypes.string,

  // button text to be displayed
  buttonText: propTypes.string,

  // id of the button for for testing
  featuredHref: propTypes.string,

  // id of the button for for testing
  btnId: propTypes.string,

  // id of the element for testing
  id: propTypes.string,

  // Image src for right side of featured component
  imgSrc: propTypes.string,

  // Image alt text for right side of featured component
  imgAlt: propTypes.string,
}
