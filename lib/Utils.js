export function formatDate(string) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(string).toLocaleDateString([], options)
}
