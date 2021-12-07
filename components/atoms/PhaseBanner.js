import propTypes from 'prop-types'

/**
 * Displays the PhaseBanner on the page
 */

export default function PhaseBanner(props) {
  return (
    <div className="bg-deep-blue-solid">
      <div className="block md:flex py-4 layout-container ">
        <div className="flex justify-between lg:block lg:w-max ml-4 md:ml-0  my-auto">
          <span
            className="font-body text-sm text-white border block w-max px-4 py-1 my-auto leading-6 uppercase"
            role="alert"
          >
            {props.phase}
          </span>
        </div>

        <p
          role="alert"
          className="ml-4 lg:ml-8 xl:ml-12 pt-2 md:pt-0 h-full font-body text-sm lg:text-md text-white my-auto flex content-center"
        >
          {props.bannerText}
        </p>
      </div>
    </div>
  )
}

PhaseBanner.propTypes = {
  /**
   * Phase stage in the PhaseBanner
   */
  phase: propTypes.string,
  /**
   * Phasebanner text
   */
  bannerText: propTypes.string,
}
