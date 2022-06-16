import { ProgramCodes } from '../constants/ProgramCodes'
import { StatusCodes } from '../constants/StatusCodes'
import { BenefitTasks } from './BenefitTasks'

const SUBMITTED_CPP_ESTIMATE_TASKS_EN = {
  header: 'Estimate',
  tasks: [BenefitTasks.RetirementIncomeTask],
}

const SUBMITTED_CPP_CHANGE_TASKS_EN = {
  header: 'Make a Change',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const ACTIVE_CPP_PAYMENT_TASKS_EN = {
  header: 'Payments and taxes',
  tasks: [
    BenefitTasks.AllPaymentsTask,
    BenefitTasks.CppContributionTask,
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.TaxSlipTask,
  ],
}

const ACTIVE_CPP_CHANGE_TASKS_EN = {
  header: 'Make a Change',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.TaxDeductionsTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.ReconsiderationTask,
  ],
}

const INACTIVE_CPP_TASKS_EN = {
  header: `Common actions`,
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const INACTIVE_CPPD_TASKS_EN = {
  header: `Common actions`,
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_CPPD_TASKS_EN = [
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

const ACTIVE_CPPD_PAYMENT_TASKS_EN = {
  header: 'Payments and taxes',
  tasks: [
    BenefitTasks.AllPaymentsTask,
    BenefitTasks.CppContributionTask,
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.TaxSlipTask,
  ],
}

const ACTIVE_CPPD_CHANGE_TASKS_EN = {
  header: 'Make a Change',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.TaxDeductionsTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.ReconsiderationTask,
    BenefitTasks.SubmitDocuments,
  ],
}

const SUBMITTED_OAS_TASKS_EN = [
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

const ACTIVE_OAS_GIS_PAYMENT_TASKS_EN = {
  header: 'Payments and taxes',
  tasks: [
    BenefitTasks.AllPaymentsTask,
    BenefitTasks.CppContributionTask,
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.TaxSlipTask,
  ],
}

const ACTIVE_OAS_GIS_CHANGE_TASKS_EN = {
  header: 'Make a Change',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.TaxDeductionsTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.ReconsiderationTask,
  ],
}

const RECEIVED_OAS_GIS_TASKS_EN = {
  header: 'Common actions',
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_EI_TASKS_EN = [
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

const ACTIVE_EI_COMMON_TASKS_EN = {
  header: 'Common actions',
  tasks: [
    BenefitTasks.CompleteInsuranceReportTask,
    BenefitTasks.AccessCode,
    BenefitTasks.ReportMistake,
  ],
}

const ACTIVE_EI_PAYMENT_TASKS_EN = {
  header: 'Payments and taxes:',
  tasks: [
    BenefitTasks.ViewLatestClaimTask,
    BenefitTasks.ViewPastClaimsTask,
    BenefitTasks.ViewPaymentInfo,
    BenefitTasks.TaxSlipTask,
    BenefitTasks.TaxSlipMailingTask,
  ],
}

const ACTIVE_EI_DOCS_TASKS_EN = {
  header: 'Documents and reports',
  tasks: [
    BenefitTasks.RecordOfEmployment,
    BenefitTasks.ViewDocuments,
    BenefitTasks.SubmitDocuments,
    BenefitTasks.SubmitEformsTask,
  ],
}

const INACTIVE_EI_TASKS_EN = {
  header: 'Common actions',
  tasks: [
    BenefitTasks.RecordOfEmployment,
    BenefitTasks.ViewPastClaimsTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.TaxSlipT4eTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.ViewPaymentInfo,
  ],
}

const NO_BENEFIT_CPP_TASKS_EN = [
  BenefitTasks.ApplyForCppDisabilityBenefits,
  BenefitTasks.ApplyForCppRetirementPensions,
  BenefitTasks.EstimateMyMonthlyCppBenefits,
  BenefitTasks.ViewMyCppContributions,
  BenefitTasks.ApplyForCppDeathBenefits,
  BenefitTasks.ApplyForGuranteedIncomeSupplement,
  BenefitTasks.ApplyForCppSurvivorsPensionAndChildrensBenefit,
]

const NO_BENEFIT_EI_TASKS_EN = [
  BenefitTasks.ViewPaymentInfoIconWhite,
  BenefitTasks.RecordOfEmployment,
]

const NO_BENEFIT_GIS_TASKS_EN = [BenefitTasks.ApplyForGuranteedIncomeSupplement]

const NO_BENEFIT_OAS_TASKS_EN = [
  BenefitTasks.ApplyForOldAgeSecurity,
  BenefitTasks.ApplyForGuranteedIncomeSupplement,
]

const ACTIVE_SEB_TASKS_EN = {
  header: 'Common actions',
  tasks: [BenefitTasks.ViewAgreementStatusDetails],
}

const INACTIVE_OAS_GIS_TASKS_EN = {
  header: `Common actions`,
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const ACCOUNT_INFORMATION_EN = {
  header: `Account information`,
  tasks: [BenefitTasks.UpdateAccountInfoTask, BenefitTasks.RegisterForAlerts],
}

const SUBMITTED_CPP_ESTIMATE_TASKS_FR = {
  header: '(FR) Estimate',
  tasks: [BenefitTasks.RetirementIncomeTask],
}

const SUBMITTED_CPP_CHANGE_TASKS_FR = {
  header: 'Faire un changement',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const ACTIVE_CPP_PAYMENT_TASKS_FR = {
  header: 'Paiements et impôts',
  tasks: [
    BenefitTasks.AllPaymentsTask,
    BenefitTasks.CppContributionTask,
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.TaxSlipTask,
  ],
}

const ACTIVE_CPP_CHANGE_TASKS_FR = {
  header: 'Faire un changement',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.TaxDeductionsTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.ReconsiderationTask,
  ],
}

const INACTIVE_CPP_TASKS_FR = {
  header: `Actions courantes`,
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const INACTIVE_CPPD_TASKS_FR = {
  header: `Actions courantes`,
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_CPPD_TASKS_FR = [
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

const ACTIVE_CPPD_PAYMENT_TASKS_FR = {
  header: 'Paiements et impôts',
  tasks: [
    BenefitTasks.AllPaymentsTask,
    BenefitTasks.CppContributionTask,
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.TaxSlipTask,
  ],
}

const ACTIVE_CPPD_CHANGE_TASKS_FR = {
  header: 'Faire un changement',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.TaxDeductionsTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.ReconsiderationTask,
    BenefitTasks.SubmitDocuments,
  ],
}

const SUBMITTED_OAS_TASKS_FR = [
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

const ACTIVE_OAS_GIS_PAYMENT_TASKS_FR = {
  header: 'Paiements et impôts',
  tasks: [
    BenefitTasks.AllPaymentsTask,
    BenefitTasks.CppContributionTask,
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.TaxSlipTask,
  ],
}

const ACTIVE_OAS_GIS_CHANGE_TASKS_FR = {
  header: 'Faire un changement',
  tasks: [
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.TaxDeductionsTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.ReconsiderationTask,
  ],
}

const RECEIVED_OAS_GIS_TASKS_FR = {
  header: 'Actions courantes',
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_EI_TASKS_FR = [
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

const ACTIVE_EI_COMMON_TASKS_FR = {
  header: 'Actions courantes',
  tasks: [
    BenefitTasks.CompleteInsuranceReportTask,
    BenefitTasks.AccessCode,
    BenefitTasks.ReportMistake,
  ],
}

const ACTIVE_EI_PAYMENT_TASKS_FR = {
  header: 'Paiements et impôts :',
  tasks: [
    BenefitTasks.ViewLatestClaimTask,
    BenefitTasks.ViewPastClaimsTask,
    BenefitTasks.ViewPaymentInfo,
    BenefitTasks.TaxSlipTask,
    BenefitTasks.TaxSlipMailingTask,
  ],
}

const ACTIVE_EI_DOCS_TASKS_FR = {
  header: 'Rapports et documents',
  tasks: [
    BenefitTasks.RecordOfEmployment,
    BenefitTasks.ViewDocuments,
    BenefitTasks.SubmitDocuments,
    BenefitTasks.SubmitEformsTask,
  ],
}

const INACTIVE_EI_TASKS_FR = {
  header: 'Actions courantes',
  tasks: [
    BenefitTasks.RecordOfEmployment,
    BenefitTasks.ViewPastClaimsTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.TaxSlipT4eTask,
    BenefitTasks.UpdateAccountInfoTask,
    BenefitTasks.ViewPaymentInfo,
  ],
}

const NO_BENEFIT_CPP_TASKS_FR = [
  BenefitTasks.ApplyForCppDisabilityBenefits,
  BenefitTasks.ApplyForCppRetirementPensions,
  BenefitTasks.EstimateMyMonthlyCppBenefits,
  BenefitTasks.ViewMyCppContributions,
  BenefitTasks.ApplyForCppDeathBenefits,
  BenefitTasks.ApplyForGuranteedIncomeSupplement,
  BenefitTasks.ApplyForCppSurvivorsPensionAndChildrensBenefit,
]

const NO_BENEFIT_EI_TASKS_FR = [
  BenefitTasks.ViewPaymentInfoIconWhite,
  BenefitTasks.RecordOfEmployment,
]

const NO_BENEFIT_GIS_TASKS_FR = [BenefitTasks.ApplyForGuranteedIncomeSupplement]

const NO_BENEFIT_OAS_TASKS_FR = [
  BenefitTasks.ApplyForOldAgeSecurity,
  BenefitTasks.ApplyForGuranteedIncomeSupplement,
]

const ACTIVE_SEB_TASKS_FR = {
  header: 'Actions courantes',
  tasks: [BenefitTasks.ViewAgreementStatusDetails],
}

const INACTIVE_OAS_GIS_TASKS_FR = {
  header: `Actions courantes`,
  tasks: [
    BenefitTasks.RetirementIncomeTask,
    BenefitTasks.DelayOasPensionTask,
    BenefitTasks.GiveConsentTask,
    BenefitTasks.UpdateAccountInfoTask,
  ],
}

const ACCOUNT_INFORMATION_FR = {
  header: `Renseignements personnels`,
  tasks: [BenefitTasks.UpdateAccountInfoTask, BenefitTasks.RegisterForAlerts],
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
          ACTIVE_EI_PAYMENT_TASKS_EN,
          ACTIVE_EI_DOCS_TASKS_EN,
          ACCOUNT_INFORMATION_EN,
        ],
      },
      fr: {
        taskHeadingKey:
          'Actions courantes, paiements, impôts, rapports et renseignements personnels',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_FR,
          ACTIVE_EI_PAYMENT_TASKS_FR,
          ACTIVE_EI_DOCS_TASKS_FR,
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
          ACTIVE_EI_PAYMENT_TASKS_EN,
          ACTIVE_EI_DOCS_TASKS_EN,
          ACCOUNT_INFORMATION_EN,
        ],
      },
      fr: {
        taskHeadingKey:
          'Actions courantes, paiements, impôts, rapports et renseignements personnels',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_FR,
          ACTIVE_EI_PAYMENT_TASKS_FR,
          ACTIVE_EI_DOCS_TASKS_FR,
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
          ACTIVE_EI_PAYMENT_TASKS_EN,
          ACTIVE_EI_DOCS_TASKS_EN,
          ACCOUNT_INFORMATION_EN,
        ],
      },
      fr: {
        taskHeadingKey:
          'Actions courantes, paiements, impôts, rapports et renseignements personnels',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_FR,
          ACTIVE_EI_PAYMENT_TASKS_FR,
          ACTIVE_EI_DOCS_TASKS_FR,
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
          ACTIVE_EI_PAYMENT_TASKS_EN,
          ACTIVE_EI_DOCS_TASKS_EN,
          ACCOUNT_INFORMATION_EN,
        ],
      },
      fr: {
        taskHeadingKey:
          'Actions courantes, paiements, impôts, rapports et renseignements personnels',
        tasksGroups: [
          ACTIVE_EI_COMMON_TASKS_FR,
          ACTIVE_EI_PAYMENT_TASKS_FR,
          ACTIVE_EI_DOCS_TASKS_FR,
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
  SUBMITTED_CPP_ESTIMATE_TASKS_EN,
  SUBMITTED_CPP_CHANGE_TASKS_EN,
  ACTIVE_CPP_PAYMENT_TASKS_EN,
  ACTIVE_CPP_CHANGE_TASKS_EN,
  INACTIVE_CPP_TASKS_EN,
  SUBMITTED_CPPD_TASKS_EN,
  SUBMITTED_OAS_TASKS_EN,
  ACTIVE_OAS_GIS_PAYMENT_TASKS_EN,
  ACTIVE_OAS_GIS_CHANGE_TASKS_EN,
  RECEIVED_OAS_GIS_TASKS_EN,
  INACTIVE_OAS_GIS_TASKS_EN,
  SUBMITTED_EI_TASKS_EN,
  ACTIVE_EI_COMMON_TASKS_EN,
  ACTIVE_EI_PAYMENT_TASKS_EN,
  ACTIVE_EI_DOCS_TASKS_EN,
  INACTIVE_EI_TASKS_EN,
  NO_BENEFIT_CPP_TASKS_EN,
  NO_BENEFIT_EI_TASKS_EN,
  NO_BENEFIT_GIS_TASKS_EN,
  NO_BENEFIT_OAS_TASKS_EN,
  ACTIVE_SEB_TASKS_EN,
}
