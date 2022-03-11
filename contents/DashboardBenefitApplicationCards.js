import en from '../locales/en'
const t = en
const applyIcon = '/images/dashboard/apply-for-benefit-icon.svg'
const estimateIcon = '/images/dashboard/estimate-retirement-income-icon.svg'

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
  benefitName: 'Guranteed Income Supplement',
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

module.exports = {
  APPLICATION_CARD_OAS,
  APPLICATION_CARD_GIS,
  APPLICATION_CARD_CPPD,
  APPLICATION_CARD_EI,
  APPLICATION_CARD_CPP,
}
