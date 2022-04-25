import propTypes from 'prop-types'

export default function ProfileInfoSection(props) {
  return (
    <>
      <h3 className="border-b border-gray-300 font-bold">{props.title}</h3>
      <div className="grid sm:grid-cols-2 gap-y-8 gap-x-40 py-8">
        {props.info.map((item) => {
          return (
            <div key={item.title}>
              <span>
                <span className="flex justify-between">
                  <h3 className="font-bold">{item.title}</h3>
                  <button className="underline text-blue-600 cursor-pointer hover:text-blue-800 visited:text-purple-600">
                    Edit
                  </button>
                </span>
                {item.fields?.map((field) => (
                  <p key={field}>{field}</p>
                ))}
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}

ProfileInfoSection.propTypes = {
  /*
   *  Section Title
   */
  title: propTypes.string,
  /*
   *  Information
   */
  info: propTypes.array,
}
