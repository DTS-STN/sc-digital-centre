import { useState, createContext } from 'react'

export const BenefitsContext = createContext()

const BenefitsProvider = ({ children }) => {
  const [benefits, setBenefits] = useState([])

  // We could do the fetch here, example.
  // const getBenefits = async () => {
  //   try {
  //     const res = await fetch()
  //     const allBenefits = await res.json()
  //     setBenefits(allBenefits)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // };

  // List of functions that will be returned
  const contextValues = {
    benefits,
    setBenefits,
    //getBenefits,
  }

  return (
    <BenefitsContext.Provider value={contextValues}>
      {children}
    </BenefitsContext.Provider>
  )
}

export default BenefitsProvider
