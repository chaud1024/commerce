import React from 'react'
import GoogleLogin from '../../components/GoogleLogin'

const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '80vh',
      }}
    >
      <GoogleLogin />
    </div>
  )
}

export default Login
