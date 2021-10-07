import propTypes from 'prop-types'
import { useRouter } from 'next/router'
import { ActionButton } from '../atoms/ActionButton'

/**
 * Featured Content banner
 */
export default function FeatureBlock(props) {
  const { asPath } = useRouter()
  // const t = props.language === 'en' ? en : fr

  return (
    <div
      className="flex flex-col sm:flex-row-reverse  bg-gray-light"
      id="feature-block"
    >
      <div className="bg-green-200  w-full  ">
        this is going to be a picture
      </div>
      <div className="  p-3  sm:ml-5 md:ml-7   bg-yellow-300">
        <div className="bg-red-300 p-3 mx-auto  ">
          <h2 className="my-4">{props.title}</h2>
          <p className="my-4">{props.body}</p>

          <ActionButton id="feature-block-button" href="#">
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

  // body text to be displayed
  body: propTypes.string,

  // id of the element for testing
  id: propTypes.string.isRequired,
}
