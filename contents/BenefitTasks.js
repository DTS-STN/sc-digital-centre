import {
  faKey,
  faPenSquare,
  faFileCircleExclamation,
  faDollarSign,
  faHandHoldingDollar,
  faCalculator,
  faReceipt,
  faClockRotateLeft,
  faFileLines,
  faUserCheck,
  faComments,
  faCircleUser,
  faPersonCircleExclamation,
  faFileInvoiceDollar,
  faEnvelopeOpenText,
  faFileContract,
  faFolderOpen,
  faFileImport,
  faLaptopFile,
  faFileSignature,
  faQuestion,
  faStamp,
} from '@fortawesome/free-solid-svg-icons'

export const BenefitTasks_EN = {
  // general tasks
  UpdateAccountInfoTask: {
    task: 'Update my account information',
    icon: faCircleUser,
    link: '/profile',
  },
  TaxSlipTask: {
    task: 'View my tax slips',
    icon: faReceipt,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/tiso-frfd/tax-slip',
  },
  TaxSlipMailingTask: {
    task: 'Update my tax slip delivery options',
    icon: faEnvelopeOpenText,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/tiso-frfd/mailing-option',
  },
  // oas cpp tasks
  AllPaymentsTask: {
    task: 'View past payments',
    icon: faDollarSign,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/vupi-vupi/view-payment-information.action',
  },
  StatusUpdateTask: {
    task: 'View my status and messages',
    icon: faQuestion,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/vmas-vemd/view-application-status.action',
  },
  RetirementIncomeTask: {
    task: 'Estimate my retirement income',
    icon: faCalculator,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/socv-vecc/socv/estimated-benefits',
  },
  ReconsiderationTask: {
    task: 'Reconsider my application',
    icon: faComments,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/reqr-demr/',
  },
  DelayOasPensionTask: {
    task: 'Delay receiving Old Age Security',
    icon: faClockRotateLeft,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/vupi-vupi/delay-oas-pension.action',
  },
  CppContributionTask: {
    task: 'View my contributions',
    icon: faHandHoldingDollar,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/socv-vecc/socv/earnings-contributions',
  },
  TaxDeductionsTask: {
    task: 'My tax deductions',
    icon: faFileLines,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/vupi-vupi/view-tax-deduction.action',
  },
  GiveConsentTask: {
    task: 'Give consent for someone to communicate on my behalf',
    icon: faUserCheck,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/vupi-vupi/view-consent-to-communicate.action',
  },
  TaxSlipT4aAndNr4Task: {
    task: 'View tax slips, T4A and NR4',
    icon: faReceipt,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/tiso-frfd/tax-slip',
  },
  UploadMyDocuments: {
    task: 'Upload my documents',
    icon: faFileImport,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/cppd-rpci/doc-upload',
  },
  ApplyForCppDisabilityBenefits: {
    task: 'Apply for Canada Pension Plan Disability Benefits',
    icon: faStamp,
    link: '/dashboard',
  },
  ApplyForCppRetirementPensions: {
    task: 'Apply for Canada Pension Plan Retirement Pensions',
    icon: faStamp,
    link: '/dashboard',
  },
  EstimateMyMonthlyCppBenefits: {
    task: 'Estimate my monthly CPP Benefits',
    icon: faCalculator,
    link: '/dashboard',
  },
  ViewMyCppContributions: {
    task: 'View my CPP Contributions',
    icon: faHandHoldingDollar,
    link: '/dashboard',
  },
  ApplyForCppDeathBenefits: {
    task: 'Apply for Canada Pension Plan Death Benefits',
    icon: faStamp,
    link: '/dashboard',
  },
  ApplyForGuranteedIncomeSupplement: {
    task: 'Apply For Guranteed Income Supplement',
    icon: faStamp,
    link: '/dashboard',
  },
  ApplyForCppSurvivorsPensionAndChildrensBenefit: {
    task: "Apply For Canada Pension Plan Survivor's Pension and Child(ren)'s Benefit",
    icon: faStamp,
    link: '/dashboard',
  },
  ApplyForOldAgeSecurity: {
    task: 'Apply For Old Age Security',
    icon: faStamp,
    link: '/dashboard',
  },
  RequestAReview: {
    task: 'Request a review of a decision',
    icon: faComments,
    link: '/dashboard',
  },
  // ei tasks
  EiStatusUpdateTask: {
    task: 'View my status and messages',
    icon: faEnvelopeOpenText,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/home-accueil/ei-correspondence',
  },
  CompleteInsuranceReportTask: {
    task: 'Complete my report',
    icon: faPenSquare,
    link: 'https://www.canada.ca/en/services/benefits/ei/employment-insurance-reporting.html#Internet-Reporting-Service',
  },
  ViewPaymentInfo: {
    task: 'View my past payments',
    icon: faDollarSign,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/ei-ae/meiio-mraed/Pages/MyPayments.aspx?prov=6',
  },
  AccessCode: {
    task: 'Get my access code',
    icon: faKey,
    link: '/dashboard',
  },
  SubmitDocuments: {
    task: 'Submit documents',
    icon: faFileImport,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/home-accueil/ei-doc-upload-instruction',
  },
  ViewDocuments: {
    task: 'View my documents',
    icon: faFolderOpen,
    link: 'https://srv136.services.gc.ca/msca-mdsc/eq-qe/proxy/index/321',
  },
  ViewLatestClaimTask: {
    task: 'View my latest claim',
    icon: faFileSignature,
    link: '',
  },
  ViewPastClaimsTask: {
    task: 'View my past claims',
    icon: faFileInvoiceDollar,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/ei-ae/meiio-mraed/Pages/MyPastClaims.aspx?prov=6',
  },
  SubmitEformsTask: {
    task: 'Submit eForms',
    icon: faLaptopFile,
    link: 'https://srv136.services.gc.ca/msca-mdsc/eq-qe/proxy/index/256',
  },
  RegisterForAlerts: {
    task: 'Register for alert me',
    icon: faPersonCircleExclamation,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/home-accueil/alert-me/confirm?action=confirm&return=ei-landing',
  },
  RecordOfEmployment: {
    task: 'View my Records of Employment',
    icon: faFileContract,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/ei-ae/meiio-mraed/Pages/MyRoeList.aspx?prov=6',
  },
  ReportMistake: {
    task: 'Report a mistake',
    icon: faFileCircleExclamation,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/ei-ae/meiio-mraed/Pages/MyMessages.aspx?mt=3&prov=6',
  },
  TaxSlipT4eTask: {
    task: 'View tax slips, T4E',
    icon: faReceipt,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/tiso-frfd/tax-slip',
  },
  ViewPaymentInfoIconWhite: {
    task: 'View my past payments',
    icon: faDollarSign,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/ei-ae/meiio-mraed/Pages/MyPayments.aspx?prov=6',
  },
  //Seb tasks
  ViewAgreementStatusDetails: {
    task: 'View my agreement status details',
    icon: faFileContract,
    link: 'https://srv136.services.gc.ca/msca-mdsc/eq-qe/proxy/index/321',
  },
}

