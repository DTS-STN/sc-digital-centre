import PropTypes from 'prop-types'

export default function BenefitTasks(props) {
  const displayedTasks = props.isExpanded
    ? props.tasks
    : props.tasks.slice(0, 6)

  return (
    <div className="bg-gray-lighter mt-6 px-8 py-6">
      <h3 className="font-display font-bold text-xl">
        {`All ${props.benefitType} Tasks`}
      </h3>
      <ul className="grid grid-cols-2 gap-x-14 justify-items-start w-full pt-6 md:grid-cols-6">
        {displayedTasks.map((value, index) => {
          return (
            <li key={index} className="font-display font-bold text-left pb-6">
              <a href={value.taskLink}>
                <img
                  src={value.taskIcon}
                  className="font-normal pb-3 px-8"
                  alt=""
                />
                <p className="w-36 font-normal px-5 text-sm">{value.task}</p>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

BenefitTasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      taskLink: PropTypes.string.isRequired,
      taskIcon: PropTypes.string.isRequired,
    })
  ),
}
