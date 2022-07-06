import NextAuth from 'next-auth'
import crypto from 'crypto'

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
          nonce: crypto.randomBytes(16).toString('hex'),
        },
      },
      token: {
        url: process.env.ECAS_TOKEN,
        async request(context) {
          // context contains useful properties to help you make the request.
          const tokens = await makeTokenRequest(context)
          return { tokens }
        },
      },
      userinfo: process.env.ECAS_USERINFO,
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
  ],

  theme: {
    colorScheme: 'light',
  },
  session: { jwt: true },
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'admin'
      console.log(token)
      return token
    },
  },
})
