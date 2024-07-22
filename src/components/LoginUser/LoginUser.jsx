import React, { useEffect, useState } from "react";
import {
  StyledForm,
  StyledInputDiv,
  StyledButton,
  StyledInput,
  StyledSpan,
  StyledError
} from "./CustomLogin";
import { Link  , useNavigate} from "react-router-dom";
const LoginUser = ({isLoggedIn , handleLogin}) => {
  const navigate = useNavigate()
  const [loginData , setLoginData] = useState({
    email: "",
    password: "",
  })
  const [users , setUsers] = useState([])
  const [errors , setErrors] = useState({})
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users" , {
        method: "GET"
      })
      if (!response.ok) {
        throw new Error("Failed to fetch Users")
      } 
      const data = await response.json()
      setUsers(data)
    }
    catch (error) {
      console.log('Errors fetching users ');
    }
  }
  useEffect(() => {
    getUsers()
  } ,[])
  const validateData = () => {
    const errors = {}
    if (!loginData.email.trim()) {
      errors.email = "Email is required"
    } else if (users.some((user) => user.email !==  loginData.email)) {
      errors.email = "No acount with this email address was found"
    }
    if (!loginData.password.trim()) {
      errors.password = "Password is required"
    } else {
      const user = users.find((user) => user.email === loginData.email) 
      if (user && user.password !== loginData.password) {
        errors.password = "Password is incorrect"
      }
    }

    return errors
  }
  const handleSubmit = () => {
    const errorsFound = validateData();
    setErrors(errorsFound)
    const authenticateUser = users.find((user) => user.email === loginData.email && user.password === loginData.password)

    if (authenticateUser) {
      
      console.log("User authenticated" , authenticateUser);
      handleLogin()
      navigate('/') 
    } else {
      console.log('User failed to authenticate');
    }
  }
  return (
    <StyledForm>
      <h1>Log In</h1>
      <StyledInputDiv>
        <label>Email:</label>
        <StyledInput type="text" value={loginData.email} onChange={(e) => setLoginData({...loginData,email : e.target.value})}/>
        {errors.email && <StyledError>{errors.email}</StyledError>}
      </StyledInputDiv>
      <StyledInputDiv>
        <label>Password:</label>
        <StyledInput type="password"  value={loginData.password} onChange={(e) => setLoginData({...loginData,password : e.target.value})}/>
        {errors.password && <StyledError>{errors.password}</StyledError>}
      </StyledInputDiv>
      <p>
        Don't have an account ?{" "}
        <StyledSpan>
          <Link to="/signup">Sign up here</Link>
        </StyledSpan>
      </p>
      <StyledButton onClick={handleSubmit}>Submit</StyledButton>
    </StyledForm>
  );
};

export default LoginUser;
