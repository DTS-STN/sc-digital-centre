import BenefitCard from '../components/molecules/BenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
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
import {
  APPLICATION_CARD_OAS,
  APPLICATION_CARD_GIS,
  APPLICATION_CARD_CPPD,
  APPLICATION_CARD_EI,
  APPLICATION_CARD_CPP,
} from '../contents/DashboardBenefitApplicationCards'

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

      <BenefitApplicationCard
        locale="en"
        benefitApplication={APPLICATION_CARD_OAS}
      />
      <BenefitApplicationCard
        locale="en"
        benefitApplication={APPLICATION_CARD_CPP}
      />
      <BenefitApplicationCard
        locale="en"
        benefitApplication={APPLICATION_CARD_EI}
      />
    </div>
  )
}
