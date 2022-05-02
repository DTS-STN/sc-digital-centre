import NextAuth from 'next-auth'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    */
    {
      id: 'customProvider',
      name: 'customProvider',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      type: 'oauth',
      wellKnown:
        'https://keycloak.dts-stn.com/auth/realms/dts-stn/.well-known/openid-configuration',
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
  ],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'admin'
      return token
    },
  },
})
