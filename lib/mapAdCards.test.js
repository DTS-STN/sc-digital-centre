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

  let adCards
  beforeEach(() => {
    //Deep copy the default flags to reset flags each test run
    adCards = { ...defaultDisplayFlags }
  })

  it('EI - Status inactive sets EI flag to false', () => {
    const eiBenefit = generateBenefit(
      ProgramCodes.EI,
      StatusCodes.inactive,
      TypeCodes.EISickness
    )
    determineAdCards(eiBenefit, adCards)
    expect(adCards.EI).toEqual(false)
  })

  it('EI - All statuses except inactive keeps EI flag as true', () => {
    Object.entries(StatusCodes).forEach(([statusCode, statusString]) => {
      if (statusCode !== 'inactive' || statusString !== StatusCodes.inactive) {
        const eiBenefit = generateBenefit(
          ProgramCodes.EI,
          statusCode,
          TypeCodes.EISickness
        )
        determineAdCards(eiBenefit, adCards)
        expect(adCards.EI).toEqual(true)
      }
    })
  })

  it('GIS - Type GISAllowance sets flag CPPallowance_or_allowance_for_survivor to false', () => {
    const gisBenefit = generateBenefit(
      ProgramCodes.GIS,
      StatusCodes.inPayment,
      TypeCodes.GISAllowance
    )
    determineAdCards(gisBenefit, adCards)
    expect(adCards.CPPallowance_or_allowance_for_survivor).toEqual(false)
  })

  it('GIS - Type GISAllowanceSurvivor sets flag CPPallowance_or_allowance_for_survivor to false', () => {
    const gisBenefit = generateBenefit(
      ProgramCodes.GIS,
      StatusCodes.inPayment,
      TypeCodes.GISAllowanceSurvivor
    )
    determineAdCards(gisBenefit, adCards)
    expect(adCards.CPPallowance_or_allowance_for_survivor).toEqual(false)
  })

  it('CPP - Type CPPChild sets flag CPPchild_benefit_aged_18_25 to false', () => {
    const cppBenefit = generateBenefit(
      ProgramCodes.CPP,
      StatusCodes.inPayment,
      TypeCodes.CPPChild
    )
    determineAdCards(cppBenefit, adCards)
    expect(adCards.CPPchild_benefit_aged_18_25).toEqual(false)
  })

  it('CPP - Type CPPSurvivor sets flag CPPsurvivors_pension_and_childrens_benefits to false', () => {
    const cppBenefit = generateBenefit(
      ProgramCodes.CPP,
      StatusCodes.inPayment,
      TypeCodes.CPPSurvivor
    )
    determineAdCards(cppBenefit, adCards)
    expect(adCards.CPPsurvivors_pension_and_childrens_benefits).toEqual(false)
  })

  it('CPP - Type CPPRetirement sets flag CPP to false', () => {
    const cppBenefit = generateBenefit(
      ProgramCodes.CPP,
      StatusCodes.inPayment,
      TypeCodes.CPPRetirement
    )
    determineAdCards(cppBenefit, adCards)
    expect(adCards.CPP).toEqual(false)
  })

  it('CPPD - Type CPPDisability sets flag CPPD to false', () => {
    const cppdBenefit = generateBenefit(
      ProgramCodes.CPPD,
      StatusCodes.inPayment,
      TypeCodes.CPPDisability
    )
    determineAdCards(cppdBenefit, adCards)
    expect(adCards.CPPD).toEqual(false)
  })

  it('OAS - Type OASRetirement sets flag OAS to false', () => {
    const oasBenefit = generateBenefit(
      ProgramCodes.OAS,
      StatusCodes.inPayment,
      TypeCodes.OASRetirement
    )
    determineAdCards(oasBenefit, adCards)
    expect(adCards.OAS).toEqual(false)
  })

  it('GIS - Type GISRetirement sets flag GIS to false', () => {
    const gisBenefit = generateBenefit(
      ProgramCodes.CPP,
      StatusCodes.inPayment,
      TypeCodes.GISRetirement
    )
    determineAdCards(gisBenefit, adCards)
    expect(adCards.GIS).toEqual(false)
  })
})
