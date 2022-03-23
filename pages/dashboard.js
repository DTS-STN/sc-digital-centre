import BenefitCard from '../components/molecules/BenefitCard'
import BenefitApplicationCard from '../components/molecules/BenefitApplicationCard'
import {
  SUBMITTED_CPP,
  ACTIVE_CPP,
  SUBMITTED_CPPD,
  ACTIVE_CPPD,
  INACTIVE_CPPD,
  SUBMITTED_OAS,
  ACTIVE_OAS,
  SUBMITTED_EI,
  ACTIVE_EI,
  INACTIVE_EI,
} from '../contents/DashboardBenefitCardConstants'
import {
  SUBMITTED_CPP_TASKS,
  ACTIVE_CPP_TASKS,
  INACTIVE_CPP_TASKS,
  SUBMITTED_CPPD_TASKS,
  ACTIVE_CPPD_TASKS,
  SUBMITTED_OAS_TASKS,
  ACTIVE_OAS_TASKS,
  SUBMITTED_EI_TASKS,
  ACTIVE_EI_TASKS,
  INACTIVE_EI_TASKS,
} from '../contents/DashboardBenefitTasksConstants'
import {
  APPLICATION_CARD_OAS,
  APPLICATION_CARD_GIS,
  APPLICATION_CARD_CPPD,
  APPLICATION_CARD_EI,
  APPLICATION_CARD_CPP,
  APPLICATION_CARD_CPP_CHILDS_BENEFIT_AGED_18_25,
  APPLICATION_CARD_CPP_SURVIVOR_PENSION_AND_CHILD_BENEFITS,
  APPLICATION_CARD_CPP_ALLOWANCE_OR_ALLOWANCE_FOR_SURVIVOR,
  APPLICATION_CARD_CPP_PENSION_SHARING,
  APPLICATION_CARD_CPP_CREADIT_SPLIT,
  APPLICATION_CARD_CPP_CHILD_REARING_PROVISION,
  APPLICATION_CARD_CPP_DEATH_BENEFIT,
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
      <BenefitCard
        locale="en"
        benefit={INACTIVE_EI}
        tasks={INACTIVE_EI_TASKS}
      />
      <BenefitCard
        locale="en"
        benefit={SUBMITTED_CPPD}
        tasks={SUBMITTED_CPPD_TASKS}
      />
      <BenefitCard
        locale="en"
        benefit={ACTIVE_CPPD}
        tasks={ACTIVE_CPPD_TASKS}
      />
      <BenefitCard
        locale="en"
        benefit={INACTIVE_CPPD}
        tasks={INACTIVE_CPP_TASKS}
      />
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
        benefitApplication={APPLICATION_CARD_CPPD}
      />
      <BenefitApplicationCard
        locale="en"
        benefitApplication={APPLICATION_CARD_GIS}
      />
      <BenefitApplicationCard
        locale="en"
        benefitApplication={APPLICATION_CARD_EI}
      />
      <BenefitApplicationCard
        locale="en"
        benefitApplication={APPLICATION_CARD_CPP_CHILDS_BENEFIT_AGED_18_25}
      />
      <BenefitApplicationCard
        locale="en"
        benefitApplication={
          APPLICATION_CARD_CPP_SURVIVOR_PENSION_AND_CHILD_BENEFITS
        }
      />
      <BenefitApplicationCard
        locale="en"
        benefitApplication={
          APPLICATION_CARD_CPP_ALLOWANCE_OR_ALLOWANCE_FOR_SURVIVOR
        }
      />
      <BenefitApplicationCard
        locale="en"
        benefitApplication={APPLICATION_CARD_CPP_PENSION_SHARING}
      />
      <BenefitApplicationCard
        locale="en"
        benefitApplication={APPLICATION_CARD_CPP_CREADIT_SPLIT}
      />
      <BenefitApplicationCard
        locale="en"
        benefitApplication={APPLICATION_CARD_CPP_CHILD_REARING_PROVISION}
      />
      <BenefitApplicationCard
        locale="en"
        benefitApplication={APPLICATION_CARD_CPP_DEATH_BENEFIT}
      />
    </div>
  )
}
