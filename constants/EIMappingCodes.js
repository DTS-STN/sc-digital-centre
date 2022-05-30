import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const EITypes = [
  {
    value: 1,
    type: TypeCodes.EIUnknown,
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
    status: StatusCodes.exahusted,
  },
  {
    value: 3437,
    status: StatusCodes.inactive,
  },
]
