import { GoogleLogin } from '@react-oauth/google'
const Google = () => {
  return (
    <div style={{ display: 'flex' }}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />
    </div>
  )
}

export default Google
