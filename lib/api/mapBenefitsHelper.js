export function FormatSummary(type, value, extra) {
  let benefitSummary = {
    type: type, // will define what header text to go with it and any links if applicable
    value: value, // a date or amount, defined by the type
  }
  //only add extra content if it exists
  if (extra) {
    benefitSummary.extra = extra //extra is additional text for display
  }
  return benefitSummary
}

export function MapBenefit(programCode, statusCode, typeCode, summaries) {
  if (!programCode || !typeCode || !statusCode)
    throw new Error(
      `Cannot match data. program:${programCode}, type:${typeCode}, status:${statusCode}`
    )
  const benefit = {
    programCode: programCode,
    statusCode: statusCode,
    typeCode: typeCode,
  }
  if (summaries) benefit.summaries = summaries

  return benefit
}
