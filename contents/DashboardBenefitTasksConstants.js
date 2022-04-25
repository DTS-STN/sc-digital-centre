import en from '../locales/en'

const t = en

const TASKS = {
  // general tasks
  TaxSlipTask: {
    task: t.taxSlipTask,
    taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
    taskLink: t.taxSlipTaskLink,
  },
  TaxSlipMailingTask: {
    task: t.taxSlipMailingTask,
    taskIcon: '/images/dashboard/oas-tax-slip-mailing-icon.svg',
    taskLink: t.taxSlipMailingLink,
  },
  // oas cpp tasks
  AllPaymentsTask: {
    task: t.allPaymentsTask,
    taskIcon: '/images/dashboard/oas-payment-icon.svg',
    taskLink: t.allPaymentsTaskLink,
  },
  StatusUpdateTask: {
    task: t.statusUpdateTask,
    taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
    taskLink: t.statusUpdateTaskLink,
  },
  RetirementIncomeTask: {
    task: t.retirementIncomeTask,
    taskIcon: '/images/dashboard/oas-retirement-income-icon.svg',
    taskLink: t.retirementIncomeTaskLink,
  },
  ReconsiderationTask: {
    task: t.reconsiderationTask,
    taskIcon: '/images/dashboard/oas-request-for-reconsideration-icon.svg ',
    taskLink: t.reconsiderationLink,
  },
  DelayOasPensionTask: {
    task: t.delayOasPensionTask,
    taskIcon: '/images/dashboard/oas-delay-receiving-pension-icon.svg',
    taskLink: t.delayOasPensionTaskLink,
  },
  CppContributionTask: {
    task: t.cppContributionTask,
    taskIcon: '/images/dashboard/oas-cpp-contributions-icon.svg',
    taskLink: t.cppContributionTaskLink,
  },
  TaxDeductionsTask: {
    task: t.taxDeductionsTask,
    taskIcon: '/images/dashboard/oas-federal-tax-deductions-icon.svg',
    taskLink: t.taxDeductionsTaskLink,
  },
  GiveConsentTask: {
    task: t.giveConsentTask,
    taskIcon: '/images/dashboard/oas-consent-icon.svg',
    taskLink: t.giveConsentTaskLink,
  },
  TaxSlipT4aAndNr4Task: {
    task: t.taxSlipT4aAndNr4Task,
    taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
    taskLink: t.taxSlipTaskLink,
  },
  UploadMyDocuments: {
    task: t.uploadMyDocuments,
    taskIcon: '/images/dashboard/ei-submit-documents-icon.svg',
    taskLink: t.uploadMyDocumentsLink,
  },
  ApplyForCppDisabilityBenefits: {
    task: t.applyForCppDisabilityBenefits,
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '',
  },
  ApplyForCppRetirementPensions: {
    task: t.applyForCppRetirementPensions,
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '',
  },
  EstimateMyMonthlyCppBenefits: {
    task: t.estimateMyMonthlyCppBenefits,
    taskIcon: '/images/dashboard/oas-retirement-income-icon.svg',
    taskLink: '',
  },
  ViewMyCppContributions: {
    task: t.viewMyCppContributions,
    taskIcon: '/images/dashboard/oas-cpp-contributions-icon.svg',
    taskLink: '',
  },
  ApplyForCppDeathBenefits: {
    task: t.applyForCppDeathBenefits,
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '',
  },
  ApplyForGuranteedIncomeSupplement: {
    task: t.applyForGuranteedIncomeSupplement,
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '',
  },
  ApplyForCppSurvivorsPensionAndChildrensBenefit: {
    task: t.applyForCppSurvivorsPensionAndChildrensBenefit,
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '',
  },
  ApplyForOldAgeSecurity: {
    task: t.applyForOldAgeSecurity,
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: '',
  },
  // ei tasks
  EiStatusUpdateTask: {
    task: t.statusUpdateTask,
    taskIcon: '/images/dashboard/oas-updates-message-icon.svg',
    taskLink: t.eiStatusAndMessages,
  },
  CompleteInsuranceReportTask: {
    task: t.completeInsuranceReportTask,
    taskIcon: '/images/dashboard/ei-insurance-report-icon.svg',
    taskLink: t.completeInsuranceReportLink,
  },
  ViewPaymentInfo: {
    task: t.viewPaymentInfo,
    taskIcon: '/images/dashboard/ei-view-payment-info-icon.svg',
    taskLink: t.viewPaymentInfoLink,
  },
  AccessCode: {
    task: t.accessCode,
    taskIcon: '/images/dashboard/ei-access-code.svg',
    taskLink: '/dashboard',
  },
  SubmitDocuments: {
    task: t.submitDocuments,
    taskIcon: '/images/dashboard/ei-submit-documents-icon.svg',
    taskLink: t.eiUploadDocuments,
  },
  ViewDocuments: {
    task: t.viewDocuments,
    taskIcon: '/images/dashboard/ei-view-documents-icon.svg',
    taskLink: t.viewDocumentsLink,
  },
  ViewLatestClaimTask: {
    task: t.viewLatestClaimTask,
    taskIcon: '/images/dashboard/ei-latest-claim-icon.svg',
    taskLink: t.viewLatestClaimLink,
  },
  ViewPastClaimsTask: {
    task: t.viewPastClaimsTask,
    taskIcon: '/images/dashboard/ei-past-claims-icon.svg',
    taskLink: t.viewPastClaimsLink,
  },
  SubmitEformsTask: {
    task: t.submitEformsTask,
    taskIcon: '/images/dashboard/ei-submit-eform-icon.svg',
    taskLink: t.submitFormsLink,
  },
  RegisterForAlerts: {
    task: t.registerForAlerts,
    taskIcon: '/images/dashboard/ei-register-for-alert-icon.svg ',
    taskLink: t.eiRegisterForAlerts,
  },
  RecordOfEmployment: {
    task: t.recordOfEmployment,
    taskIcon: '/images/dashboard/ei-record-of-employment-icon.svg',
    taskLink: t.recordOfEmployment,
  },
  ReportMistake: {
    task: t.reportMistake,
    taskIcon: '/images/dashboard/ei-report-mistake-icon.svg ',
    taskLink: t.eiReportMistake,
  },
  TaxSlipT4eTask: {
    task: t.taxSlipT4eTask,
    taskIcon: '/images/dashboard/oas-tax-slip-icon.svg',
    taskLink: t.taxSlipTaskLink,
  },
  ViewPaymentInfoIconWhite: {
    task: t.viewPaymentInfo,
    taskIcon: '/images/dashboard/apply-for-benefit-icon-white.svg',
    taskLink: t.recordOfEmployment,
  },
  //Seb tasks
  ViewAgreementStatusDetails: {
    task: t.viewAgreementStatus,
    taskIcon: '/images/dashboard/ei-view-documents-icon.svg',
    taskLink: t.viewDocumentsLink,
  },
}

