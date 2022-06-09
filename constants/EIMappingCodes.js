import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const EITypes = {
  1: TypeCodes.EIUnknown,
  2: TypeCodes.EISickness,
}

export const EIStatus = {
  3433: StatusCodes.inPayment,
  3434: StatusCodes.benefitUpdate,
  3435: StatusCodes.applicationReceived,
  3436: StatusCodes.exhausted,
  3437: StatusCodes.inactive,
}
