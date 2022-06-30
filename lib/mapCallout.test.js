import { StatusCodes } from '../constants/StatusCodes'
import MapCallout from './mapCallout'
import enT from '../locales/en'
import { TypeCodes } from '../constants/ProgramTypeCodes'

describe('MapCallout', () => {
  it('maps inactive status', () => {
    const result = MapCallout(StatusCodes.inactive, null, enT)
    expect(result).toBeTruthy()
    expect(result.label).toBe(enT.status)
    expect(result.text).toBe(enT.DurationReached)
  })

  it('maps exhausted status', () => {
    const result = MapCallout(StatusCodes.exhausted, null, enT)
    expect(result).toBeTruthy()
    expect(result.label).toBe(enT.status)
    expect(result.text).toBe(enT.NotActive)
  })

  it('maps applicationReceived status', () => {
    const result = MapCallout(StatusCodes.applicationReceived, null, enT)
    expect(result).toBeTruthy()
    expect(result.label).toBe(enT.status)
    expect(result.text).toBe(enT.NotActive)
  })

  it('maps decisionSent status', () => {
    const result = MapCallout(StatusCodes.decisionSent, null, enT)
    expect(result).toBeTruthy()
    expect(result.label).toBe(enT.status)
    expect(result.text).toBe(enT.NotActive)
  })

  it('maps paymentHold status', () => {
    const result = MapCallout(
      StatusCodes.paymentHold,
      TypeCodes.CPPDisability,
      enT
    )
    expect(result).toBeTruthy()
    expect(result.label).toBe(enT.activeBenefit)
    expect(result.text).toBe(enT[TypeCodes.CPPDisability])
  })

  it('maps inPayment status', () => {
    const result = MapCallout(
      StatusCodes.inPayment,
      TypeCodes.CPPRetirement,
      enT
    )
    expect(result).toBeTruthy()
    expect(result.label).toBe(enT.activeBenefit)
    expect(result.text).toBe(enT[TypeCodes.CPPRetirement])
  })

  it('maps benefitUpdate status', () => {
    const result = MapCallout(
      StatusCodes.benefitUpdate,
      TypeCodes.CPPSurvivor,
      enT
    )
    expect(result).toBeTruthy()
    expect(result.label).toBe(enT.activeBenefit)
    expect(result.text).toBe(enT[TypeCodes.CPPSurvivor])
  })

  it('maps activeAgreement status', () => {
    const result = MapCallout(
      StatusCodes.activeAgreement,
      TypeCodes.SEBRegular,
      enT
    )
    expect(result).toBeTruthy()
    expect(result.label).toBe(enT.status)
    expect(result.text).toBe(enT[TypeCodes.SEBRegular])
  })
})
