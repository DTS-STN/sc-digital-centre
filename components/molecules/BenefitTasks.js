import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function BenefitTasks(props) {
  function returnToTaskList() {
    document.getElementById(props.indexedTaskListId).focus()
  }

  function handleTaskListItemNavigation(e) {
    e.stopPropagation()
    const parent = e.target.parentElement

    switch (e.code) {
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault()
        const prevListItem = parent?.previousElementSibling
        if (prevListItem) {
          prevListItem.children[0].focus()
        } else {
          returnToTaskList()
        }
        break
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault()
        const nextListItem = parent?.nextElementSibling
        if (nextListItem) {
          nextListItem.children[0].focus()
        } else {
          returnToTaskList()
        }
        break
      case 'Escape':
        returnToTaskList()
        break
    }
  }

  return (
    <div className="bg-gray-lighter px-4 py-2 sm:px-8 md:py-0 h-full">
      <h4 className="font-display font-bold text-xl ">
        {props.taskList.header}
      </h4>
      <ul className="w-full py-6 space-y-8">
        {props.taskList.tasks.map((task, index) => {
          return (
            <li key={index} className="font-display font-bold">
              <Link href={task.link} passHref>
                <a
                  className="flex items-center underline text-blue-default hover:text-blue-hover"
                  id={
                    props?.indexedTaskListId
                      ? props.indexedTaskListId + '-' + index
                      : null
                  }
                  tabIndex={props?.indexedTaskListId ? -1 : 0}
                  onKeyDown={
                    props?.indexedTaskListId
                      ? (e) => handleTaskListItemNavigation(e)
                      : null
                  }
                >
                  <FontAwesomeIcon
                    icon={task.icon}
                    className="pr-4 text-2xl w-8"
                  />
                  <span className="font-normal text-xl">{task.task}</span>
                </a>
              </Link>
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
        link: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,
      })
    ),
  }),
  indexedTaskListId: PropTypes.string,
  moveToNextLink: PropTypes.func,
}
