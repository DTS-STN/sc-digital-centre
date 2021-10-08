import propTypes from 'prop-types'
import { useRouter } from 'next/router'
import { ActionButton } from '../atoms/ActionButton'
import Image from 'next/image'
/**
 * Featured Content banner
 */
export default function FeatureBlock(props) {
  const { asPath } = useRouter()
  // const t = props.language === 'en' ? en : fr

  return (
    <div
      className="flex flex-col justify-between sm:flex-row-reverse bg-light-solid "
      id="feature-block"
    >
      <div className="bg-splash-page bg-cover bg-center w-full py-32  ">
        {/* <img
              src="/sp-bg-1.jpg"
              alt="Picture of something nice"
              className="object-center"
            ></img> */}
      </div>

      <div className="p-3 grid sm:ml-7 md:ml-10 lg:ml-12 container  mx-auto md:w-3/5">
        <h2 className="font-display font-bold text-xl md:text-2xl text-dark-solid">
          {`${props.title} ${props.featuredContent}`}
        </h2>
        <p className="font-body my-5">{props.body}</p>
        <div className=" ">
          <ActionButton
            defaultStyle="true"
            extendedClass="grid justify-center whitespace-pre lg:w-1/2"
            id="feature-link-button"
            href="#"
          >
            text on button
          </ActionButton>
        </div>
      </div>
    </div>
  )
}

FeatureBlock.propTypes = {
  // title text to be displayed
  title: propTypes.string,
  featuredContent: propTypes.string,

  // body text to be displayed
  body: propTypes.string,

  // id of the element for testing
  id: propTypes.string.isRequired,
}
