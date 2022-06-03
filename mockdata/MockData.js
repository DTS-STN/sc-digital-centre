import EIUser1 from './user1/ei.json'
import EIUser2 from './user2/ei.json'
import CPPUser3 from './user3/cpp.json'
import CPPDefaultUser from './userDefault/cpp.json'
import CPPDDefaultUser from './userDefault/cppd.json'
import EIDefaultUser from './userDefault/ei.json'
import SEBDefaultUser from './userDefault/seb.json'

export const mockData = {
  default: {
    CPP: CPPDefaultUser,
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
  },
  5: {
    CPPD: undefined,
    EI: undefined,
  },
}
