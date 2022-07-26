import NextAuth from '@dts-stn/next-auth'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    {
      id: 'defaultProvider',
      name: 'Key Cloak',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      type: 'oauth',
      wellKnown: process.env.WELL_KNOWN,
      authorization: { params: { scope: 'openid email profile' } },
      idToken: true,
      checks: ['state'],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        }
      },
    },
    {
      id: 'ecasProvider',
      name: 'ECAS',
      clientId: process.env.CLIENT_ID,
      type: 'oauth',
      wellKnown: process.env.ECAS_WELL_KNOWN,
      authorization: {
        url: process.env.ECAS_AUTHORIZATION,
        params: {
          scope: 'openid profile',
        },
      },
      client: {
        token_endpoint_auth_method: 'private_key_jwt',
        introspection_endpoint_auth_method: 'private_key_jwt',
        id_token_encrypted_response_alg: 'RSA-OAEP-256',
        id_token_encrypted_response_enc: 'A256GCM',
        token_endpoint_auth_signing_alg: 'RS256',
        id_token_signed_response_alg: 'RS512',
      },
      jwks: {
        keys: [JSON.parse(process.env.AUTH_PRIVATE)],
      },
      userinfo: process.env.ECAS_USERINFO,
      idToken: true,
      checks: ['state', 'nonce'],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        }
      },
    },
  ],

  theme: {
    colorScheme: 'light',
  },
  session: { jwt: true },
  callbacks: {
    async jwt({ token }) {
      console.log('JWT callback...')
      token.userRole = 'admin'
      console.log(token)
      return token
    },
  },
  logger: {
    error(code, metadata) {
      console.log(code, metadata)
    },
    warn(code) {
      console.log(code)
    },
    debug(code, metadata) {
      console.log(code, metadata)
    },
  },
})
