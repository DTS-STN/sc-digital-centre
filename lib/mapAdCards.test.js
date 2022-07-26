import { determineAdCards } from './mapAdCards'
import { defaultDisplayFlags } from '../contents/BenefitAdvertisingCards'
import { StatusCodes } from '../constants/StatusCodes'
import { ProgramCodes } from '../constants/ProgramCodes'
import { TypeCodes } from '../constants/ProgramTypeCodes'

describe('Mapping Ad Cards', () => {
  function generateBenefit(programCode, statusCode, typeCode) {
    return {
      programCode: programCode,
      statusCode: statusCode,
      typeCode: typeCode,
      summaries: [],
    }
  }

  let adFlags = defaultDisplayFlags

  describe('EI Flag is affected by status', () => {
    beforeEach(() => {
      adFlags[ProgramCodes.EI][TypeCodes.EISickness] = true
    })

    it('EI - Status inactive sets EI flag to false', () => {
      const eiBenefit = generateBenefit(
        ProgramCodes.EI,
        StatusCodes.inactive,
        TypeCodes.EISickness
      )
      adFlags = determineAdCards(eiBenefit, adFlags)
      expect(adFlags[ProgramCodes.EI][TypeCodes.EISickness]).toEqual(false)
    })

    it('EI - Status In Payment keeps EI flag as true', () => {
      const eiBenefit = generateBenefit(
        ProgramCodes.EI,
        StatusCodes.inPayment,
        TypeCodes.EISickness
      )
      adFlags = determineAdCards(eiBenefit, adFlags)
      expect(adFlags[ProgramCodes.EI][TypeCodes.EISickness]).toEqual(true)
    })

    it('EI - Status Application Received keeps EI flag as true', () => {
      const eiBenefit = generateBenefit(
        ProgramCodes.EI,
        StatusCodes.applicationReceived,
        TypeCodes.EISickness
      )
      adFlags = determineAdCards(eiBenefit, adFlags)
      expect(adFlags[ProgramCodes.EI][TypeCodes.EISickness]).toEqual(true)
    })

    it('EI - Status Application Received keeps EI flag as true', () => {
      const eiBenefit = generateBenefit(
        ProgramCodes.EI,
        StatusCodes.decisionSent,
        TypeCodes.EISickness
      )
      adFlags = determineAdCards(eiBenefit, adFlags)
      expect(adFlags[ProgramCodes.EI][TypeCodes.EISickness]).toEqual(true)
    })

    it('EI - Status Exhausted keeps EI flag as true', () => {
      const eiBenefit = generateBenefit(
        ProgramCodes.EI,
        StatusCodes.exhausted,
        TypeCodes.EISickness
      )
      adFlags = determineAdCards(eiBenefit, adFlags)
      expect(adFlags[ProgramCodes.EI][TypeCodes.EISickness]).toEqual(true)
    })
  })

  it('GIS - Type GISAllowance sets flag CPP.CPPAllowance to false', () => {
    const gisBenefit = generateBenefit(
      ProgramCodes.GIS,
      StatusCodes.inPayment,
      TypeCodes.GISAllowance
    )
    adFlags = determineAdCards(gisBenefit, adFlags)
    expect(adFlags[ProgramCodes.CPP][TypeCodes.CPPAllowance]).toEqual(false)
  })

  it('GIS - Type GISAllowanceSurvivor sets flag CPP.CPPAllowance to false', () => {
    const gisBenefit = generateBenefit(
      ProgramCodes.GIS,
      StatusCodes.inPayment,
      TypeCodes.GISAllowanceSurvivor
    )
    adFlags = determineAdCards(gisBenefit, adFlags)
    expect(adFlags[ProgramCodes.CPP][TypeCodes.CPPAllowance]).toEqual(false)
  })

  it('CPP - Type CPPChild sets flag CPP.CPPChild to false', () => {
    const cppBenefit = generateBenefit(
      ProgramCodes.CPP,
      StatusCodes.inPayment,
      TypeCodes.CPPChild
    )
    adFlags = determineAdCards(cppBenefit, adFlags)
    expect(adFlags[ProgramCodes.CPP][TypeCodes.CPPChild]).toEqual(false)
  })

  it('CPP - Type CPPSurvivor sets flag CPP.CPPSurvivor to false', () => {
    const cppBenefit = generateBenefit(
      ProgramCodes.CPP,
      StatusCodes.inPayment,
      TypeCodes.CPPSurvivor
    )
    adFlags = determineAdCards(cppBenefit, adFlags)
    expect(adFlags[ProgramCodes.CPP][TypeCodes.CPPSurvivor]).toEqual(false)
  })

  it('CPP - Type CPPRetirement sets flag CPP.CPPRetirement to false', () => {
    const cppBenefit = generateBenefit(
      ProgramCodes.CPP,
      StatusCodes.inPayment,
      TypeCodes.CPPRetirement
    )
    adFlags = determineAdCards(cppBenefit, adFlags)
    expect(adFlags[ProgramCodes.CPP][TypeCodes.CPPRetirement]).toEqual(false)
  })

  it('CPPD - Type CPPDisability sets flag CPPD to false', () => {
    const cppdBenefit = generateBenefit(
      ProgramCodes.CPPD,
      StatusCodes.inPayment,
      TypeCodes.CPPDisability
    )
    adFlags = determineAdCards(cppdBenefit, adFlags)
    expect(adFlags[ProgramCodes.CPPD][TypeCodes.CPPDisability]).toEqual(false)
  })

  it('OAS - Type OASRetirement sets flag OAS to false', () => {
    const oasBenefit = generateBenefit(
      ProgramCodes.OAS,
      StatusCodes.inPayment,
      TypeCodes.OASRetirement
    )
    adFlags = determineAdCards(oasBenefit, adFlags)
    expect(adFlags[ProgramCodes.OAS][TypeCodes.OASRetirement]).toEqual(false)
  })

  it('GIS - Type GISRetirement sets flag GIS to false', () => {
    const gisBenefit = generateBenefit(
      ProgramCodes.GIS,
      StatusCodes.inPayment,
      TypeCodes.GISRetirement
    )
    adFlags = determineAdCards(gisBenefit, adFlags)
    expect(adFlags[ProgramCodes.GIS][TypeCodes.GISRetirement]).toEqual(false)
  })
})
