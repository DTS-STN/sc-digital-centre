import {
  BENEFIT_CODES,
  BENEFIT_TYPES,
  PROGRAM_CODES,
} from '../../contents/CodeTables'

export function getProgramBenefit(programCode) {
  let program = PROGRAM_CODES.filter(function (item) {
    if (item.code == programCode) {
      return item
    }
  })
  return program
}

export function getBenefitCode(benefitCode) {
  let benefit = BENEFIT_CODES.filter(function (item) {
    if (item.code == benefitCode) {
      return item
    }
  })
  return benefit
}

export function getBenefitType(benefitType) {
  let type = BENEFIT_TYPES.filter(function (item) {
    if (item.code == benefitType) {
      return item
    }
  })
  return type
}

export function formatDate(string) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(string).toLocaleDateString([], options)
}
