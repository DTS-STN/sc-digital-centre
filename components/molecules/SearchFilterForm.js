import PropTypes from 'prop-types'

export default function SearchFilterForm(props) {
  const ageRangeOptions = props.ageRangeOptions
    ? props.ageRangeOptions.map((item, i) => {
        return (
          <option key={i} value={item.key}>
            {item.name}
          </option>
        )
      })
    : ''

  const incomeOptions = props.incomeOptions
    ? props.incomeOptions.map((item, i) => {
        return (
          <option key={i} value={item.key}>
            {item.name}
          </option>
        )
      })
    : ''

  const eligibilityOptions = props.eligibilityOptions
    ? props.eligibilityOptions.map((item, i) => {
        return (
          <div key={i} className="children:align-middle">
            <input
              type="checkbox"
              name={`eligibility-${item.id}`}
              id={`eligibility-${item.id}`}
              className="w-6 h-6 border-gray-solid"
            />
            <label htmlFor={`eligibility-${item.id}`} className="ml-2">
              {item.name}
            </label>
          </div>
        )
      })
    : ''

  return (
    <form
      className={'font-bold block text-xs h-auto ' + props.formClasses}
      onSubmit={props.submitHandler}
    >
      <h2 className="text-xl mb-6"> {props.filterHeader} </h2>

      <div className="mb-4 children:block">
        <label htmlFor="age-range" id="age-range-label" className="mb-2">
          {props.ageRangeLabel}
        </label>
        <select
          name="age-range"
          id="age-range"
          className="border border-gray-solid bg-gray-100 p-2 text-deep-blue-dark"
        >
          {ageRangeOptions}

          {/* 
          <option value="0">Under 18 years old</option>
          <option value="1">18-100 bajillion</option> 
          */}
        </select>
      </div>

      <div className="mb-4 children:block">
        <label htmlFor="income" id="income-label" className="mb-2">
          {props.incomeLabel}
        </label>
        <select
          name="income"
          id="income"
          className="border border-gray-solid bg-gray-100 p-2 text-deep-blue-dark"
        >
          {incomeOptions}
          {/* 
          <option value="0">Between $0 - $23999</option>
          <option value="1">Between $23999 - $42999</option>
          <option value="2">Between $42999 - $72999</option> 
          */}
        </select>
      </div>

      <div className="mb-4 children:block font-normal children:mb-2 ">
        <label id="eligibility-label" className="font-bold">
          {props.eligibilityLabel}
        </label>

        {eligibilityOptions}

        {/* 
        <div className="children:align-middle">
          <input
            type="checkbox"
            name="eligibility-living-with-disability"
            id="eligibility-living-with-disability"
            className="w-6 h-6 border-gray-solid"
          />
          <label htmlFor="eligibility-living-with-disability" className="ml-2">
            living with a disability
          </label>
        </div>

        <div className="children:align-middle">
          <input
            type="checkbox"
            name="eligibility-caregiver-to-disability"
            id="eligibility-caregiver-to-disability"
            className="w-6 h-6 border-gray-solid"
          />
          <label htmlFor="eligibility-caregiver-to-disability" className="ml-2">
            caregiver to someone with a disability
          </label>
        </div>

        <div className="children:align-middle">
          <input
            type="checkbox"
            name="eligibility-widowed"
            id="eligibility-widowed"
            className="w-6 h-6 border-gray-solid"
          />
          <label htmlFor="eligibility-widowed" className="ml-2">
            widowed
          </label>
        </div> 
        */}
      </div>

      <div className="space-x-4 w-full py-2">
        <button
          className="py-2 px-4 bg-bright-blue-solid rounded text-light-solid"
          onClick={props.cancelHandler}
        >
          {props.cancelText}
        </button>
        <button
          type="submit"
          className="py-2 px-4 bg-deep-blue-solid rounded text-light-solid"
        >
          {props.submitText}
        </button>
      </div>
    </form>
  )
}

SearchFilterForm.propTypes = {
  /*
   * handlers for submitting/cancelling the form supplied by parent
   * TODO: cancel button erases changes in the form
   */
  cancelHandler: PropTypes.func,
  submitHandler: PropTypes.func,

  /*
   * text for cancel/submit buttons
   */
  cancelText: PropTypes.string,
  submitText: PropTypes.string,

  /*
   * additional classes for the main form element
   */
  formClasses: PropTypes.string,

  /*
   * header for this form
   */
  filterHeader: PropTypes.string,
}
