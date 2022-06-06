import { TypeCodes } from './ProgramTypeCodes'
import { StatusCodes } from './StatusCodes'

export const GISTypes = [
  {
    value: 'GISBeneficial',
    type: TypeCodes.GISBeneficial,
  },
]

export const GISStatus = [
  {
    value: 'Active',
    status: StatusCodes.inPayment,
  },
  {
    value: 'Inactive',
    status: StatusCodes.inactive,
  },
  {
    value: 'Received',
    status: StatusCodes.applicationReceived,
  },
  {
    value: 'Decision',
    status: StatusCodes.decisionSent,
  },
  {
    value: 'Hold',
    status: StatusCodes.paymentHold,
  },
]
