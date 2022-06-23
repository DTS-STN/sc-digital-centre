import PropTypes from 'prop-types'
import HorizontalRule from '../atoms/HorizontalRule'

export default function BenefitTasks(props) {
  return (
    <div className="">
      <div className="bg-gray-lighter px-4 py-3 sm:px-8 sm:py-6 h-full border-b  ">
        <h5 className="font-display font-bold text-xl bg-yellow-200">
          {props.taskList.header}
        </h5>
        <ul className="  w-full pt-6 bg-orange-300 p-2">
          {props.taskList.tasks.map((task, index) => {
            return (
              <li
                key={index}
                className="font-display font-bold text-left pb-7 bg-green-100"
              >
                <a
                  href={task.link}
                  className="flex underline text-blue-default hover:text-blue-hover bg-indigo-300"
                >
                  <img src={task.icon} className="h-10" alt="" />
                  <p className="font-normal relative top-2 ml-4 bg-red-300">
                    {task.task}
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

BenefitTasks.propTypes = {
  taskList: PropTypes.shape({
    header: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        task: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ),
  }),
}
