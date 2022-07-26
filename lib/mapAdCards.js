import { TypeCodes } from '../constants/ProgramTypeCodes'
import { StatusCodes } from '../constants/StatusCodes'
import { ProgramCodes } from '../constants/ProgramCodes'

export function determineAdCards(benefit, adFlags) {
  // determine what benefits to advertise
  switch (benefit.programCode) {
    case ProgramCodes.EI:
      if (
        benefit.statusCode === StatusCodes.inactive &&
        benefit.typeCode === TypeCodes.EISickness
      ) {
        adFlags[ProgramCodes.EI][TypeCodes.EISickness] = false
      }
      break
    case ProgramCodes.GIS:
      if (
        benefit.typeCode === TypeCodes.GISAllowance ||
        benefit.typeCode === TypeCodes.GISAllowanceSurvivor
      ) {
        adFlags[ProgramCodes.CPP][TypeCodes.CPPAllowance] = false
      } else if (benefit.typeCode === TypeCodes.GISRetirement) {
        adFlags[ProgramCodes.GIS][TypeCodes.GISRetirement] = false
      }
      break
    case ProgramCodes.CPP:
    case ProgramCodes.CPPD:
    case ProgramCodes.OAS:
      adFlags[benefit.programCode][benefit.typeCode] = false
    default:
      break
  }
  return adFlags
}
