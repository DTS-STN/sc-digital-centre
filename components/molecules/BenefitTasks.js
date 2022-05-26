import PropTypes from 'prop-types'
import HorizontalRule from '../atoms/HorizontalRule'
import en from '../../locales/en'
import fr from '../../locales/fr'

export default function BenefitTasks(props) {
  const t = props.locale === 'en' ? en : fr
  const displayedTasks = props.isExpanded
    ? props.tasks
    : props.tasks.slice(0, 6)
  const customHeader = props.header != null

  return (
    <div className="bg-gray-lighter px-4 py-3 sm:px-8 sm:py-6 h-full border-b">
      <h5 className="font-display font-bold text-xl">
        {customHeader
          ? props.header
          : props.noBenefit
          ? t.commonActions
          : `All ${props.benefitType} Tasks`}
      </h5>
      <ul className="grid sm:grid-cols-4 gap-x-7 justify-items-start w-full pt-6">
        {displayedTasks.map((value, index) => {
          return (
            <li key={index} className="font-display font-bold text-left pb-7">
              <a href={t[value.taskLink]} className="flex">
                <img src={value.taskIcon} className="h-10" alt="" />
                <p className="font-normal relative top-2 ml-4 text-link-blue-default hover:text-link-blue-hover">
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
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      taskLink: PropTypes.string.isRequired,
      taskIcon: PropTypes.string.isRequired,
    })
  ),
}
