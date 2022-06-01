import CPPDUser1 from './user1/cppd.json'
import CPPDUser2 from './user2/cppd.json'
import EIUser1 from './user1/ei.json'
import EIUser2 from './user2/ei.json'
import CPPUser3 from './user3/cpp.json'
import CPPDefaultUser from './userDefault/cpp.json'
import EIDefaultUser from './userDefault/ei.json'

export const mockData = {
  default: {
    CPP: CPPDefaultUser,
    EI: EIDefaultUser,
  },
  1: {
    CPPD: CPPDUser1,
    EI: EIUser1,
  },
  2: {
    CPPD: CPPDUser2,
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
