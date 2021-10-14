import propTypes from 'prop-types'
import { ActionButton } from '../atoms/ActionButton'
import Image from 'next/image'
/**
 * Featured Content banner
 */
export default function FeatureBlock(props) {
  return (
    <div
      className="flex flex-col justify-between sm:flex-row-reverse bg-light-solid layout-container mt-5"
      id="feature-block"
    >
      <div className="bg-splash-page bg-cover bg-center w-full py-32  ">
        {/* <div className="aspect-w-16 aspect-h-9">
          <Image
            src="/sp-bg-1.jpg"
            alt="Picture of something nice"
            layout="fill"
            objectFit="contain"
          />
        </div> */}
      </div>

      <div className="py-3 sm:pr-3 grid mx-auto md:w-3/5">
        <h2 className="font-display font-bold text-xl md:text-2xl text-dark-solid">
          {`${props.title} ${props.featuredContent}`}
        </h2>
        <p className="font-body my-5">{props.body}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ActionButton id={props.btnId} href={props.featuredHref}>
            {props.buttonText}
          </ActionButton>
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
