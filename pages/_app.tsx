import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CLIENT_ID } from '../constants/googleAuth'
import Header from '../components/Header'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity },
    },
  })
  return (
    // <GoogleOAuthProvider clientId={`${process.env.CLIENT_ID}`}>
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <div className="px-36 ">
          <Header />
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </SessionProvider>
    // </GoogleOAuthProvider>
  )
}
