import { ProgramCodes } from '../constants/ProgramCodes'
import { TypeCodes } from '../constants/ProgramTypeCodes'

const applyIcon = '/images/dashboard/apply-for-benefit-icon.svg'
const estimateIcon = '/images/dashboard/estimate-retirement-income-icon.svg'

const defaultDisplayFlags = {
  [ProgramCodes.EI]: {
    [TypeCodes.EISickness]: true, //Always show, unless an EI inactive card is shown
  },
  [ProgramCodes.OAS]: {
    [TypeCodes.OASRetirement]: true, //Always, unless , any OAS card with the benefit type Old Age Security is shown
  },
  [ProgramCodes.GIS]: {
    [TypeCodes.GISRetirement]: true, //Always, unless, any GIS benefit card is shown with the benefit type Guaranteed Income Supplement
  },
  [ProgramCodes.CPPD]: {
    [TypeCodes.CPPDisability]: true, //Always, unless, any CPPD benefit card is shown with the benefit type CPPD
  },
  [ProgramCodes.CPP]: {
    [TypeCodes.CPPRetirement]: true, //Always, unless any CPP benefit card with the benefit type retirement is shown
    [TypeCodes.CPPChild]: true, //Always, unless, any CPP benefit card is shown with the benefit type Child's Benefit
    [TypeCodes.CPPSurvivor]: true, //Always, unless, any CPP benefit card is shown with the benefit type survivors
    [TypeCodes.CPPAllowance]: true, //Always, unless, any GIS benefit card is shown with the benefit type Allowace or Allowance for the Survivor
    [TypeCodes.CPPSharing]: true, //Always
    [TypeCodes.CPPCreditSplit]: true, //Always
    [TypeCodes.CPPChildRearing]: true, //Always
    [TypeCodes.CPPDeath]: true, //Always
  },
}

const APPLICATION_CARD_OAS = {
  benefitType: ProgramCodes.OAS,
  typeCode: TypeCodes.OASRetirement,
  benefitName: 'Old Age Security',
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html',
  applicationLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html',
  estimateLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html',
}

const APPLICATION_CARD_GIS = {
  benefitType: ProgramCodes.GIS,
  typeCode: TypeCodes.GISRetirement,
  benefitName: 'Guaranteed Income Supplement',
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement.html',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPPD = {
  benefitType: ProgramCodes.CPPD,
  typeCode: TypeCodes.CPPDisability,
  benefitName: 'Canada Pension Plan Disability',
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-disability-benefit.html',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_EI = {
  benefitType: ProgramCodes.EI,
  typeCode: TypeCodes.EISickness,
  benefitName: 'Employment Insurance',
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink: 'https://www.canada.ca/en/services/benefits/ei.html',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPP = {
  benefitType: ProgramCodes.CPP,
  typeCode: TypeCodes.CPPRetirement,
  benefitName: 'Canada Pension Plan',
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp.html',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPP_CHILDS_BENEFIT_AGED_18_25 = {
  benefitType: ProgramCodes.CPP,
  typeCode: TypeCodes.CPPChild,
  benefitSubType: 'child_benefit_aged_18_25',
  benefitName: 'Canada Pension Plan',
  benefitSubName: `Child's Benefit aged 18-25`, // Not used. It can be removed after API mapping
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink: '',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPP_SURVIVOR_PENSION_AND_CHILD_BENEFITS = {
  benefitType: ProgramCodes.CPP,
  typeCode: TypeCodes.CPPSurvivor,
  benefitSubType: 'survivors_pension_and_childrens_benefits',
  benefitName: 'Canada Pension Plan',
  benefitSubName: `Survivor's Pension and Child(ren)'s Benefits`, // Not used. It can be removed after API mapping
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink: '',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPP_ALLOWANCE_OR_ALLOWANCE_FOR_SURVIVOR = {
  benefitType: ProgramCodes.CPP,
  typeCode: TypeCodes.CPPAllowance,
  benefitSubType: 'allowance_or_allowance_for_survivor',
  benefitName: 'Canada Pension Plan',
  benefitSubName: `Allowance or Allowance for Survivor`, // Not used. It can be removed after API mapping
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink: '',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPP_PENSION_SHARING = {
  benefitType: ProgramCodes.CPP,
  typeCode: TypeCodes.CPPSharing,
  benefitSubType: 'pension_sharing',
  benefitName: 'Canada Pension Plan',
  benefitSubName: `Pension Sharing`, // Not used. It can be removed after API mapping
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink: '',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPP_CREADIT_SPLIT = {
  benefitType: ProgramCodes.CPP,
  typeCode: TypeCodes.CPPCreditSplit,
  benefitSubType: 'credit_split',
  benefitName: 'Canada Pension Plan',
  benefitSubName: `Credit Split`, // Not used. It can be removed after API mapping
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink: '',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPP_CHILD_REARING_PROVISION = {
  benefitType: ProgramCodes.CPP,
  typeCode: TypeCodes.CPPChildRearing,
  benefitSubType: 'child_rearing_provision',
  benefitName: 'Canada Pension Plan',
  benefitSubName: `Child-Rearing Provision`, // Not used. It can be removed after API mapping
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink: '',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPP_DEATH_BENEFIT = {
  benefitType: ProgramCodes.CPP,
  typeCode: TypeCodes.CPPDeath,
  benefitSubType: 'death_benefit',
  benefitName: 'Canada Pension Plan',
  benefitSubName: `Death Benefit`, // Not used. It can be removed after API mapping
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink: '',
  applicationLink: '',
  estimateLink: '',
}

function getAdvertisingCards() {
  return [
    APPLICATION_CARD_EI,
    APPLICATION_CARD_CPP,
    APPLICATION_CARD_OAS,
    APPLICATION_CARD_GIS,
    APPLICATION_CARD_CPPD,
    APPLICATION_CARD_CPP_CHILDS_BENEFIT_AGED_18_25,
    APPLICATION_CARD_CPP_SURVIVOR_PENSION_AND_CHILD_BENEFITS,
    APPLICATION_CARD_CPP_ALLOWANCE_OR_ALLOWANCE_FOR_SURVIVOR,
    APPLICATION_CARD_CPP_PENSION_SHARING,
    APPLICATION_CARD_CPP_CREADIT_SPLIT,
    APPLICATION_CARD_CPP_CHILD_REARING_PROVISION,
    APPLICATION_CARD_CPP_DEATH_BENEFIT,
  ]
}

module.exports = {
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
  getAdvertisingCards,
  defaultDisplayFlags,
}
