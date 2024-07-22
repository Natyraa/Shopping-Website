import React from 'react'
import SignUpUser from '../../components/SignUpUser/SignUpUser'
const SignUp = ({isLoggedIn , handleLogin}) => {
  return (
    <div><SignUpUser isLoggedIn={isLoggedIn} handleLogin={handleLogin}/></div>
  )
}

export default SignUp