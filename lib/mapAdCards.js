import { TypeCodes } from '../constants/ProgramTypeCodes'

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
