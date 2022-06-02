import { ProgramCodes } from '../constants/ProgramCodes'
import {
  NO_BENEFIT_CPP_TASKS,
  NO_BENEFIT_GIS_TASKS,
  NO_BENEFIT_OAS_TASKS,
  NO_BENEFIT_EI_TASKS,
} from './DashboardBenefitTasksConstants'

const NO_BENEFIT_CPP = {
  benefitType: ProgramCodes.CPP,
  learnMoreLink: '',
  taskList: {
    header: 'commonActions',
    tasks: NO_BENEFIT_CPP_TASKS,
  },
}

const NO_BENEFIT_EI = {
  benefitType: ProgramCodes.EI,
  learnMoreLink: '',
  taskList: {
    header: 'commonActions',
    tasks: NO_BENEFIT_EI_TASKS,
  },
}

const NO_BENEFIT_GIS = {
  benefitType: ProgramCodes.GIS,
  learnMoreLink: '',
  taskList: {
    header: 'commonActions',
    tasks: NO_BENEFIT_GIS_TASKS,
  },
}

const NO_BENEFIT_OAS = {
  benefitType: ProgramCodes.OAS,
  learnMoreLink: '',
  taskList: {
    header: 'commonActions',
    tasks: NO_BENEFIT_OAS_TASKS,
  },
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
