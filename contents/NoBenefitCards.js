import BenefitCode from '../constants/BenefitCode'
import {
  NO_BENEFIT_CPP_TASKS,
  NO_BENEFIT_GIS_TASKS,
  NO_BENEFIT_OAS_TASKS,
  NO_BENEFIT_EI_TASKS,
} from './DashboardBenefitTasksConstants'

const NO_BENEFIT_CPP = {
  benefitType: BenefitCode.cpp,
  learnMoreLink: '',
  tasks: NO_BENEFIT_CPP_TASKS,
}

const NO_BENEFIT_EI = {
  benefitType: BenefitCode.ei,
  learnMoreLink: '',
  tasks: NO_BENEFIT_EI_TASKS,
}

const NO_BENEFIT_GIS = {
  benefitType: BenefitCode.gis,
  learnMoreLink: '',
  tasks: NO_BENEFIT_GIS_TASKS,
}

const NO_BENEFIT_OAS = {
  benefitType: BenefitCode.oas,
  learnMoreLink: '',
  tasks: NO_BENEFIT_OAS_TASKS,
}

function getNoBenefitCards() {
  return [NO_BENEFIT_CPP, NO_BENEFIT_EI, NO_BENEFIT_GIS, NO_BENEFIT_OAS]
}

module.exports = {
  NO_BENEFIT_CPP,
  NO_BENEFIT_EI,
  NO_BENEFIT_GIS,
  NO_BENEFIT_OAS,
  getNoBenefitCards,
}
