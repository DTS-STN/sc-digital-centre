import AEMService from './AEMServiceClass'

const aemServiceInstance = new AEMService(
  process.env.NEXT_CONTENT_API,
  process.env.NEXT_PUBLIC_BUILD_DATE
)

export default aemServiceInstance
