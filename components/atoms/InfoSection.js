import propTypes from 'prop-types'
import Link from 'next/link'

export default function InfoSection(props) {
  return (
    <>
      <h3 className="mt-14 pb-6 font-bold text-3xl">{props.title}</h3>
      {props.info.map((item, index) => {
        return (
          <p key={index} className="text-lg">
            {item}
          </p>
        )
      })}
      <Link href={props.editLink} passHref>
        <a className="inline-block w-fit h-fit mt-4 p-2.5 shadow-sm shadow-gray-darker rounded bg-gray-light text-blue-default hover:bg-grey-medium hover:text-blue-hover hover:cursor-pointer focus:shadow-none">
          {props.editText}
        </a>
      </Link>
    </>
  )
}

InfoSection.propTypes = {
  /*
   *  Section Title
   */
  title: propTypes.string.isRequired,
  /*
   *  Information
   */
  info: propTypes.arrayOf(propTypes.string).isRequired,
  /**
   * link to edit the info
   */
  editLink: propTypes.string,
  editText: propTypes.string,
}
