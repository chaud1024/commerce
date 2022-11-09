import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { CLIENT_ID, CLIENT_SECRRET } from '../../../constants/googleAuth'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
