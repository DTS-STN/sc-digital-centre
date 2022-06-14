import EIUser1 from './user1/ei.json'
import EIUser2 from './user2/ei.json'
import CPPUser3 from './user3/cpp.json'
import CPPUser4 from './user4/cpp.json'
import OASUser4 from './user4/oas.json'
import GISUser4 from './user4/gis.json'
import CPPDefaultUser from './userDefault/cpp.json'
import OASDefaultUser from './userDefault/oas.json'
import GISDefaultUser from './userDefault/gis.json'
import CPPDDefaultUser from './userDefault/cppd.json'
import EIDefaultUser from './userDefault/ei.json'
import SEBDefaultUser from './userDefault/seb.json'
import CPPTestResult from './tests/cpp.json'
import CPPDTestResult from './tests/cppd.json'
import EITestResult from './tests/ei.json'
import GISTestResult from './tests/gis.json'

export const mockData = {
  default: {
    CPP: CPPDefaultUser,
    OAS: OASDefaultUser,
    GIS: GISDefaultUser,
    CPPD: CPPDDefaultUser,
    EI: EIDefaultUser,
    SEB: SEBDefaultUser,
  },
  1: {
    CPPD: undefined,
    EI: EIUser1,
  },
  2: {
    CPPD: undefined,
    EI: EIUser2,
  },
  3: {
    CPP: CPPUser3,
    EI: undefined,
  },
  4: {
    CPPD: undefined,
    EI: undefined,
    CPP: CPPUser4,
    OAS: OASUser4,
    GIS: GISUser4,
  },
  5: {
    CPPD: undefined,
    EI: undefined,
  },
  test: {
    CPP: CPPTestResult,
    CPPD: CPPDTestResult,
    EI: EITestResult,
    GIS: GISTestResult,
  },
}
