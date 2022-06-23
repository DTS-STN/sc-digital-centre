import PropTypes from 'prop-types'
import HorizontalRule from '../atoms/HorizontalRule'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from '@fortawesome/free-solid-svg-icons'
export default function BenefitTasks(props) {
  return (
    <div className="">
      <div className="bg-gray-lighter px-4 py-3 sm:px-8 sm:py-6 h-full   ">
        <h5 className="font-display font-bold text-xl ">
          {props.taskList.header}
          <span></span>
        </h5>
        <ul className="  w-full pt-6 space-y-8">
          {props.taskList.tasks.map((task, index) => {
            return (
              <li key={index} className="font-display font-bold text-left">
                <a
                  href={task.link}
                  className=" flex underline text-blue-default hover:text-blue-hover"
                >
                  {/* <img src={task.icon} className="h-10" alt="" /> */}
                  <p className="font-normal text-xl">
                    <span>
                      {' '}
                      <FontAwesomeIcon icon={task.icon} className="pr-4" />
                    </span>{' '}
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
