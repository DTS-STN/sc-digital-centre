import PropTypes from 'prop-types'
import Link from 'next/link'

export default function TopTasks(props) {
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-dark-solid">
        Top Tasks
      </h2>
      <ul className="list-disc m-5">
        {props.topTasksList.map((topTask, index) => (
          <li className="text-dark-solid">
            <Link href={topTask.taskURL}>
              <a className="font-display font-semibold underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                {topTask.taskName}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

TopTasks.propTypes = {
  /**
   * array of top task strings
   */
  //List of top tasks
  topTasksList: PropTypes.arrayOf(
    PropTypes.exact({
      taskName: PropTypes.string,
      taskURL: PropTypes.string,
    })
  ),
}
