import { ProgramCodes } from '../constants/ProgramCodes'
import { StatusCodes } from '../constants/StatusCodes'
import { BenefitTasks_EN, BenefitTasks_FR } from './BenefitTasks'

const SUBMITTED_CPP_ESTIMATE_TASKS_EN = {
  header: 'Estimate',
  tasks: [BenefitTasks_EN.RetirementIncomeTask],
}

const SUBMITTED_CPP_CHANGE_TASKS_EN = {
  header: 'Make a Change',
  tasks: [
    BenefitTasks_EN.DelayOasPensionTask,
    BenefitTasks_EN.GiveConsentTask,
    BenefitTasks_EN.UpdateAccountInfoTask,
  ],
}

const ACTIVE_CPP_PAYMENT_TASKS_EN = {
  header: 'Payments and taxes',
  tasks: [
    BenefitTasks_EN.AllPaymentsTask,
    BenefitTasks_EN.CppContributionTask,
    BenefitTasks_EN.RetirementIncomeTask,
    BenefitTasks_EN.TaxSlipTask,
  ],
}

const ACTIVE_CPP_CHANGE_TASKS_EN = {
  header: 'Make a Change',
  tasks: [
    BenefitTasks_EN.DelayOasPensionTask,
    BenefitTasks_EN.TaxDeductionsTask,
    BenefitTasks_EN.UpdateAccountInfoTask,
    BenefitTasks_EN.GiveConsentTask,
    BenefitTasks_EN.ReconsiderationTask,
  ],
}

const INACTIVE_CPP_TASKS_EN = {
  header: `Common actions`,
  tasks: [
    BenefitTasks_EN.RetirementIncomeTask,
    BenefitTasks_EN.DelayOasPensionTask,
    BenefitTasks_EN.GiveConsentTask,
    BenefitTasks_EN.UpdateAccountInfoTask,
  ],
}

