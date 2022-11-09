import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { CLIENT_ID, CLIENT_SECRRET } from '../../../constants/googleAuth'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
