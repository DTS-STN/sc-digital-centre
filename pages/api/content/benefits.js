const benefits = [{ id: 'oas' }, { id: 'gis' }, { id: 'ei' }]

export default function handler(req, res) {
  // Get data from AEM
  if (!benefits) {
    //benefits = getBenefitsFromAEM()
  }
  res.status(200).json(benefits)
}
