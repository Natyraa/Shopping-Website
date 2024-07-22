import React from 'react'
import LoginUser from "../../components/LoginUser/LoginUser"
const Login = ({isLoggedin , handleLogin}) => {
  return (
    <div><LoginUser isLoggedIn={isLoggedin} handleLogin={handleLogin}/></div>
  )
}

export default Login