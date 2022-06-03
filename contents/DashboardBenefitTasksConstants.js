import { ProgramCodes } from '../constants/ProgramCodes'
import { StatusCodes } from '../constants/StatusCodes'

const TASKS = {
  // general tasks
  UpdateAccountInfoTask: {
    task: 'updateAccountInfoTask',
    taskIcon: '/images/dashboard/account-info-icon.svg',
    taskLink: 'updateAccountInfoTaskLink',
  },
  TaxSlipTask: {
    task: 'taxSlipTask',
    taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
    taskLink: 'taxSlipTaskLink',
  },
  TaxSlipMailingTask: {
    task: 'taxSlipMailingTask',
    taskIcon: '/images/dashboard/oas-tax-slip-mailing-icon.svg',
    taskLink: 'taxSlipMailingLink',
  },
  // oas cpp tasks
  AllPaymentsTask: {
    task: 'allPaymentsTask',
    taskIcon: '/images/dashboard/oas-payment-icon.svg',
    taskLink: 'allPaymentsTaskLink',
  },
  StatusUpdateTask: {
    task: 'statusUpdateTask',
    taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
    taskLink: 'statusUpdateTaskLink',
  },
  RetirementIncomeTask: {
    task: 'retirementIncomeTask',
    taskIcon: '/images/dashboard/oas-retirement-income-icon.svg',
    taskLink: 'retirementIncomeTaskLink',
  },
  ReconsiderationTask: {
    task: 'reconsiderationTask',
    taskIcon: '/images/dashboard/oas-request-for-reconsideration-icon.svg ',
    taskLink: 'reconsiderationLink',
  },
  DelayOasPensionTask: {
    task: 'delayOasPensionTask',
    taskIcon: '/images/dashboard/oas-delay-receiving-pension-icon.svg',
    taskLink: 'delayOasPensionTaskLink',
  },
  CppContributionTask: {
    task: 'cppContributionTask',
    taskIcon: '/images/dashboard/oas-cpp-contributions-icon.svg',
    taskLink: 'cppContributionTaskLink',
  },
  TaxDeductionsTask: {
    task: 'taxDeductionsTask',
    taskIcon: '/images/dashboard/oas-federal-tax-deductions-icon.svg',
    taskLink: 'taxDeductionsTaskLink',
  },
  GiveConsentTask: {
    task: 'giveConsentTask',
    taskIcon: '/images/dashboard/oas-consent-icon.svg',
    taskLink: 'giveConsentTaskLink',
  },
  TaxSlipT4aAndNr4Task: {
    task: 'taxSlipT4aAndNr4Task',
    taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
    taskLink: 'taxSlipTaskLink',
  },
  UploadMyDocuments: {
    task: 'uploadMyDocuments',
    taskIcon: '/images/dashboard/ei-submit-documents-icon.svg',
    taskLink: 'uploadMyDocumentsLink',
  },
  ApplyForCppDisabilityBenefits: {
    task: 'applyForCppDisabilityBenefits',
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '/dashboard',
  },
  ApplyForCppRetirementPensions: {
    task: 'applyForCppRetirementPensions',
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '/dashboard',
  },
  EstimateMyMonthlyCppBenefits: {
    task: 'estimateMyMonthlyCppBenefits',
    taskIcon: '/images/dashboard/oas-retirement-income-icon.svg',
    taskLink: '/dashboard',
  },
  ViewMyCppContributions: {
    task: 'viewMyCppContributions',
    taskIcon: '/images/dashboard/oas-cpp-contributions-icon.svg',
    taskLink: '/dashboard',
  },
  ApplyForCppDeathBenefits: {
    task: 'applyForCppDeathBenefits',
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '/dashboard',
  },
  ApplyForGuranteedIncomeSupplement: {
    task: 'applyForGuranteedIncomeSupplement',
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '/dashboard',
  },
  ApplyForCppSurvivorsPensionAndChildrensBenefit: {
    task: 'applyForCppSurvivorsPensionAndChildrensBenefit',
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '/dashboard',
  },
  ApplyForOldAgeSecurity: {
    task: 'applyForOldAgeSecurity',
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '/dashboard',
  },
  // ei tasks
  EiStatusUpdateTask: {
    task: 'statusUpdateTask',
    taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
    taskLink: 'eiStatusAndMessages',
  },
  CompleteInsuranceReportTask: {
    task: 'completeInsuranceReportTask',
    taskIcon: '/images/dashboard/ei-insurance-report-icon.svg',
    taskLink: 'completeInsuranceReportLink',
  },
  ViewPaymentInfo: {
    task: 'viewPaymentInfo',
    taskIcon: '/images/dashboard/ei-view-payment-info-icon.svg',
    taskLink: 'viewPaymentInfoLink',
  },
  AccessCode: {
    task: 'accessCode',
    taskIcon: '/images/dashboard/ei-access-code.svg',
    taskLink: '/dashboard',
  },
  SubmitDocuments: {
    task: 'submitDocuments',
    taskIcon: '/images/dashboard/ei-submit-documents-icon.svg',
    taskLink: 'eiUploadDocuments',
  },
  ViewDocuments: {
    task: 'viewDocuments',
    taskIcon: '/images/dashboard/ei-view-documents-icon.svg',
    taskLink: 'viewDocumentsLink',
  },
  ViewLatestClaimTask: {
    task: 'viewLatestClaimTask',
    taskIcon: '/images/dashboard/ei-latest-claim-icon.svg',
    taskLink: 'viewLatestClaimLink',
  },
  ViewPastClaimsTask: {
    task: 'viewPastClaimsTask',
    taskIcon: '/images/dashboard/ei-past-claims-icon.svg',
    taskLink: 'viewPastClaimsLink',
  },
  SubmitEformsTask: {
    task: 'submitEformsTask',
    taskIcon: '/images/dashboard/ei-submit-eform-icon.svg',
    taskLink: 'submitFormsLink',
  },
  RegisterForAlerts: {
    task: 'registerForAlerts',
    taskIcon: '/images/dashboard/ei-register-for-alert-icon.svg ',
    taskLink: 'eiRegisterForAlerts',
  },
  RecordOfEmployment: {
    task: 'recordOfEmployment',
    taskIcon: '/images/dashboard/ei-record-of-employment-icon.svg',
    taskLink: 'recordOfEmployment',
  },
  ReportMistake: {
    task: 'reportMistake',
    taskIcon: '/images/dashboard/ei-report-mistake-icon.svg ',
    taskLink: 'eiReportMistake',
  },
  TaxSlipT4eTask: {
    task: 'taxSlipT4eTask',
    taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
    taskLink: 'taxSlipTaskLink',
  },
  ViewPaymentInfoIconWhite: {
    task: 'viewPaymentInfo',
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: 'recordOfEmployment',
  },
  //Seb tasks
  ViewAgreementStatusDetails: {
    task: 'viewAgreementStatus',
    taskIcon: '/images/dashboard/ei-view-documents-icon.svg',
    taskLink: 'viewDocumentsLink',
  },
}

