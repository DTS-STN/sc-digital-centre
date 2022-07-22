import { TypeCodes } from '../constants/ProgramTypeCodes'
import { StatusCodes } from '../constants/StatusCodes'
import { ProgramCodes } from '../constants/ProgramCodes'

export function determineAdCards(benefit, adFlags) {
  // determine what benefits to advertise
  switch (benefit.typeCode) {
    case TypeCodes.EISickness:
      if (
        benefit.statusCode === StatusCodes.inactive &&
        benefit.programCode === ProgramCodes.EI
      ) {
        adFlags.EI = false
      }
      break
    case TypeCodes.GISAllowance:
    case TypeCodes.GISAllowanceSurvivor:
      if (benefit.programCode === ProgramCodes.GIS) {
        adFlags.CPPallowance_or_allowance_for_survivor = false
      }
      break
    default:
      adFlags[mapTypeCodesToAdCards(benefit.typeCode)] = false
      break
  }
}

export function mapTypeCodesToAdCards(typeCode) {
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
