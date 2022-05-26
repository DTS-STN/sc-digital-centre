import CPPDUser1 from './user1/cppd.json'
import CPPDUser2 from './user2/cppd.json'
import EIUser1 from './user1/ei.json'
import EIUser2 from './user2/ei.json'
import CPPDefaultUser from './userDefault/cpp.json'

export const mockData = {
  default: {
    CPP: CPPDefaultUser,
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
    CPPD: undefined,
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
