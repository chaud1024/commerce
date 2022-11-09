import GoogleLogin from '../../constants/GoogleLogin'

const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GoogleLogin />
    </div>
  )
}

export default Login
