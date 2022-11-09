import { useSession, signIn, signOut } from 'next-auth/react'
import Button from '../components/Button'

export default function GoogleLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }
  return (
    <div>
      <p>Not signed in</p>
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
  )
}
