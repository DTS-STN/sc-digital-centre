import PropTypes from 'prop-types'
import Link from 'next/link'

export default function TopTasks(props) {
  return (
    <div data-testid="topTasks">
      <h2 className="font-display font-bold text-2xl text-dark-solid mt-5">
        {props.topTasksHeader}
      </h2>
      <p className="mt-3 font-body md:hidden">{props.topTasksDescription}</p>
      <ul className="list-disc m-5">
        {props.topTasksList.map((topTask, index) => (
          <li key={index} className="text-dark-solid">
            <Link href={topTask.link}>
              <a className="font-display font-semibold underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                {topTask.title}
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
   * string header of top tasks
   */
  topTasksHeader: PropTypes.string,
  /**
   * string description of top tasks
   */
  topTasksDescription: PropTypes.string,
  /**
   * array of top task strings
   */
  topTasksList: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}