const SUBMITTED_CPP_TASKS = [
  TASKS.AllPaymentsTask,
  TASKS.StatusUpdateTask,
  TASKS.RetirementIncomeTask,
  TASKS.TaxSlipTask,
  TASKS.ReconsiderationTask,
  TASKS.DelayOasPensionTask,
  TASKS.CppContributionTask,
  TASKS.TaxDeductionsTask,
  TASKS.GiveConsentTask,
]

const ACTIVE_CPP_PAYMENT_TASKS = {
  Header: t.paymentTasks,
  Tasks: [
    TASKS.AllPaymentsTask,
    TASKS.TaxSlipTask,
    TASKS.CppContributionTask,
    TASKS.TaxDeductionsTask,
    TASKS.RetirementIncomeTask,
  ],
}

const ACTIVE_CPP_CHANGE_TASKS = {
  Header: t.changeTasks,
  Tasks: [
    TASKS.ReconsiderationTask,
    TASKS.DelayOasPensionTask,
    TASKS.GiveConsentTask,
  ],
}

const INACTIVE_CPP_TASKS = [
  TASKS.ReconsiderationTask,
  TASKS.StatusUpdateTask,
  TASKS.AllPaymentsTask,
  TASKS.TaxSlipT4aAndNr4Task,
]

const SUBMITTED_CPPD_TASKS = [
  TASKS.AllPaymentsTask,
  TASKS.StatusUpdateTask,
  TASKS.TaxSlipTask,
  TASKS.ReconsiderationTask,
  TASKS.CppContributionTask,
  TASKS.TaxDeductionsTask,
  TASKS.GiveConsentTask,
  TASKS.UploadMyDocuments,
]

const ACTIVE_CPPD_TASKS = [
  TASKS.AllPaymentsTask,
  TASKS.StatusUpdateTask,
  TASKS.TaxSlipTask,
  TASKS.ReconsiderationTask,
  TASKS.CppContributionTask,
  TASKS.TaxDeductionsTask,
  TASKS.GiveConsentTask,
  TASKS.UploadMyDocuments,
]

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
]

const ACTIVE_OAS_TASKS = [
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
]

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
]

const ACTIVE_EI_COMMON_TASKS = {
  Header: t.commonActions,
  Tasks: [TASKS.EiStatusUpdateTask, TASKS.AccessCode, TASKS.ReportMistake],
}

const ACTIVE_EI_PAYMENT_TASKS = {
  Header: t.paymentClaimsTaxTasks,
  Tasks: [
    TASKS.ViewPaymentInfo,
    TASKS.ViewLatestClaimTask,
    TASKS.ViewPastClaimsTask,
    TASKS.TaxSlipMailingTask,
    TASKS.TaxSlipTask,
  ],
}

const ACTIVE_EI_DOCS_TASKS = {
  Header: t.documentsReportsTasks,
  Tasks: [
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
  Header: t.commonActions,
  Tasks: [TASKS.ViewAgreementStatusDetails],
}

module.exports = {
  SUBMITTED_CPP_TASKS,
  ACTIVE_CPP_PAYMENT_TASKS,
  ACTIVE_CPP_CHANGE_TASKS,
  INACTIVE_CPP_TASKS,
  SUBMITTED_CPPD_TASKS,
  ACTIVE_CPPD_TASKS,
  SUBMITTED_OAS_TASKS,
  ACTIVE_OAS_TASKS,
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
