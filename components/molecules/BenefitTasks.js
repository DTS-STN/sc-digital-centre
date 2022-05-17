import PropTypes from 'prop-types'
import en from '../../locales/en'
import fr from '../../locales/fr'

export default function BenefitTasks(props) {
  const t = props.locale === 'en' ? en : fr
  const displayedTasks = props.isExpanded
    ? props.tasks
    : props.tasks.slice(0, 6)
  const customHeader = props.header != null

  return (
    <div className="bg-gray-lighter px-8 py-6 group-last:rounded-b-lg h-full border">
      <h3 className="font-display font-bold text-xl">
        {customHeader
          ? props.header
          : props.noBenefit
          ? t.commonActions
          : `All ${props.benefitType} Tasks`}
      </h3>
      <ul className="grid grid-cols-1 gap-x-7 justify-items-start w-full pt-6 ">
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
