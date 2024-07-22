import React , {useState } from 'react'
import { StyledDiv , StyledInputDiv , StyledInput , StyledButton , StyledError } from './CustomSignUp'
import { useNavigate } from 'react-router-dom'

const SignUpUser = ({isLoggedIn , handleLogin}) => {
  const navigate = useNavigate()
  const [formData , setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassowrd: "",
  })
  const [errors , setErrors] = useState({})
  const [users , setUsers] = useState([])
  const [error , setError] = useState(null)
  const [loading , setLoading] = useState(false)
  const handleInput = (e) => {
    setFormData({...formData,[e.target.name] : e.target.value})
  }
  const validateData = () => {
    const errors = {};
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = 
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex =   /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?.]{8,20}$/;
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required"
    } else if (!nameRegex.test(formData.firstName)) {
      errors.firstName = "First name is not valid"
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required"
    } else if (!nameRegex.test(formData.lastName)) {
      errors.lastName = "Last name is not valid"
    } 
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email is not valid"
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required"
    } else if (!passwordRegex.test(formData.password)) {
      errors.password = "Email must containt at least 8 characters , one uppercase letter , one number and one special character"
    }
    if (!formData.confirmPassowrd.trim()) {
      errors.confirmPassowrd = "Confirm Password is required"
    } else if (formData.password !== formData.confirmPassowrd) {
      errors.confirmPassowrd = "Password and Confirm Password must be identical"
    }
    return errors;
  }
  const handleSignup = async () => {
    const errorsFound = validateData();
    setErrors(errorsFound)
    console.log(errorsFound);
      if (Object.keys(errorsFound).length === 0) {
        try {
          setLoading(true)
          const response = await fetch("http://localhost:3000/users" , {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          if (!response.ok) {
            throw new Error("Failed to add users")
          }
          const data = await response.json()
          setUsers(data)
        } catch (error) {
          setError(error.message)
        }
        finally {
          setLoading(false)
        }
      }
      handleLogin()
      navigate('/')
  }
  return (
    <StyledDiv>
      <h1>Sign Up</h1>
      <StyledInputDiv>
        <label>First Name:</label>
        <StyledInput type="text" value={formData.firstName} name="firstName" onChange={handleInput} placeholder='John'/>
        {errors.firstName && <StyledError>{errors.firstName}</StyledError>}
      </StyledInputDiv>
      <StyledInputDiv>
        <label>Last Name:</label>
        <StyledInput type="text" value={formData.lastName} name="lastName" onChange={handleInput} placeholder='Doe'/>
        {errors.lastName && <StyledError>{errors.lastName}</StyledError>}
      </StyledInputDiv>
      <StyledInputDiv>
        <label>Email:</label>
        <StyledInput type="text" value={formData.email} name="email" onChange={handleInput} placeholder='Johndoe@gmail.com'/>
        {errors.email && <StyledError>{errors.email}</StyledError>}
      </StyledInputDiv>
      <StyledInputDiv>
        <label>Password:</label>
        <StyledInput type="password" value={formData.password} name="password" onChange={handleInput} placeholder='Password'/>
        {errors.password && <StyledError>{errors.password}</StyledError>}
      </StyledInputDiv>
      <StyledInputDiv>
        <label>Confirm Password:</label>
        <StyledInput type="password" value={formData.confirmPassowrd} name="confirmPassowrd" onChange={handleInput} placeholder='Confirm Password'/>
        {errors.confirmPassowrd && <StyledError>{errors.confirmPassowrd}</StyledError>}
      </StyledInputDiv>
      <StyledButton onClick={handleSignup}>Sign Up</StyledButton>
    </StyledDiv>
  )
}

export default SignUpUser