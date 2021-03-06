import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const link = new HttpLink({
  uri: process.env.NEXT_CONTENT_API,
  headers: {
    'User-Agent': 'sc-digital-centre/0.0.1',
  },
})

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export default async function (AEMQuery) {
  return client
    .query({
      query: AEMQuery,
    })
    .catch((error) => {
      console.log(error)
    })
}
