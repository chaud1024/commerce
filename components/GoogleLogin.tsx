import { useSession, signIn, signOut } from 'next-auth/react'
import Button from './Button'

export default function GoogleLogin() {
  const { data: session } = useSession()
  return (
    <div>
      {session ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>
            Welecome back, {session.user?.email} <br />
          </p>
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      ) : (
        <div>
          <p>Not signed in</p>
          <Button onClick={() => signIn()}>Sign in</Button>
        </div>
      )}
    </div>
  )
}
