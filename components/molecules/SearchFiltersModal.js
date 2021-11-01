import FormElement from '../atoms/FormElement'

export default function SearchFiltersModal(props) {
  return (
    <div className="fixed top-0 left-0 px-4 py-6 bg-dark-solid bg-opacity-50 w-full h-full">
      <div
        aria-modal="true"
        className="bg-light-solid px-4 py-6 text-dark-solid"
      >
        <form className="children:block block text-xs">
          <h3 className="text-xl mb-6"> Filters </h3>

          <div className="mb-4 children:block">
            <label id="age-range-label" className="  mb-2 ">
              {' '}
              Age Range{' '}
            </label>
            <select
              name="age-range"
              aria-labelledby="age-range-label"
              className="border border-gray-solid bg-gray-100 p-2 text-gray-dark"
            >
              <option value="0">Under 18 years old</option>
              <option value="1">18-100 bajillion</option>
            </select>
          </div>

          {/* Alternatively, we could do something like this 
                    <FormElement
                        name="age-range"
                        labelText="Age Range"
                        >                        
                        <select name="age-range-select" aria-labelledby="age-range-label" className="  border border-gray-solid">
                            <option value="0">Under 18 years old</option>
                            <option value="1">18-100 bajillion</option>
                        </select>
                    </FormElement>
                    */}

          <div className="mb-4 children:block">
            <label id="income-label" className="  mb-2 ">
              {' '}
              Annual Income{' '}
            </label>
            <select
              name="income"
              aria-labelledby="income-label"
              className="border border-gray-solid bg-gray-100 p-2 text-gray-dark"
            >
              <option value="0">Between $0 - $23999</option>
              <option value="1">Between $23999 - $42999</option>
              <option value="2">Between $42999 - $72999</option>
            </select>
          </div>

          <div className="mb-4 children:block children:mb-2 ">
            <label id="eligibility-label" className="">
              {' '}
              Eligibility Criteria{' '}
            </label>
            <div className="children:align-middle">
              <input
                type="checkbox"
                name="eligibility-living-with-disability"
                id="eligibility-living-with-disability"
                className="w-6 h-6 border-gray-solid bg-gray-light"
              />
              <label for="eligibility-living-with-disability" className="ml-2 ">
                living with a disability
              </label>
            </div>
            <div className="children:align-middle">
              <input
                type="checkbox"
                name="eligibility-caregiver-to-disability"
                id="eligibility-caregiver-to-disability"
              />
              <label for="eligibility-caregiver-to-disability" className="ml-2">
                caregiver to someone with a disability
              </label>
            </div>
            <div className="children:align-middle">
              <input
                type="checkbox"
                name="eligibility-widowed"
                id="eligibility-widowed"
              />
              <label for="eligibility-widowed" className="ml-2">
                widowed
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
