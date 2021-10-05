// import fs from 'fs'
// import path from 'path'

//
// Fetch ALL topics from local Data If no API is needed
//

export function getLocalTopics() {
  // const fullPath = path.join(process.cwd(), "pages", "api", "topics.json");
  // const fileContents = fs.readFileSync(fullPath, "utf8");
  // const localData = JSON.parse(fileContents).topics;

  // return { localData };
  return { localData: [] }
}

//
// Fetch ALL topics from API when available
//

export async function getTopics(language) {
  const res = await fetch(
    `${process.env.NEXT_CONTENT_API}${language}/lj-new-child.json?date=${process.env.NEXT_PUBLIC_BUILD_DATE}`
  )
  const error = res.ok ? false : res.statusCode
  const apiData = await res.json()

  return { apiData, error }
}
