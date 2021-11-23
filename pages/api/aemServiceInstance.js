import AEMService from './AEMService'

const aemServiceInstance = new AEMService(
  process.env.NEXT_CONTENT_API,
  process.env.NEXT_PUBLIC_BUILD_DATE
)

export default aemServiceInstance
