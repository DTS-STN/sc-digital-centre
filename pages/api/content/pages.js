const pages = [{ id: 'index' }, { id: 'home' }, { id: 'search' }]

export default function handler(req, res) {
  // Get data from AEM
  if (!pages) {
    //benefits = getPagesFromAEM()
  }
  res.status(200).json(pages)
}
