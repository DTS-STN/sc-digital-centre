import propTypes from 'prop-types'
import { ActionButton } from '../atoms/ActionButton'
import Image from 'next/image'
/**
 * Featured Content banner
 */
export default function FeatureBlock(props) {
  return (
    <div className=" bg-light-solid">
      <div
        className="flex flex-col  sm:flex-row-reverse bg-light-solid my-3 layout-container"
        id="feature-block"
        data-testid="featureBlock"
      >
        {/* <div className="bg-splash-page bg-cover bg-center w-full py-32  ">
  
      </div> */}
        <div className="aspect-w-5 aspect-h-2 sm:aspect-h-1 lg:ml-3 w-full mr-break-out">
          <Image
            // src="/autumn-leaves-woman-hands.png"
            src="https://www.canada.ca/content/dam/decd-endc/images/autumn_leaves_woman_hands.png"
            alt="Picture of something nice"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
        {/* grid sm:ml-7 md:ml-10 lg:ml-12 layout-container */}
        <div className="flex flex-col place-content-between mx-auto md:w-3/5">
          <div className="flex flex-col m-2">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-dark-solid">
              {`${props.title} ${props.featuredContent}`}
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

  // Featured content title text to be displayed
  featuredContent: propTypes.string,

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
}
