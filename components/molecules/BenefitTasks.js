import PropTypes from 'prop-types'
import HorizontalRule from '../atoms/HorizontalRule'
import en from '../../locales/en'
import fr from '../../locales/fr'

export default function BenefitTasks(props) {
  const t = props.locale === 'en' ? en : fr

  return (
    <div className="bg-gray-lighter px-4 py-3 sm:px-8 sm:py-6 h-full border-b">
      <h5 className="font-display font-bold text-xl">
        {t[props.taskList.header]}
      </h5>
      <ul className="grid sm:grid-cols-4 gap-x-7 justify-items-start w-full pt-6">
        {props.taskList.tasks.map((value, index) => {
          return (
            <li key={index} className="font-display font-bold text-left pb-7">
              <a
                href={t[value.taskLink]}
                className="flex underline text-link-blue-default hover:text-link-blue-hover"
              >
                <img src={value.taskIcon} className="h-10" alt="" />
                <p className="font-normal relative top-2 ml-4">
                  {t[value.task]}
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