const SUBMITTED_CPP_ESTIMATE_TASKS = {
  header: 'estimate',
  tasks: [TASKS.RetirementIncomeTask],
}

const SUBMITTED_CPP_CHANGE_TASKS = {
  header: 'changeTasks',
  tasks: [
    TASKS.DelayOasPensionTask,
    TASKS.GiveConsentTask,
    TASKS.UpdateAccountInfoTask,
  ],
}

const ACTIVE_CPP_PAYMENT_TASKS = {
  header: 'paymentTasks',
  tasks: [
    TASKS.AllPaymentsTask,
    TASKS.TaxSlipTask,
    TASKS.CppContributionTask,
    TASKS.TaxDeductionsTask,
    TASKS.RetirementIncomeTask,
  ],
}

const ACTIVE_CPP_CHANGE_TASKS = {
  header: 'changeTasks',
  tasks: [
    TASKS.ReconsiderationTask,
    TASKS.DelayOasPensionTask,
    TASKS.GiveConsentTask,
    TASKS.UpdateAccountInfoTask,
  ],
}

const INACTIVE_CPP_TASKS = {
  header: `commonActions`,
  tasks: [
    TASKS.EstimateMyMonthlyCppBenefits,
    TASKS.DelayOasPensionTask,
    TASKS.GiveConsentTask,
    TASKS.UpdateAccountInfoTask,
  ],
}

