import BenefitCard from '../components/molecules/BenefitCard'
import {
  ACTIVE_CPP,
  SUBMITTED_CPP,
  SUBMITTED_OAS,
  SUBMITTED_CPP_TASKS,
  ACTIVE_CPP_TASKS,
  SUBMITTED_OAS_TASKS,
} from '../contents/DashboardConstants'
export default function Dashboard() {
  return (
    <div>
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
    </div>
  )
}
