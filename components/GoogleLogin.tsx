import { useSession, signIn, signOut } from 'next-auth/react'
import Button from './Button'

export default function GoogleLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <p>
          Signed in as {session.user?.email} <br />
        </p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    )
  }
  return (
    <div>
      <p>
        Not signed in <br />
      </p>
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
  )
}