const INACTIVE_CPPD_TASKS = {
  Header: `commonActions`,
  Tasks: [
    TASKS.EstimateMyMonthlyCppBenefits,
    TASKS.DelayOasPensionTask,
    TASKS.GiveConsentTask,
    TASKS.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_CPPD_TASKS = [
  TASKS.AllPaymentsTask,
  TASKS.StatusUpdateTask,
  TASKS.TaxSlipTask,
  TASKS.ReconsiderationTask,
  TASKS.CppContributionTask,
  TASKS.TaxDeductionsTask,
  TASKS.GiveConsentTask,
  TASKS.UploadMyDocuments,
  TASKS.UpdateAccountInfoTask,
]

const ACTIVE_CPPD_PAYMENT_TASKS = {
  header: 'paymentTasks',
  tasks: [
    TASKS.AllPaymentsTask,
    TASKS.CppContributionTask,
    TASKS.EstimateMyMonthlyCppBenefits,
    TASKS.TaxSlipTask,
  ],
}

const ACTIVE_CPPD_CHANGE_TASKS = {
  Header: 'changeTasks',
  Tasks: [
    TASKS.DelayOasPensionTask,
    TASKS.TaxDeductionsTask,
    TASKS.UpdateAccountInfoTask,
    TASKS.GiveConsentTask,
    TASKS.ReconsiderationTask,
  ],
}

const SUBMITTED_OAS_TASKS = [
  TASKS.AllPaymentsTask,
  TASKS.StatusUpdateTask,
  TASKS.RetirementIncomeTask,
  TASKS.CppContributionTask,
  TASKS.TaxDeductionsTask,
  TASKS.DelayOasPensionTask,
  TASKS.GiveConsentTask,
  TASKS.TaxSlipTask,
  TASKS.TaxSlipMailingTask,
  TASKS.ReconsiderationTask,
  TASKS.UpdateAccountInfoTask,
]

const ACTIVE_OAS_GIS_TASKS = {
  header: 'commonActions',
  tasks: [
    TASKS.AllPaymentsTask,
    TASKS.StatusUpdateTask,
    TASKS.TaxSlipTask,
    TASKS.TaxSlipMailingTask,
    TASKS.TaxDeductionsTask,
    TASKS.DelayOasPensionTask,
    TASKS.GiveConsentTask,
    TASKS.CppContributionTask,
    TASKS.RetirementIncomeTask,
    TASKS.ReconsiderationTask,
    TASKS.UpdateAccountInfoTask,
  ],
}

const RECEIVED_OAS_GIS_TASKS = {
  header: 'commonActions',
  tasks: [
    TASKS.RetirementIncomeTask,
    TASKS.DelayOasPensionTask,
    TASKS.GiveConsentTask,
    TASKS.UpdateAccountInfoTask,
  ],
}

const SUBMITTED_EI_TASKS = [
  TASKS.EiStatusUpdateTask,
  TASKS.CompleteInsuranceReportTask,
  TASKS.ViewPaymentInfo,
  TASKS.AccessCode,
  TASKS.SubmitDocuments,
  TASKS.ViewDocuments,
  TASKS.ViewPastClaimsTask,
  TASKS.SubmitEformsTask,
  TASKS.TaxSlipTask,
  TASKS.TaxSlipMailingTask,
  TASKS.RegisterForAlerts,
  TASKS.UpdateAccountInfoTask,
]

const ACTIVE_EI_COMMON_TASKS = {
  header: 'commonActions',
  tasks: [TASKS.AccessCode, TASKS.ReportMistake, TASKS.UpdateAccountInfoTask],
}

const ACTIVE_EI_PAYMENT_TASKS = {
  header: 'paymentClaimsTaxTasks',
  tasks: [
    TASKS.ViewPaymentInfo,
    TASKS.ViewLatestClaimTask,
    TASKS.ViewPastClaimsTask,
    TASKS.TaxSlipMailingTask,
    TASKS.TaxSlipTask,
  ],
}

const ACTIVE_EI_DOCS_TASKS = {
  header: 'documentsReportsTasks',
  tasks: [
    TASKS.CompleteInsuranceReportTask,
    TASKS.RecordOfEmployment,
    TASKS.ViewDocuments,
    TASKS.SubmitDocuments,
    TASKS.SubmitEformsTask,
  ],
}

const INACTIVE_EI_TASKS = [
  TASKS.RecordOfEmployment,
  TASKS.ViewPastClaimsTask,
  TASKS.ViewPaymentInfo,
  TASKS.TaxSlipT4eTask,
  TASKS.UpdateAccountInfoTask,
]

const NO_BENEFIT_CPP_TASKS = [
  TASKS.ApplyForCppDisabilityBenefits,
  TASKS.ApplyForCppRetirementPensions,
  TASKS.EstimateMyMonthlyCppBenefits,
  TASKS.ViewMyCppContributions,
  TASKS.ApplyForCppDeathBenefits,
  TASKS.ApplyForGuranteedIncomeSupplement,
  TASKS.ApplyForCppSurvivorsPensionAndChildrensBenefit,
]

const NO_BENEFIT_EI_TASKS = [
  TASKS.ViewPaymentInfoIconWhite,
  TASKS.RecordOfEmployment,
]

const NO_BENEFIT_GIS_TASKS = [TASKS.ApplyForGuranteedIncomeSupplement]

const NO_BENEFIT_OAS_TASKS = [
  TASKS.ApplyForOldAgeSecurity,
  TASKS.ApplyForGuranteedIncomeSupplement,
]

const ACTIVE_SEB_TASKS = {
  header: 'commonActions',
  tasks: [TASKS.ViewAgreementStatusDetails],
}

const INACTIVE_OAS_TASKS = {
  header: `commonActions`,
  tasks: [
    TASKS.RetirementIncomeTask,
    TASKS.DelayOasPensionTask,
    TASKS.GiveConsentTask,
    TASKS.UpdateAccountInfoTask,
  ],
}

const TASK_GROUPS = [
  {
    programCode: ProgramCodes.CPP,
    statusCode: StatusCodes.inactive,
    taskHeadingKey: 'commonActions',
    tasksGroups: [INACTIVE_CPP_TASKS],
  },
  {
    programCode: ProgramCodes.CPP,
    statusCode: StatusCodes.applicationReceived,
    taskHeadingKey: 'commonActions',
    tasksGroups: [INACTIVE_CPP_TASKS],
  },
  {
    programCode: ProgramCodes.CPP,
    statusCode: StatusCodes.decisionSent,
    taskHeadingKey: 'commonActions',
    tasksGroups: [INACTIVE_CPP_TASKS],
  },
  {
    programCode: ProgramCodes.CPP,
    statusCode: StatusCodes.paymentHold,
    taskHeadingKey: 'paymentsTaxesAccount',
    tasksGroups: [ACTIVE_CPP_PAYMENT_TASKS, ACTIVE_CPP_CHANGE_TASKS],
  },
  {
    programCode: ProgramCodes.CPP,
    statusCode: StatusCodes.inPayment,
    taskHeadingKey: 'paymentsTaxesAccount',
    tasksGroups: [ACTIVE_CPP_PAYMENT_TASKS, ACTIVE_CPP_CHANGE_TASKS],
  },
  {
    programCode: ProgramCodes.CPPD,
    statusCode: StatusCodes.inPayment,
    taskHeadingKey: 'paymentTasks',
    tasksGroups: [ACTIVE_CPPD_PAYMENT_TASKS, ACTIVE_CPPD_CHANGE_TASKS],
  },
  {
    programCode: ProgramCodes.CPPD,
    statusCode: StatusCodes.inactive,
    taskHeadingKey: 'commonActions',
    tasksGroups: [INACTIVE_CPPD_TASKS],
  },
  {
    programCode: ProgramCodes.CPPD,
    statusCode: StatusCodes.applicationReceived,
    taskHeadingKey: 'commonActions',
    tasksGroups: [INACTIVE_CPPD_TASKS],
  },
  {
    programCode: ProgramCodes.CPPD,
    statusCode: StatusCodes.decisionSent,
    taskHeadingKey: 'commonActions',
    tasksGroups: [INACTIVE_CPPD_TASKS],
  },
  {
    programCode: ProgramCodes.CPPD,
    statusCode: StatusCodes.paymentHold,
    taskHeadingKey: 'paymentTasks',
    tasksGroups: [ACTIVE_CPPD_PAYMENT_TASKS, ACTIVE_CPPD_CHANGE_TASKS],
  },
  {
    programCode: ProgramCodes.EI,
    statusCode: StatusCodes.inPayment,
    taskHeadingKey: 'commonPaymentsTaxesAccount',
    tasksGroups: [
      ACTIVE_EI_COMMON_TASKS,
      ACTIVE_EI_PAYMENT_TASKS,
      ACTIVE_EI_DOCS_TASKS,
    ],
  },
  {
    programCode: ProgramCodes.OAS,
    statusCode: StatusCodes.inactive,
    taskHeadingKey: 'commonActions',
    tasksGroups: [INACTIVE_OAS_TASKS],
  },
  {
    programCode: ProgramCodes.OAS,
    statusCode: StatusCodes.applicationReceived,
    taskHeadingKey: 'commonActions',
    tasksGroups: [INACTIVE_OAS_TASKS],
  },
  {
    programCode: ProgramCodes.OAS,
    statusCode: StatusCodes.decisionSent,
    taskHeadingKey: 'commonActions',
    tasksGroups: [INACTIVE_OAS_TASKS],
  },
  {
    programCode: ProgramCodes.OAS,
    statusCode: StatusCodes.paymentHold,
    taskHeadingKey: 'paymentsTaxesAccount',
    tasksGroups: [ACTIVE_OAS_TASKS],
  },
  {
    programCode: ProgramCodes.OAS,
    statusCode: StatusCodes.inPayment,
    taskHeadingKey: 'paymentsTaxesAccount',
    tasksGroups: [ACTIVE_OAS_TASKS],
  },
  {
    programCode: ProgramCodes.EI,
    statusCode: StatusCodes.benefitUpdate,
    taskHeadingKey: 'commonPaymentsTaxesAccount',
    tasksGroups: [
      ACTIVE_EI_COMMON_TASKS,
      ACTIVE_EI_PAYMENT_TASKS,
      ACTIVE_EI_DOCS_TASKS,
    ],
  },
  {
    programCode: ProgramCodes.EI,
    statusCode: StatusCodes.applicationReceived,
    taskHeadingKey: 'commonPaymentsTaxesAccount',
    tasksGroups: [
      ACTIVE_EI_COMMON_TASKS,
      ACTIVE_EI_PAYMENT_TASKS,
      ACTIVE_EI_DOCS_TASKS,
    ],
  },
  {
    programCode: ProgramCodes.EI,
    statusCode: StatusCodes.exhausted,
    taskHeadingKey: 'commonPaymentsTaxesAccount',
    tasksGroups: [
      ACTIVE_EI_COMMON_TASKS,
      ACTIVE_EI_PAYMENT_TASKS,
      ACTIVE_EI_DOCS_TASKS,
    ],
  },
  {
    programCode: ProgramCodes.EI,
    statusCode: StatusCodes.inactive,
    taskHeadingKey: 'commonPaymentsTaxesAccount',
    tasksGroups: [ACTIVE_EI_COMMON_TASKS],
  },
]

module.exports = {
  TASK_GROUPS,
  SUBMITTED_CPP_ESTIMATE_TASKS,
  SUBMITTED_CPP_CHANGE_TASKS,
  ACTIVE_CPP_PAYMENT_TASKS,
  ACTIVE_CPP_CHANGE_TASKS,
  INACTIVE_CPP_TASKS,
  SUBMITTED_CPPD_TASKS,
  SUBMITTED_OAS_TASKS,
  ACTIVE_OAS_GIS_TASKS,
  RECEIVED_OAS_GIS_TASKS,
  INACTIVE_OAS_TASKS,
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
