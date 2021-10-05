import PropTypes from 'prop-types'
import Link from 'next/link'

export default function TopTasks(props) {
  return (
    <>
      <h2 className="font-display font-bold text-xl md:text-2xl text-dark-solid">
        Top Tasks
      </h2>
      <p className="mt-3 font-body md:hidden">{props.topTasksDescription}</p>
      <ul className="list-disc m-5">
        {props.topTasksList.map((topTask, index) => (
          <li key={index} className="text-dark-solid">
            <Link href={topTask.taskURL}>
              <a className="font-display font-semibold underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                {topTask.taskName}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

TopTasks.propTypes = {
  /**
   * string description of top tasks
   */
  topTasksDescription: PropTypes.string,
  /**
   * array of top task strings
   */
  topTasksList: PropTypes.arrayOf(
    PropTypes.exact({
      taskName: PropTypes.string,
      taskURL: PropTypes.string,
    })
  ),
}
