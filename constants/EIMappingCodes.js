import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const EITypes = [
  {
    value: 1,
    type: TypeCodes.EIUnknown,
  },
  {
    value: 2,
    type: TypeCodes.EISickness,
  },
]

export const EIStatus = [
  {
    value: 3433,
    status: StatusCodes.inPayment,
  },
  {
    value: 3434,
    status: StatusCodes.benefitUpdate,
  },
  {
    value: 3435,
    status: StatusCodes.applicationReceived,
  },
  {
    value: 3436,
    status: StatusCodes.exhausted,
  },
  {
    value: 3437,
    status: StatusCodes.inactive,
  },
]
