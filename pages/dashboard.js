import BenefitCard from '../components/molecules/BenefitCard'
import {
  ACTIVE_CPP,
  SUBMITTED_CPP,
  SUBMITTED_OAS,
  ACTIVE_OAS,
  SUBMITTED_EI,
  ACTIVE_EI,
} from '../contents/DashboardBenefitCardConstants'
import {
  SUBMITTED_CPP_TASKS,
  ACTIVE_CPP_TASKS,
  SUBMITTED_OAS_TASKS,
  ACTIVE_OAS_TASKS,
  SUBMITTED_EI_TASKS,
  ACTIVE_EI_TASKS,
} from '../contents/DashboardBenefitTasksConstants'
export default function Dashboard() {
  return (
    <div className="layout-container">
      <BenefitCard
        locale="en"
        benefit={SUBMITTED_CPP}
        tasks={SUBMITTED_CPP_TASKS}
      />
      <BenefitCard locale="en" benefit={ACTIVE_CPP} tasks={ACTIVE_CPP_TASKS} />
      <BenefitCard
        locale="en"
        benefit={SUBMITTED_OAS}
        tasks={SUBMITTED_OAS_TASKS}
      />
      <BenefitCard locale="en" benefit={ACTIVE_OAS} tasks={ACTIVE_OAS_TASKS} />
      <BenefitCard
        locale="en"
        benefit={SUBMITTED_EI}
        tasks={SUBMITTED_EI_TASKS}
      />
      <BenefitCard locale="en" benefit={ACTIVE_EI} tasks={ACTIVE_EI_TASKS} />
    </div>
  )
}
