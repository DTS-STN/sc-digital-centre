import { useState, createContext } from 'react'
import { getAEMElements } from '../pages/api/getData'

export const BenefitsContext = createContext()

const BenefitsProvider = ({ children }) => {
  const [benefits, setBenefits] = useState([])

  // // We could do the fetch here, example.
  // const getBenefits = async () => {
  //   try {
  //     // The path will need to change
  //     const res = await getAEMElements('benefits/oas.json')
  //     if (!res.error) {
  //       setBenefits(res)
  //     }
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // // Fetch benefits and services on first load
  // getBenefits()
  // List of functions that will be returned
  const contextValues = {
    benefits,
    setBenefits,
    // getBenefits,
  }

  return (
    <BenefitsContext.Provider value={contextValues}>
      {children}
    </BenefitsContext.Provider>
  )
}

export default BenefitsProvider