const INACTIVE_CPPD_TASKS_EN = {
  header: `Common actions`,
  tasks: [
    BenefitTasks_EN.GiveConsentTask,
    BenefitTasks_EN.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_CPPD_TASKS_EN = [
  BenefitTasks_EN.AllPaymentsTask,
  BenefitTasks_EN.StatusUpdateTask,
  BenefitTasks_EN.TaxSlipTask,
  BenefitTasks_EN.ReconsiderationTask,
  BenefitTasks_EN.CppContributionTask,
  BenefitTasks_EN.TaxDeductionsTask,
  BenefitTasks_EN.GiveConsentTask,
  BenefitTasks_EN.UploadMyDocuments,
  BenefitTasks_EN.UpdateAccountInfoTask,
]

const ACTIVE_CPPD_PAYMENT_TASKS_EN = {
  header: 'Payments and taxes',
  tasks: [
    BenefitTasks_EN.AllPaymentsTask,
    BenefitTasks_EN.CppContributionTask,
    BenefitTasks_EN.RetirementIncomeTask,
    BenefitTasks_EN.TaxSlipTask,
  ],
}

const ACTIVE_CPPD_CHANGE_TASKS_EN = {
  header: 'Make a Change',
  tasks: [
    BenefitTasks_EN.TaxDeductionsTask,
    BenefitTasks_EN.UpdateAccountInfoTask,
    BenefitTasks_EN.GiveConsentTask,
    BenefitTasks_EN.ReconsiderationTask,
    BenefitTasks_EN.SubmitDocuments,
  ],
}

const SUBMITTED_OAS_TASKS_EN = [
  BenefitTasks_EN.AllPaymentsTask,
  BenefitTasks_EN.StatusUpdateTask,
  BenefitTasks_EN.RetirementIncomeTask,
  BenefitTasks_EN.CppContributionTask,
  BenefitTasks_EN.TaxDeductionsTask,
  BenefitTasks_EN.DelayOasPensionTask,
  BenefitTasks_EN.GiveConsentTask,
  BenefitTasks_EN.TaxSlipTask,
  BenefitTasks_EN.TaxSlipMailingTask,
  BenefitTasks_EN.ReconsiderationTask,
  BenefitTasks_EN.UpdateAccountInfoTask,
]

const ACTIVE_OAS_GIS_PAYMENT_TASKS_EN = {
  header: 'Payments and taxes',
  tasks: [
    BenefitTasks_EN.AllPaymentsTask,
    BenefitTasks_EN.CppContributionTask,
    BenefitTasks_EN.RetirementIncomeTask,
    BenefitTasks_EN.TaxSlipTask,
  ],
}

const ACTIVE_OAS_GIS_CHANGE_TASKS_EN = {
  header: 'Make a Change',
  tasks: [
    BenefitTasks_EN.DelayOasPensionTask,
    BenefitTasks_EN.TaxDeductionsTask,
    BenefitTasks_EN.UpdateAccountInfoTask,
    BenefitTasks_EN.GiveConsentTask,
    BenefitTasks_EN.ReconsiderationTask,
  ],
}

const RECEIVED_OAS_GIS_TASKS_EN = {
  header: 'Common actions',
  tasks: [
    BenefitTasks_EN.RetirementIncomeTask,
    BenefitTasks_EN.DelayOasPensionTask,
    BenefitTasks_EN.GiveConsentTask,
    BenefitTasks_EN.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_EI_TASKS_EN = [
  BenefitTasks_EN.EiStatusUpdateTask,
  BenefitTasks_EN.CompleteInsuranceReportTask,
  BenefitTasks_EN.ViewPaymentInfo,
  BenefitTasks_EN.AccessCode,
  BenefitTasks_EN.SubmitDocuments,
  BenefitTasks_EN.ViewDocuments,
  BenefitTasks_EN.ViewPastClaimsTask,
  BenefitTasks_EN.SubmitEformsTask,
  BenefitTasks_EN.TaxSlipTask,
  BenefitTasks_EN.TaxSlipMailingTask,
  BenefitTasks_EN.RegisterForAlerts,
  BenefitTasks_EN.UpdateAccountInfoTask,
]

const ACTIVE_EI_COMMON_TASKS_EN = {
  header: 'Common actions',
  tasks: [
    BenefitTasks_EN.CompleteInsuranceReportTask,
    BenefitTasks_EN.AccessCode,
    BenefitTasks_EN.ReportMistake,
  ],
}

const ACTIVE_EI_PAYMENT_TASKS_EN = {
  header: 'Payments and taxes:',
  tasks: [
    BenefitTasks_EN.ViewLatestClaimTask,
    BenefitTasks_EN.ViewPastClaimsTask,
    BenefitTasks_EN.ViewPaymentInfo,
    BenefitTasks_EN.TaxSlipTask,
    BenefitTasks_EN.TaxSlipMailingTask,
  ],
}

const ACTIVE_EI_DOCS_TASKS_EN = {
  header: 'Documents and reports',
  tasks: [
    BenefitTasks_EN.RecordOfEmployment,
    BenefitTasks_EN.ViewDocuments,
    BenefitTasks_EN.SubmitDocuments,
    BenefitTasks_EN.SubmitEformsTask,
  ],
}

const INACTIVE_EI_TASKS_EN = {
  header: 'Common actions',
  tasks: [
    BenefitTasks_EN.RecordOfEmployment,
    BenefitTasks_EN.ViewPastClaimsTask,
    BenefitTasks_EN.GiveConsentTask,
    BenefitTasks_EN.TaxSlipT4eTask,
    BenefitTasks_EN.UpdateAccountInfoTask,
    BenefitTasks_EN.ViewPaymentInfo,
  ],
}

const NO_BENEFIT_CPP_TASKS_EN = [
  BenefitTasks_EN.ApplyForCppDisabilityBenefits,
  BenefitTasks_EN.ApplyForCppRetirementPensions,
  BenefitTasks_EN.EstimateMyMonthlyCppBenefits,
  BenefitTasks_EN.ViewMyCppContributions,
  BenefitTasks_EN.ApplyForCppDeathBenefits,
  BenefitTasks_EN.ApplyForGuranteedIncomeSupplement,
  BenefitTasks_EN.ApplyForCppSurvivorsPensionAndChildrensBenefit,
]

const NO_BENEFIT_EI_TASKS_EN = [
  BenefitTasks_EN.ViewPaymentInfoIconWhite,
  BenefitTasks_EN.RecordOfEmployment,
]

const NO_BENEFIT_GIS_TASKS_EN = [
  BenefitTasks_EN.ApplyForGuranteedIncomeSupplement,
]

const NO_BENEFIT_OAS_TASKS_EN = [
  BenefitTasks_EN.ApplyForOldAgeSecurity,
  BenefitTasks_EN.ApplyForGuranteedIncomeSupplement,
]

const ACTIVE_SEB_TASKS_EN = {
  header: 'Common actions',
  tasks: [BenefitTasks_EN.ViewAgreementStatusDetails],
}

const INACTIVE_OAS_GIS_TASKS_EN = {
  header: `Common actions`,
  tasks: [
    BenefitTasks_EN.RetirementIncomeTask,
    BenefitTasks_EN.DelayOasPensionTask,
    BenefitTasks_EN.GiveConsentTask,
    BenefitTasks_EN.UpdateAccountInfoTask,
  ],
}

const ACCOUNT_INFORMATION_EN = {
  header: `Account information`,
  tasks: [
    BenefitTasks_EN.UpdateAccountInfoTask,
    BenefitTasks_EN.RegisterForAlerts,
  ],
}

const SUBMITTED_CPP_ESTIMATE_TASKS_FR = {
  header: '(FR) Estimate',
  tasks: [BenefitTasks_FR.RetirementIncomeTask],
}

const SUBMITTED_CPP_CHANGE_TASKS_FR = {
  header: 'Faire un changement',
  tasks: [
    BenefitTasks_FR.DelayOasPensionTask,
    BenefitTasks_FR.GiveConsentTask,
    BenefitTasks_FR.UpdateAccountInfoTask,
  ],
}

const ACTIVE_CPP_PAYMENT_TASKS_FR = {
  header: 'Paiements et impôts',
  tasks: [
    BenefitTasks_FR.AllPaymentsTask,
    BenefitTasks_FR.CppContributionTask,
    BenefitTasks_FR.RetirementIncomeTask,
    BenefitTasks_FR.TaxSlipTask,
  ],
}

const ACTIVE_CPP_CHANGE_TASKS_FR = {
  header: 'Faire un changement',
  tasks: [
    BenefitTasks_FR.DelayOasPensionTask,
    BenefitTasks_FR.TaxDeductionsTask,
    BenefitTasks_FR.UpdateAccountInfoTask,
    BenefitTasks_FR.GiveConsentTask,
    BenefitTasks_FR.ReconsiderationTask,
  ],
}

const INACTIVE_CPP_TASKS_FR = {
  header: `Actions courantes`,
  tasks: [
    BenefitTasks_FR.RetirementIncomeTask,
    BenefitTasks_FR.DelayOasPensionTask,
    BenefitTasks_FR.GiveConsentTask,
    BenefitTasks_FR.UpdateAccountInfoTask,
  ],
}

const INACTIVE_CPPD_TASKS_FR = {
  header: `Actions courantes`,
  tasks: [
    BenefitTasks_FR.GiveConsentTask,
    BenefitTasks_FR.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_CPPD_TASKS_FR = [
  BenefitTasks_FR.AllPaymentsTask,
  BenefitTasks_FR.StatusUpdateTask,
  BenefitTasks_FR.TaxSlipTask,
  BenefitTasks_FR.ReconsiderationTask,
  BenefitTasks_FR.CppContributionTask,
  BenefitTasks_FR.TaxDeductionsTask,
  BenefitTasks_FR.GiveConsentTask,
  BenefitTasks_FR.UploadMyDocuments,
  BenefitTasks_FR.UpdateAccountInfoTask,
]

const ACTIVE_CPPD_PAYMENT_TASKS_FR = {
  header: 'Paiements et impôts',
  tasks: [
    BenefitTasks_FR.AllPaymentsTask,
    BenefitTasks_FR.CppContributionTask,
    BenefitTasks_FR.RetirementIncomeTask,
    BenefitTasks_FR.TaxSlipTask,
  ],
}

const ACTIVE_CPPD_CHANGE_TASKS_FR = {
  header: 'Faire un changement',
  tasks: [
    BenefitTasks_FR.TaxDeductionsTask,
    BenefitTasks_FR.UpdateAccountInfoTask,
    BenefitTasks_FR.GiveConsentTask,
    BenefitTasks_FR.ReconsiderationTask,
    BenefitTasks_FR.SubmitDocuments,
  ],
}

const SUBMITTED_OAS_TASKS_FR = [
  BenefitTasks_FR.AllPaymentsTask,
  BenefitTasks_FR.StatusUpdateTask,
  BenefitTasks_FR.RetirementIncomeTask,
  BenefitTasks_FR.CppContributionTask,
  BenefitTasks_FR.TaxDeductionsTask,
  BenefitTasks_FR.DelayOasPensionTask,
  BenefitTasks_FR.GiveConsentTask,
  BenefitTasks_FR.TaxSlipTask,
  BenefitTasks_FR.TaxSlipMailingTask,
  BenefitTasks_FR.ReconsiderationTask,
  BenefitTasks_FR.UpdateAccountInfoTask,
]

const ACTIVE_OAS_GIS_PAYMENT_TASKS_FR = {
  header: 'Paiements et impôts',
  tasks: [
    BenefitTasks_FR.AllPaymentsTask,
    BenefitTasks_FR.CppContributionTask,
    BenefitTasks_FR.RetirementIncomeTask,
    BenefitTasks_FR.TaxSlipTask,
  ],
}

const ACTIVE_OAS_GIS_CHANGE_TASKS_FR = {
  header: 'Faire un changement',
  tasks: [
    BenefitTasks_FR.DelayOasPensionTask,
    BenefitTasks_FR.TaxDeductionsTask,
    BenefitTasks_FR.UpdateAccountInfoTask,
    BenefitTasks_FR.GiveConsentTask,
    BenefitTasks_FR.ReconsiderationTask,
  ],
}

const RECEIVED_OAS_GIS_TASKS_FR = {
  header: 'Actions courantes',
  tasks: [
    BenefitTasks_FR.RetirementIncomeTask,
    BenefitTasks_FR.DelayOasPensionTask,
    BenefitTasks_FR.GiveConsentTask,
    BenefitTasks_FR.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_EI_TASKS_FR = [
  BenefitTasks_FR.EiStatusUpdateTask,
  BenefitTasks_FR.CompleteInsuranceReportTask,
  BenefitTasks_FR.ViewPaymentInfo,
  BenefitTasks_FR.AccessCode,
  BenefitTasks_FR.SubmitDocuments,
  BenefitTasks_FR.ViewDocuments,
  BenefitTasks_FR.ViewPastClaimsTask,
  BenefitTasks_FR.SubmitEformsTask,
  BenefitTasks_FR.TaxSlipTask,
  BenefitTasks_FR.TaxSlipMailingTask,
  BenefitTasks_FR.RegisterForAlerts,
  BenefitTasks_FR.UpdateAccountInfoTask,
]

const ACTIVE_EI_COMMON_TASKS_FR = {
  header: 'Actions courantes',
  tasks: [
    BenefitTasks_FR.CompleteInsuranceReportTask,
    BenefitTasks_FR.AccessCode,
    BenefitTasks_FR.ReportMistake,
  ],
}

const ACTIVE_EI_PAYMENT_TASKS_FR = {
  header: 'Paiements et impôts :',
  tasks: [
    BenefitTasks_FR.ViewLatestClaimTask,
    BenefitTasks_FR.ViewPastClaimsTask,
    BenefitTasks_FR.ViewPaymentInfo,
    BenefitTasks_FR.TaxSlipTask,
    BenefitTasks_FR.TaxSlipMailingTask,
  ],
}

const ACTIVE_EI_DOCS_TASKS_FR = {
  header: 'Rapports et documents',
  tasks: [
    BenefitTasks_FR.RecordOfEmployment,
    BenefitTasks_FR.ViewDocuments,
    BenefitTasks_FR.SubmitDocuments,
    BenefitTasks_FR.SubmitEformsTask,
  ],
}

const INACTIVE_EI_TASKS_FR = {
  header: 'Actions courantes',
  tasks: [
    BenefitTasks_FR.RecordOfEmployment,
    BenefitTasks_FR.ViewPastClaimsTask,
    BenefitTasks_FR.GiveConsentTask,
    BenefitTasks_FR.TaxSlipT4eTask,
    BenefitTasks_FR.UpdateAccountInfoTask,
    BenefitTasks_FR.ViewPaymentInfo,
  ],
}

const NO_BENEFIT_CPP_TASKS_FR = [
  BenefitTasks_FR.ApplyForCppDisabilityBenefits,
  BenefitTasks_FR.ApplyForCppRetirementPensions,
  BenefitTasks_FR.EstimateMyMonthlyCppBenefits,
  BenefitTasks_FR.ViewMyCppContributions,
  BenefitTasks_FR.ApplyForCppDeathBenefits,
  BenefitTasks_FR.ApplyForGuranteedIncomeSupplement,
  BenefitTasks_FR.ApplyForCppSurvivorsPensionAndChildrensBenefit,
]

const NO_BENEFIT_EI_TASKS_FR = [
  BenefitTasks_FR.ViewPaymentInfoIconWhite,
  BenefitTasks_FR.RecordOfEmployment,
]

const NO_BENEFIT_GIS_TASKS_FR = [
  BenefitTasks_FR.ApplyForGuranteedIncomeSupplement,
]

const NO_BENEFIT_OAS_TASKS_FR = [
  BenefitTasks_FR.ApplyForOldAgeSecurity,
  BenefitTasks_FR.ApplyForGuranteedIncomeSupplement,
]

const ACTIVE_SEB_TASKS_FR = {
  header: 'Actions courantes',
  tasks: [BenefitTasks_FR.ViewAgreementStatusDetails],
}

const INACTIVE_OAS_GIS_TASKS_FR = {
  header: `Actions courantes`,
  tasks: [
    BenefitTasks_FR.RetirementIncomeTask,
    BenefitTasks_FR.DelayOasPensionTask,
    BenefitTasks_FR.GiveConsentTask,
    BenefitTasks_FR.UpdateAccountInfoTask,
  ],
}

const ACCOUNT_INFORMATION_FR = {
  header: `Renseignements personnels`,
  tasks: [
    BenefitTasks_FR.UpdateAccountInfoTask,
    BenefitTasks_FR.RegisterForAlerts,
  ],
}

const TASK_GROUPS = {
  [ProgramCodes.CPP]: {
    [StatusCodes.inactive]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_CPP_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_CPP_TASKS_FR],
      },
    },
    [StatusCodes.applicationReceived]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_CPP_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_CPP_TASKS_FR],
      },
    },
    [StatusCodes.decisionSent]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_CPP_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_CPP_TASKS_FR],
      },
    },
    [StatusCodes.paymentHold]: {
      en: {
        taskHeadingKey: 'Payments, taxes, and make a change',
        tasksGroups: [ACTIVE_CPP_PAYMENT_TASKS_EN, ACTIVE_CPP_CHANGE_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Paiements, impôts, et faire un changement',
        tasksGroups: [ACTIVE_CPP_PAYMENT_TASKS_FR, ACTIVE_CPP_CHANGE_TASKS_FR],
      },
    },
    [StatusCodes.inPayment]: {
      en: {
        taskHeadingKey: 'Payments, taxes, and make a change',
        tasksGroups: [ACTIVE_CPP_PAYMENT_TASKS_EN, ACTIVE_CPP_CHANGE_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Paiements, impôts, et faire un changement',
        tasksGroups: [ACTIVE_CPP_PAYMENT_TASKS_FR, ACTIVE_CPP_CHANGE_TASKS_FR],
      },
    },
  },
  [ProgramCodes.CPPD]: {
    [StatusCodes.inactive]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_CPPD_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_CPPD_TASKS_FR],
      },
    },
    [StatusCodes.applicationReceived]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_CPPD_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_CPPD_TASKS_FR],
      },
    },
    [StatusCodes.decisionSent]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_CPPD_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_CPPD_TASKS_FR],
      },
    },
    [StatusCodes.paymentHold]: {
      en: {
        taskHeadingKey: 'Payments and taxes',
        tasksGroups: [
          ACTIVE_CPPD_PAYMENT_TASKS_EN,
          ACTIVE_CPPD_CHANGE_TASKS_EN,
        ],
      },
      fr: {
        taskHeadingKey: 'Paiements et impôts',
        tasksGroups: [
          ACTIVE_CPPD_PAYMENT_TASKS_FR,
          ACTIVE_CPPD_CHANGE_TASKS_FR,
        ],
      },
    },
    [StatusCodes.inPayment]: {
      en: {
        taskHeadingKey: 'Payments and taxes',
        tasksGroups: [
          ACTIVE_CPPD_PAYMENT_TASKS_EN,
          ACTIVE_CPPD_CHANGE_TASKS_EN,
        ],
      },
      fr: {
        taskHeadingKey: 'Paiements et impôts',
        tasksGroups: [
          ACTIVE_CPPD_PAYMENT_TASKS_FR,
          ACTIVE_CPPD_CHANGE_TASKS_FR,
        ],
      },
    },
  },
  [ProgramCodes.OAS]: {
    [StatusCodes.inactive]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_FR],
      },
    },
    [StatusCodes.applicationReceived]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_FR],
      },
    },
    [StatusCodes.decisionSent]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_FR],
      },
    },
    [StatusCodes.paymentHold]: {
      en: {
        taskHeadingKey: 'Payments, taxes, and make a change',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS_EN,
          ACTIVE_OAS_GIS_CHANGE_TASKS_EN,
        ],
      },
      fr: {
        taskHeadingKey: 'Paiements, impôts, et faire un changement',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS_FR,
          ACTIVE_OAS_GIS_CHANGE_TASKS_FR,
        ],
      },
    },
    [StatusCodes.inPayment]: {
      en: {
        taskHeadingKey: 'Payments, taxes, and make a change',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS_EN,
          ACTIVE_OAS_GIS_CHANGE_TASKS_EN,
        ],
      },
      fr: {
        taskHeadingKey: 'Paiements, impôts, et faire un changement',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS_FR,
          ACTIVE_OAS_GIS_CHANGE_TASKS_FR,
        ],
      },
    },
  },
  [ProgramCodes.GIS]: {
    [StatusCodes.inactive]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_FR],
      },
    },
    [StatusCodes.applicationReceived]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_FR],
      },
    },
    [StatusCodes.decisionSent]: {
      en: {
        taskHeadingKey: 'Common actions',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Actions courantes',
        tasksGroups: [INACTIVE_OAS_GIS_TASKS_FR],
      },
    },
    [StatusCodes.paymentHold]: {
      en: {
        taskHeadingKey: 'Payments, taxes, and make a change',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS_EN,
          ACTIVE_OAS_GIS_CHANGE_TASKS_EN,
        ],
      },
      fr: {
        taskHeadingKey: 'Paiements, impôts, et faire un changement',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS_FR,
          ACTIVE_OAS_GIS_CHANGE_TASKS_FR,
        ],
      },
    },
    [StatusCodes.inPayment]: {
      en: {
        taskHeadingKey: 'Payments, taxes, and make a change',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS_EN,
          ACTIVE_OAS_GIS_CHANGE_TASKS_EN,
        ],
      },
      fr: {
        taskHeadingKey: 'Paiements, impôts, et faire un changement',
        tasksGroups: [
          ACTIVE_OAS_GIS_PAYMENT_TASKS_FR,
          ACTIVE_OAS_GIS_CHANGE_TASKS_FR,
        ],
      },
    },
  },
  [ProgramCodes.EI]: {
    [StatusCodes.inPayment]: {
      en: {
        taskHeadingKey:
          'Common actions, payments, taxes, reports, and account information',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_EN,
          ACTIVE_EI_DOCS_TASKS_EN,
          ACTIVE_EI_PAYMENT_TASKS_EN,
          ACCOUNT_INFORMATION_EN,
        ],
      },
      fr: {
        taskHeadingKey:
          'Actions courantes, paiements, impôts, rapports et renseignements personnels',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_FR,
          ACTIVE_EI_DOCS_TASKS_FR,
          ACTIVE_EI_PAYMENT_TASKS_FR,
          ACCOUNT_INFORMATION_FR,
        ],
      },
    },
    [StatusCodes.benefitUpdate]: {
      en: {
        taskHeadingKey:
          'Common actions, payments, taxes, reports, and account information',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_EN,
          ACTIVE_EI_DOCS_TASKS_EN,
          ACTIVE_EI_PAYMENT_TASKS_EN,
          ACCOUNT_INFORMATION_EN,
        ],
      },
      fr: {
        taskHeadingKey:
          'Actions courantes, paiements, impôts, rapports et renseignements personnels',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_FR,
          ACTIVE_EI_DOCS_TASKS_FR,
          ACTIVE_EI_PAYMENT_TASKS_FR,
          ACCOUNT_INFORMATION_FR,
        ],
      },
    },
    [StatusCodes.applicationReceived]: {
      en: {
        taskHeadingKey:
          'Common actions, payments, taxes, reports, and account information',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_EN,
          ACTIVE_EI_DOCS_TASKS_EN,
          ACTIVE_EI_PAYMENT_TASKS_EN,
          ACCOUNT_INFORMATION_EN,
        ],
      },
      fr: {
        taskHeadingKey:
          'Actions courantes, paiements, impôts, rapports et renseignements personnels',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_FR,
          ACTIVE_EI_DOCS_TASKS_FR,
          ACTIVE_EI_PAYMENT_TASKS_FR,
          ACCOUNT_INFORMATION_FR,
        ],
      },
    },
    [StatusCodes.exhausted]: {
      en: {
        taskHeadingKey:
          'Common actions, payments, taxes, reports, and account information',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_EN,
          ACTIVE_EI_DOCS_TASKS_EN,
          ACTIVE_EI_PAYMENT_TASKS_EN,
          ACCOUNT_INFORMATION_EN,
        ],
      },
      fr: {
        taskHeadingKey:
          'Actions courantes, paiements, impôts, rapports et renseignements personnels',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_FR,
          ACTIVE_EI_DOCS_TASKS_FR,
          ACTIVE_EI_PAYMENT_TASKS_FR,
          ACCOUNT_INFORMATION_FR,
        ],
      },
    },
    [StatusCodes.inactive]: {
      en: {
        taskHeadingKey:
          'Common actions, payments, taxes, reports, and account information',
        tasksGroups: [INACTIVE_EI_TASKS_EN],
      },
      fr: {
        taskHeadingKey:
          'Actions courantes, paiements, impôts, rapports et renseignements personnels',
        tasksGroups: [INACTIVE_EI_TASKS_FR],
      },
    },
  },
  [ProgramCodes.SEB]: {
    [StatusCodes.activeAgreement]: {
      en: {
        taskHeadingKey: 'Explore common actions',
        tasksGroups: [ACTIVE_SEB_TASKS_EN],
      },
      fr: {
        taskHeadingKey: 'Explorer les actions courantes',
        tasksGroups: [ACTIVE_SEB_TASKS_FR],
      },
    },
  },
}

module.exports = {
  TASK_GROUPS,
  NO_BENEFIT_CPP_TASKS_EN,
  NO_BENEFIT_EI_TASKS_EN,
  NO_BENEFIT_GIS_TASKS_EN,
  NO_BENEFIT_OAS_TASKS_EN,
  NO_BENEFIT_CPP_TASKS_FR,
  NO_BENEFIT_EI_TASKS_FR,
  NO_BENEFIT_GIS_TASKS_FR,
  NO_BENEFIT_OAS_TASKS_FR,
}
