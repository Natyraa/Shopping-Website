import styled from "styled-components";

export const StyledDiv = styled.div`
border: 1px solid black;
margin: 2rem auto;
width: 500px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
box-shadow: 0 0 10px black;
`
export const StyledInputDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 8px;
`
export const StyledInput = styled.input`
background: #fcfcf4;
padding: 5px 5px;
border: none;
border-bottom: 3px solid #ffb84d;
margin-bottom: 10px;
`
export const StyledButton = styled.button`
width: 100%;
margin: 10px;
background: #ffb84d;;
border: none;
padding: 5px 0;
cursor: pointer;
`
export const StyledError = styled.p`
color: red;
`