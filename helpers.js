function localizedPageLink(normalizedPageData, locale = 'en') {
  return locale === 'fr'
    ? `/fr/${normalizedPageData.name.fr}`
    : `/${normalizedPageData.name.en}`
}

function generatePageRewrite(normalizedPage) {
  return {
    source: normalizedPage.link.fr,
    destination: normalizedPage.link.en,
    locale: false,
  }
}

function findPageFromRoute(route, pages) {
  if (Object.entries(pages || {}).length) {
    const aemPageEntries = Object.entries(pages)
    for (const [pageId, { link }] of aemPageEntries) {
      if ([link.en, link.fr].includes(route)) return pages[pageId]
    }
  }
}

module.exports = {
  localizedPageLink,
  generatePageRewrite,
  findPageFromRoute,
}
