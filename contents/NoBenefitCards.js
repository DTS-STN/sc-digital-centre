import { ProgramCodes } from '../constants/ProgramCodes'
import {
  NO_BENEFIT_CPP_TASKS_EN,
  NO_BENEFIT_GIS_TASKS_EN,
  NO_BENEFIT_OAS_TASKS_EN,
  NO_BENEFIT_EI_TASKS_EN,
  NO_BENEFIT_CPP_TASKS_FR,
  NO_BENEFIT_GIS_TASKS_FR,
  NO_BENEFIT_OAS_TASKS_FR,
  NO_BENEFIT_EI_TASKS_FR,
} from './BenefitTasksGroups'

const NO_BENEFIT_CPP = {
  en: {
    benefitType: ProgramCodes.CPP,
    learnMoreLink: '',
    taskList: {
      header: 'Common actions',
      tasks: NO_BENEFIT_CPP_TASKS_EN,
    },
  },
  fr: {
    benefitType: ProgramCodes.CPP,
    learnMoreLink: '',
    taskList: {
      header: 'Actions courantes',
      tasks: NO_BENEFIT_CPP_TASKS_FR,
    },
  },
}

const NO_BENEFIT_EI = {
  en: {
    benefitType: ProgramCodes.EI,
    learnMoreLink: '',
    taskList: {
      header: 'Common actions',
      tasks: NO_BENEFIT_EI_TASKS_EN,
    },
  },
  fr: {
    benefitType: ProgramCodes.EI,
    learnMoreLink: '',
    taskList: {
      header: 'Actions courantes',
      tasks: NO_BENEFIT_EI_TASKS_FR,
    },
  },
}

const NO_BENEFIT_GIS = {
  en: {
    benefitType: ProgramCodes.GIS,
    learnMoreLink: '',
    taskList: {
      header: 'Common actions',
      tasks: NO_BENEFIT_GIS_TASKS_EN,
    },
  },
  fr: {
    benefitType: ProgramCodes.GIS,
    learnMoreLink: '',
    taskList: {
      header: 'Actions courantes',
      tasks: NO_BENEFIT_GIS_TASKS_FR,
    },
  },
}

const NO_BENEFIT_OAS = {
  en: {
    benefitType: ProgramCodes.OAS,
    learnMoreLink: '',
    taskList: {
      header: 'Common actions',
      tasks: NO_BENEFIT_OAS_TASKS_EN,
    },
  },
  fr: {
    benefitType: ProgramCodes.OAS,
    learnMoreLink: '',
    taskList: {
      header: 'Actions courantes',
      tasks: NO_BENEFIT_OAS_TASKS_FR,
    },
  },
}

function getNoBenefitCards(locale) {
  return [
    NO_BENEFIT_CPP[locale],
    NO_BENEFIT_EI[locale],
    NO_BENEFIT_GIS[locale],
    NO_BENEFIT_OAS[locale],
  ]
}

module.exports = {
  NO_BENEFIT_CPP,
  NO_BENEFIT_EI,
  NO_BENEFIT_GIS,
  NO_BENEFIT_OAS,
  getNoBenefitCards,
}
