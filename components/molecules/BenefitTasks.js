import PropTypes from 'prop-types'

export default function BenefitTasks(props) {
  const tasks = [
    {
      task: 'Task 1',
      taskIcon: '/placeholder.svg',
      taskLink: '/dashboard',
    },
    {
      task: 'Task 2',
      taskIcon: '/placeholder.svg',
      taskLink: '/dashboard',
    },
    {
      task: 'Task 3',
      taskIcon: '/placeholder.svg',
      taskLink: '/dashboard',
    },
    {
      task: 'Task 4',
      taskIcon: '/placeholder.svg',
      taskLink: '/dashboard',
    },
    {
      task: 'Task 5',
      taskIcon: '/placeholder.svg',
      taskLink: '/dashboard',
    },
    {
      task: 'Task 6',
      taskIcon: '/placeholder.svg',
      taskLink: '/dashboard',
    },
    {
      task: 'Task 7',
      taskIcon: '/placeholder.svg',
      taskLink: '/dashboard',
    },
    {
      task: 'Task 8',
      taskIcon: '/placeholder.svg',
      taskLink: '/dashboard',
    },
    {
      task: 'Task 9',
      taskIcon: '/placeholder.svg',
      taskLink: '/dashboard',
    },
  ]
  let displayedTasks = props.isExpanded ? tasks : tasks.slice(0, 6)

  return (
    <div className="bg-gray-lighter mt-6 px-8 py-6">
      <h3 className="font-display font-bold text-xl">
        {`All ${props.benefitType} Tasks`}
      </h3>
      <ul className="grid grid-cols-2 gap-x-14 justify-items-start w-full pt-6 md:grid-cols-6">
        {displayedTasks.map((value, index) => {
          return (
            <li key={index} className="font-display font-bold text-center pb-6">
              <a href={value.taskLink}>
                <svg
                  className="fill-current text-gray-solid w-24 md:w-16"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.414,15 c0,0,3.139,3.139,3.293,3.293c0.391,0.391,0.391,1.024,0,1.414c-0.391,0.391-1.024,0.391-1.414,0C18.139,19.554,15,16.414,15,16.414 s-3.139,3.139-3.293,3.293c-0.391,0.391-1.024,0.391-1.414,0c-0.391-0.391-0.391-1.024,0-1.414C10.446,18.139,13.586,15,13.586,15 s-3.139-3.139-3.293-3.293c-0.391-0.391-0.391-1.024,0-1.414c0.391-0.391,1.024-0.391,1.414,0C11.861,10.446,15,13.586,15,13.586 s3.139-3.139,3.293-3.293c0.391-0.391,1.024-0.391,1.414,0c0.391,0.391,0.391,1.024,0,1.414C19.554,11.861,16.414,15,16.414,15z" />
                </svg>
                {value.task}
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
