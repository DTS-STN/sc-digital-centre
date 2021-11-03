// import fs from 'fs'
// import path from 'path'

//
// Fetch ALL topics from local Data If no API is needed
//

export function getLocalBenefits() {
  // const fullPath = path.join(process.cwd(), "pages", "api", "topics.json");
  // const fileContents = fs.readFileSync(fullPath, "utf8");
  // const localData = JSON.parse(fileContents).topics;

  // return { localData };
  return { localData: [] }
}

//
// Fetch ALL topics from API when available
//

export async function getBenefitsAndServices(language) {
  const res = await fetch(`${process.env.NEXT_CONTENT_API}${language}/dc.json`)
  const error = res.ok ? false : res.status
  const apiData = res.ok ? await res.json() : null

  return { apiData, error }
}

export async function getAEMFragment(fragpath) {
  const res = await fetch(`${process.env.NEXT_CONTENT_API}${fragpath}`)
  const error = res.ok ? false : res.status
  const apiData = res.ok ? await res.json() : null

  return { apiData, error }
}

export async function getAEMElements(fragpath) {
  const { apiData, error } = await getAEMFragment(fragpath)
  const elements = apiData.properties.elements
  // console.log(apiData)
  return { elements, error }
}