export const BenefitTasks_FR = {
  // general tasks
  UpdateAccountInfoTask: {
    task: 'Mettre à jour les informations de mon compte',
    icon: faCircleUser,
    link: '/fr/profile',
  },
  TaxSlipTask: {
    task: "Consulter mes feuillets d'impôts",
    icon: faReceipt,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/tiso-frfd/tax-slip',
  },
  TaxSlipMailingTask: {
    task: "Options d’expédition des feuillets d'impôt",
    icon: faEnvelopeOpenText,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/tiso-frfd/mailing-option',
  },
  // oas cpp tasks
  AllPaymentsTask: {
    task: 'Consulter mes paiements',
    icon: faDollarSign,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/vupi-vupi/view-payment-information.action',
  },
  StatusUpdateTask: {
    task: '(FR)View my status and messages',
    icon: faQuestion,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/vmas-vemd/view-application-status.action',
  },
  RetirementIncomeTask: {
    task: 'Estimer mon revenue de retraite',
    icon: faCalculator,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/socv-vecc/socv/estimated-benefits',
  },
  ReconsiderationTask: {
    task: 'Faire une demande de révision',
    icon: faComments,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/reqr-demr/',
  },
  DelayOasPensionTask: {
    task: 'Reporter le début de ma pension',
    icon: faClockRotateLeft,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/vupi-vupi/delay-oas-pension.action',
  },
  CppContributionTask: {
    task: 'Consulter mes cotisations',
    icon: faHandHoldingDollar,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/socv-vecc/socv/earnings-contributions',
  },
  TaxDeductionsTask: {
    task: "Modifier ma retenue d'impôt",
    icon: faFileLines,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/vupi-vupi/view-tax-deduction.action',
  },
  GiveConsentTask: {
    task: 'Autoriser une personne à communiquer en mon nom',
    icon: faUserCheck,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/vupi-vupi/view-consent-to-communicate.action',
  },
  TaxSlipT4aAndNr4Task: {
    task: '(FR)View tax slips, T4A and NR4',
    icon: faReceipt,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/tiso-frfd/tax-slip',
  },
  UploadMyDocuments: {
    task: '(FR)Upload my documents',
    icon: faFileImport,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/cppd-rpci/doc-upload',
  },
  ApplyForCppDisabilityBenefits: {
    task: '(FR)Apply for Canada Pension Plan Disability Benefits',
    icon: faStamp,
    link: '/dashboard',
  },
  ApplyForCppRetirementPensions: {
    task: '(FR)Apply for Canada Pension Plan Retirement Pensions',
    icon: faStamp,
    link: '/dashboard',
  },
  EstimateMyMonthlyCppBenefits: {
    task: '(FR)Estimate my monthly CPP Benefits',
    icon: faCalculator,
    link: '/dashboard',
  },
  ViewMyCppContributions: {
    task: '(FR)View my CPP Contributions',
    icon: faHandHoldingDollar,
    link: '/dashboard',
  },
  ApplyForCppDeathBenefits: {
    task: '(FR)Apply for Canada Pension Plan Death Benefits',
    icon: faStamp,
    link: '/dashboard',
  },
  ApplyForGuranteedIncomeSupplement: {
    task: '(FR)Apply For Guranteed Income Supplement',
    icon: faStamp,
    link: '/dashboard',
  },
  ApplyForCppSurvivorsPensionAndChildrensBenefit: {
    task: "(FR)Apply For Canada Pension Plan Survivor's Pension and Child(ren)'s Benefit",
    icon: faStamp,
    link: '/dashboard',
  },
  ApplyForOldAgeSecurity: {
    task: '(FR)Apply For Old Age Security',
    icon: faStamp,
    link: '/dashboard',
  },
  RequestAReview: {
    task: '(FR)Request a review of a decision',
    icon: faComments,
    link: '/dashboard',
  },
  // ei tasks
  EiStatusUpdateTask: {
    task: '(FR)View my status and messages',
    icon: faEnvelopeOpenText,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/home-accueil/ei-correspondence',
  },
  CompleteInsuranceReportTask: {
    task: "Soumettre une déclarations de l'assurance-emploi",
    icon: faPenSquare,
    link: 'https://www.canada.ca/en/services/benefits/ei/employment-insurance-reporting.html#Internet-Reporting-Service',
  },
  ViewPaymentInfo: {
    task: 'Consulter mes paiements',
    icon: faDollarSign,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/ei-ae/meiio-mraed/Pages/MyPayments.aspx?prov=6',
  },
  AccessCode: {
    task: "Consulter mon code d'accès",
    icon: faKey,
    link: '/dashboard',
  },
  SubmitDocuments: {
    task: 'Soumettre des documents',
    icon: faFileImport,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/home-accueil/ei-doc-upload-instruction',
  },
  ViewDocuments: {
    task: 'Consulter mes documents',
    icon: faFolderOpen,
    link: 'https://srv136.services.gc.ca/msca-mdsc/eq-qe/proxy/index/321',
  },
  ViewLatestClaimTask: {
    task: 'Consulter ma dernière demande',
    icon: faFileSignature,
    link: '',
  },
  ViewPastClaimsTask: {
    task: 'Consulter mes demandes antérieures',
    icon: faFileInvoiceDollar,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/ei-ae/meiio-mraed/Pages/MyPastClaims.aspx?prov=6',
  },
  SubmitEformsTask: {
    task: 'Soumettre des formulaires électroniques',
    icon: faLaptopFile,
    link: 'https://srv136.services.gc.ca/msca-mdsc/eq-qe/proxy/index/256',
  },
  RegisterForAlerts: {
    task: "S'inscrire aux alertes",
    icon: faPersonCircleExclamation,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/home-accueil/alert-me/confirm?action=confirm&return=ei-landing',
  },
  RecordOfEmployment: {
    task: 'Consulter mes relevés d’emploi',
    icon: faFileContract,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/ei-ae/meiio-mraed/Pages/MyRoeList.aspx?prov=6',
  },
  ReportMistake: {
    task: 'Communiquer une erreur',
    icon: faFileCircleExclamation,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/ei-ae/meiio-mraed/Pages/MyMessages.aspx?mt=3&prov=6',
  },
  TaxSlipT4eTask: {
    task: '(FR)View tax slips, T4E',
    icon: faReceipt,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/tiso-frfd/tax-slip',
  },
  ViewPaymentInfoIconWhite: {
    task: 'Consulter mes paiements',
    icon: faDollarSign,
    link: 'https://srv136.services.gc.ca/sc/msca-mdsc/portal-portail/pro/ei-ae/meiio-mraed/Pages/MyPayments.aspx?prov=6',
  },
  //Seb tasks
  ViewAgreementStatusDetails: {
    task: '(FR)View my agreement status details',
    icon: faFileContract,
    link: 'https://srv136.services.gc.ca/msca-mdsc/eq-qe/proxy/index/321',
  },
}
