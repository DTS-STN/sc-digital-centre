import { ProgramCodes } from '../constants/ProgramCodes'
import { StatusCodes } from '../constants/StatusCodes'
import { BenefitTasks } from './BenefitTasks'

const SUBMITTED_CPP_ESTIMATE_TASKS = {
  header: 'estimate',
  tasks: [BenefitTasks.RetirementIncomeTask],
}

const SUBMITTED_CPP_CHANGE_TASKS = {
  header: 'changeTasks',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const ACTIVE_CPP_PAYMENT_TASKS = {
  header: 'paymentTasks',
  tasks: [
    BenefitTasks.AllPaymentsTask,
    BenefitTasks.CppContributionTask,
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.TaxSlipTask,
  ],
}

const ACTIVE_CPP_CHANGE_TASKS = {
  header: 'changeTasks',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.TaxDeductionsTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.ReconsiderationTask,
  ],
}

const INACTIVE_CPP_TASKS = {
  header: `commonActions`,
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const INACTIVE_CPPD_TASKS = {
  header: `commonActions`,
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_CPPD_TASKS = [
  BenefitTasks.AllPaymentsTask,
  BenefitTasks.StatusUpdateTask,
  BenefitTasks.TaxSlipTask,
  BenefitTasks.ReconsiderationTask,
  BenefitTasks.CppContributionTask,
  BenefitTasks.TaxDeductionsTask,
  BenefitTasks.GiveConsentTask,
  BenefitTasks.UploadMyDocuments,
  BenefitTasks.UpdateAccountInfoTask,
]

const ACTIVE_CPPD_PAYMENT_TASKS = {
  header: 'paymentTasks',
  tasks: [
    BenefitTasks.AllPaymentsTask,
    BenefitTasks.CppContributionTask,
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.TaxSlipTask,
  ],
}

const ACTIVE_CPPD_CHANGE_TASKS = {
  header: 'changeTasks',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.TaxDeductionsTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.ReconsiderationTask,
    BenefitTasks.SubmitDocuments,
  ],
}

const SUBMITTED_OAS_TASKS = [
  BenefitTasks.AllPaymentsTask,
  BenefitTasks.StatusUpdateTask,
  BenefitTasks.RetirementIncomeTask,
  BenefitTasks.CppContributionTask,
  BenefitTasks.TaxDeductionsTask,
  BenefitTasks.DelayOasPensionTask,
  BenefitTasks.GiveConsentTask,
  BenefitTasks.TaxSlipTask,
  BenefitTasks.TaxSlipMailingTask,
  BenefitTasks.ReconsiderationTask,
  BenefitTasks.UpdateAccountInfoTask,
]

const ACTIVE_OAS_GIS_PAYMENT_TASKS = {
  header: 'paymentTasks',
  tasks: [
    BenefitTasks.AllPaymentsTask,
    BenefitTasks.CppContributionTask,
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.TaxSlipTask,
  ],
}

const ACTIVE_OAS_GIS_CHANGE_TASKS = {
  header: 'changeTasks',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.TaxDeductionsTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.ReconsiderationTask,
  ],
}

