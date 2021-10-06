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
    <div className="p-5 bg-gray-light" id="feature-block">
      <div className=" container  mx-auto  p-5 bg-yellow-300">
        <div className="bg-red-300 p-2">
          <h2 className="my-4">{props.title}</h2>
          <p className="my-4">{props.body}</p>
          <ActionButton className="" id="feature-block-button" href="/">
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
