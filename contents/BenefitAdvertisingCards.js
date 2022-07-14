const applyIcon = '/images/dashboard/apply-for-benefit-icon.svg'
const estimateIcon = '/images/dashboard/estimate-retirement-income-icon.svg'
import { TypeCodes } from '../constants/ProgramTypeCodes'

const defaultDisplayFlags = {
  EI: true, //Always show, unless an EI inactive card is shown
  CPP: true, //Always, unless any CPP benefit card with the benefit type retirement is shown
  OAS: true, //Always, unless , any OAS card with the benefit type Old Age Security is shown
  GIS: true, //Always, unless, any GIS benefit card is shown with the benefit type Guaranteed Income Supplement
  CPPD: true, //Always, unless, any CPPD benefit card is shown with the benefit type CPPD
  CPPchild_benefit_aged_18_25: true, //Always, unless, any CPP benefit card is shown with the benefit type Child's Benefit
  CPPsurvivors_pension_and_childrens_benefits: true, //Always, unless, any CPP benefit card is shown with the benefit type survivors
  CPPallowance_or_allowance_for_survivor: true, //Always, unless, any GIS benefit card is shown with the benefit type Allowace or Allowance for the Survivor
  CPPpension_sharing: true, //Always
  CPPcredit_split: true, //Always
  CPPchild_rearing_provision: true, //Always
  CPPdeath_benefit: true, //Always
}

function mapTypeCodesToFlags(typeCode) {
  switch (typeCode) {
    case TypeCodes.EISickness:
      return 'EI'
    case TypeCodes.CPPRetirement:
      return 'CPP'
    case TypeCodes.GISRetirement:
      return 'GIS'
    case TypeCodes.OASRetirement:
      return 'OAS'
    case TypeCodes.CPPDisability:
      return 'CPPD'
    case TypeCodes.CPPChild:
      return 'CPPchild_benefit_aged_18_25'
    case TypeCodes.CPPSurvivor:
      return 'CPPsurvivors_pension_and_childrens_benefits'
  }
}

const APPLICATION_CARD_OAS = {
  benefitType: 'OAS',
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
  benefitType: 'GIS',
  benefitName: 'Guaranteed Income Supplement',
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement.html',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPPD = {
  benefitType: 'CPPD',
  benefitName: 'Canada Pension Plan Disability',
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-disability-benefit.html',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_EI = {
  benefitType: 'EI',
  benefitName: 'Employment Insurance',
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink: 'https://www.canada.ca/en/services/benefits/ei.html',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPP = {
  benefitType: 'CPP',
  benefitName: 'Canada Pension Plan',
  applyIcon: applyIcon,
  estimateIcon: estimateIcon,
  learnMoreLink:
    'https://www.canada.ca/en/services/benefits/publicpensions/cpp.html',
  applicationLink: '',
  estimateLink: '',
}

const APPLICATION_CARD_CPP_CHILDS_BENEFIT_AGED_18_25 = {
  benefitType: 'CPP',
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
  benefitType: 'CPP',
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
  benefitType: 'CPP',
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
  benefitType: 'CPP',
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
  benefitType: 'CPP',
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
  benefitType: 'CPP',
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
  benefitType: 'CPP',
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
  mapTypeCodesToFlags,
}