const RECEIVED_OAS_GIS_TASKS = {
  header: 'commonActions',
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_EI_TASKS = [
  BenefitTasks.EiStatusUpdateTask,
  BenefitTasks.CompleteInsuranceReportTask,
  BenefitTasks.ViewPaymentInfo,
  BenefitTasks.AccessCode,
  BenefitTasks.SubmitDocuments,
  BenefitTasks.ViewDocuments,
  BenefitTasks.ViewPastClaimsTask,
  BenefitTasks.SubmitEformsTask,
  BenefitTasks.TaxSlipTask,
  BenefitTasks.TaxSlipMailingTask,
  BenefitTasks.RegisterForAlerts,
  BenefitTasks.UpdateAccountInfoTask,
]

const ACTIVE_EI_COMMON_TASKS = {
  header: 'commonActions',
  tasks: [
    BenefitTasks.CompleteInsuranceReportTask,
    BenefitTasks.AccessCode,
    BenefitTasks.ReportMistake,
  ],
}

const ACTIVE_EI_PAYMENT_TASKS = {
  header: 'paymentClaimsTaxTasks',
  tasks: [
    BenefitTasks.ViewLatestClaimTask,
    BenefitTasks.ViewPastClaimsTask,
    BenefitTasks.ViewPaymentInfo,
    BenefitTasks.TaxSlipTask,
    BenefitTasks.TaxSlipMailingTask,
  ],
}

const ACTIVE_EI_DOCS_TASKS = {
  header: 'documentsReportsTasks',
  tasks: [
    BenefitTasks.RecordOfEmployment,
    BenefitTasks.ViewDocuments,
    BenefitTasks.SubmitDocuments,
    BenefitTasks.SubmitEformsTask,
  ],
}

const INACTIVE_EI_TASKS = {
  header: 'commonActions',
  tasks: [
    BenefitTasks.RecordOfEmployment,
    BenefitTasks.ViewPastClaimsTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.TaxSlipT4eTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.ViewPaymentInfo,
  ],
}

const NO_BENEFIT_CPP_TASKS = [
  BenefitTasks.ApplyForCppDisabilityBenefits,
  BenefitTasks.ApplyForCppRetirementPensions,
  BenefitTasks.EstimateMyMonthlyCppBenefits,
  BenefitTasks.ViewMyCppContributions,
  BenefitTasks.ApplyForCppDeathBenefits,
  BenefitTasks.ApplyForGuranteedIncomeSupplement,
  BenefitTasks.ApplyForCppSurvivorsPensionAndChildrensBenefit,
]

const NO_BENEFIT_EI_TASKS = [
  BenefitTasks.ViewPaymentInfoIconWhite,
  BenefitTasks.RecordOfEmployment,
]

const NO_BENEFIT_GIS_TASKS = [BenefitTasks.ApplyForGuranteedIncomeSupplement]

const NO_BENEFIT_OAS_TASKS = [
  BenefitTasks.ApplyForOldAgeSecurity,
  BenefitTasks.ApplyForGuranteedIncomeSupplement,
]

const ACTIVE_SEB_TASKS = {
  header: 'commonActions',
  tasks: [BenefitTasks.ViewAgreementStatusDetails],
}

const INACTIVE_OAS_GIS_TASKS = {
  header: `commonActions`,
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const ACCOUNT_INFORMATION = {
  header: `accountInformation`,
  tasks: [BenefitTasks.UpdateAccountInfoTask, BenefitTasks.RegisterForAlerts],
}

const TASK_GROUPS = {
  [ProgramCodes.CPP]: {
    [StatusCodes.inactive]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPP_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPP_TASKS],
      },
    },
    [StatusCodes.applicationReceived]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPP_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPP_TASKS],
      },
    },
    [StatusCodes.decisionSent]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPP_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPP_TASKS],
      },
    },
    [StatusCodes.paymentHold]: {
      en: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [ACTIVE_CPP_PAYMENT_TASKS, ACTIVE_CPP_CHANGE_TASKS],
      },
      fr: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [ACTIVE_CPP_PAYMENT_TASKS, ACTIVE_CPP_CHANGE_TASKS],
      },
    },
    [StatusCodes.inPayment]: {
      en: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [ACTIVE_CPP_PAYMENT_TASKS, ACTIVE_CPP_CHANGE_TASKS],
      },
      fr: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [ACTIVE_CPP_PAYMENT_TASKS, ACTIVE_CPP_CHANGE_TASKS],
      },
    },
  },
  [ProgramCodes.CPPD]: {
    [StatusCodes.inactive]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPPD_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPPD_TASKS],
      },
    },
    [StatusCodes.applicationReceived]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPPD_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPPD_TASKS],
      },
    },
    [StatusCodes.decisionSent]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPPD_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_CPPD_TASKS],
      },
    },
    [StatusCodes.paymentHold]: {
      en: {
        taskHeadingKey: 'paymentTasks',
        tasksGroups: [ACTIVE_CPPD_PAYMENT_TASKS, ACTIVE_CPPD_CHANGE_TASKS],
      },
      fr: {
        taskHeadingKey: 'paymentTasks',
        tasksGroups: [ACTIVE_CPPD_PAYMENT_TASKS, ACTIVE_CPPD_CHANGE_TASKS],
      },
    },
    [StatusCodes.inPayment]: {
      en: {
        taskHeadingKey: 'paymentTasks',
        tasksGroups: [ACTIVE_CPPD_PAYMENT_TASKS, ACTIVE_CPPD_CHANGE_TASKS],
      },
      fr: {
        taskHeadingKey: 'paymentTasks',
        tasksGroups: [ACTIVE_CPPD_PAYMENT_TASKS, ACTIVE_CPPD_CHANGE_TASKS],
      },
    },
  },
  [ProgramCodes.OAS]: {
    [StatusCodes.inactive]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
    },
    [StatusCodes.applicationReceived]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
    },
    [StatusCodes.decisionSent]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
    },
    [StatusCodes.paymentHold]: {
      en: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS,
          ACTIVE_OAS_GIS_CHANGE_TASKS,
        ],
      },
      fr: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS,
          ACTIVE_OAS_GIS_CHANGE_TASKS,
        ],
      },
    },
    [StatusCodes.inPayment]: {
      en: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS,
          ACTIVE_OAS_GIS_CHANGE_TASKS,
        ],
      },
      fr: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS,
          ACTIVE_OAS_GIS_CHANGE_TASKS,
        ],
      },
    },
  },
  [ProgramCodes.GIS]: {
    [StatusCodes.inactive]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
    },
    [StatusCodes.applicationReceived]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
    },
    [StatusCodes.decisionSent]: {
      en: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonActions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS],
      },
    },
    [StatusCodes.paymentHold]: {
      en: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS,
          ACTIVE_OAS_GIS_CHANGE_TASKS,
        ],
      },
      fr: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS,
          ACTIVE_OAS_GIS_CHANGE_TASKS,
        ],
      },
    },
    [StatusCodes.inPayment]: {
      en: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS,
          ACTIVE_OAS_GIS_CHANGE_TASKS,
        ],
      },
      fr: {
        taskHeadingKey: 'paymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS,
          ACTIVE_OAS_GIS_CHANGE_TASKS,
        ],
      },
    },
  },
  [ProgramCodes.EI]: {
    [StatusCodes.inPayment]: {
      en: {
        taskHeadingKey: 'commonPaymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS,
          ACTIVE_EI_PAYMENT_TASKS,
          ACTIVE_EI_DOCS_TASKS,
          ACCOUNT_INFORMATION,
        ],
      },
      fr: {
        taskHeadingKey: 'commonPaymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS,
          ACTIVE_EI_PAYMENT_TASKS,
          ACTIVE_EI_DOCS_TASKS,
          ACCOUNT_INFORMATION,
        ],
      },
    },
    [StatusCodes.benefitUpdate]: {
      en: {
        taskHeadingKey: 'commonPaymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS,
          ACTIVE_EI_PAYMENT_TASKS,
          ACTIVE_EI_DOCS_TASKS,
          ACCOUNT_INFORMATION,
        ],
      },
      fr: {
        taskHeadingKey: 'commonPaymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS,
          ACTIVE_EI_PAYMENT_TASKS,
          ACTIVE_EI_DOCS_TASKS,
          ACCOUNT_INFORMATION,
        ],
      },
    },
    [StatusCodes.applicationReceived]: {
      en: {
        taskHeadingKey: 'commonPaymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS,
          ACTIVE_EI_PAYMENT_TASKS,
          ACTIVE_EI_DOCS_TASKS,
          ACCOUNT_INFORMATION,
        ],
      },
      fr: {
        taskHeadingKey: 'commonPaymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS,
          ACTIVE_EI_PAYMENT_TASKS,
          ACTIVE_EI_DOCS_TASKS,
          ACCOUNT_INFORMATION,
        ],
      },
    },
    [StatusCodes.exhausted]: {
      en: {
        taskHeadingKey: 'commonPaymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS,
          ACTIVE_EI_PAYMENT_TASKS,
          ACTIVE_EI_DOCS_TASKS,
          ACCOUNT_INFORMATION,
        ],
      },
      fr: {
        taskHeadingKey: 'commonPaymentsTaxesAccount',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS,
          ACTIVE_EI_PAYMENT_TASKS,
          ACTIVE_EI_DOCS_TASKS,
          ACCOUNT_INFORMATION,
        ],
      },
    },
    [StatusCodes.inactive]: {
      en: {
        taskHeadingKey: 'commonPaymentsTaxesAccount',
        tasksGroups: [INACTIVE_EI_TASKS],
      },
      fr: {
        taskHeadingKey: 'commonPaymentsTaxesAccount',
        tasksGroups: [INACTIVE_EI_TASKS],
      },
    },
  },
  [ProgramCodes.SEB]: {
    [StatusCodes.activeAgreement]: {
      en: {
        taskHeadingKey: 'exploreCommonActions',
        tasksGroups: [ACTIVE_SEB_TASKS],
      },
      fr: {
        taskHeadingKey: 'exploreCommonActions',
        tasksGroups: [ACTIVE_SEB_TASKS],
      },
    },
  },
}

module.exports = {
  TASK_GROUPS,
  SUBMITTED_CPP_ESTIMATE_TASKS,
  SUBMITTED_CPP_CHANGE_TASKS,
  ACTIVE_CPP_PAYMENT_TASKS,
  ACTIVE_CPP_CHANGE_TASKS,
  INACTIVE_CPP_TASKS,
  SUBMITTED_CPPD_TASKS,
  SUBMITTED_OAS_TASKS,
  ACTIVE_OAS_GIS_PAYMENT_TASKS,
  ACTIVE_OAS_GIS_CHANGE_TASKS,
  RECEIVED_OAS_GIS_TASKS,
  INACTIVE_OAS_GIS_TASKS,
  SUBMITTED_EI_TASKS,
  ACTIVE_EI_COMMON_TASKS,
  ACTIVE_EI_PAYMENT_TASKS,
  ACTIVE_EI_DOCS_TASKS,
  INACTIVE_EI_TASKS,
  NO_BENEFIT_CPP_TASKS,
  NO_BENEFIT_EI_TASKS,
  NO_BENEFIT_GIS_TASKS,
  NO_BENEFIT_OAS_TASKS,
  ACTIVE_SEB_TASKS,
}
