import PropTypes from 'prop-types'

export default function BenefitTasks(props) {
  return (
    <div className="bg-gray-lighter px-4 py-3 sm:px-8 sm:py-6 h-full border-b">
      <h5 className="font-display font-bold text-xl">
        {props.taskList.header}
      </h5>
      <ul className="grid sm:grid-cols-4 gap-x-7 justify-items-start w-full pt-6">
        {props.taskList.tasks.map((value, index) => {
          return (
            <li key={index} className="font-display font-bold text-left pb-7">
              <a href={value.taskLink} className="flex">
                <img src={value.taskIcon} className="h-10" alt="" />
                <p className="font-normal relative top-2 ml-4 text-link-blue-default hover:text-link-blue-hover">
                  {value.task}
                </p>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

BenefitTasks.propTypes = {
  taskList: PropTypes.shape({
    header: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        task: PropTypes.string.isRequired,
        taskLink: PropTypes.string.isRequired,
        taskIcon: PropTypes.string.isRequired,
      })
    ),
  }),
}
