import BenefitCard from '../components/molecules/BenefitCard'
import {
  ACTIVE_CANADA_PENSION_PLAN,
  SUBMITTED_CANADA_PENSION_PLAN,
  OLD_AGE_SECURITY,
  SUBMITTED_CPP_TASKS,
  ACTIVE_CPP_TASKS,
  SUBMITTED_OAS_TASKS,
} from '../contents/DashboardConstants'
export default function Dashboard() {
  return (
    <div>
      <BenefitCard
        locale="en"
        benefit={SUBMITTED_CANADA_PENSION_PLAN}
        tasks={SUBMITTED_CPP_TASKS}
      />
      <BenefitCard
        locale="en"
        benefit={ACTIVE_CANADA_PENSION_PLAN}
        tasks={ACTIVE_CPP_TASKS}
      />
      <BenefitCard
        locale="en"
        benefit={OLD_AGE_SECURITY}
        tasks={SUBMITTED_OAS_TASKS}
      />
    </div>
  )
}
