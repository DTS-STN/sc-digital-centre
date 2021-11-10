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
export async function getAEMFragments(fragpath) {
  const res = await fetch(
    `${process.env.NEXT_CONTENT_API}${fragpath}?date=${process.env.NEXT_PUBLIC_BUILD_DATE}`
  )
  const error = res.ok ? false : res.status
  const apiData = res.ok ? await res.json() : null

  return { apiData, error }
}

export async function getAEMElements(fragpath) {
  const { apiData, error } = await getAEMFragments(fragpath)
  const entities = apiData.entities
  const elements = entities.map((entity) => {
    return entity.properties.name
  })
  return { elements, error }
}
