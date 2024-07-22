import styled from "styled-components";
export const StyledForm = styled.div`
border: 1px solid black;
margin:  2rem auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 500px;
padding: 5px;
box-shadow: 0 0 10px black;
`
export const StyledInputDiv = styled.div`
display: flex;
flex-direction:  column;
width: 100%;

`
export const StyledButton = styled.button`
width: 100%;
margin: 10px;
background: #ffb84d;
border: none;
padding: 5px 0;
cursor: pointer;
`
export const StyledInput = styled.input`
background: #fcfcf4;
padding: 5px 5px;
border: none;
border-bottom: 3px solid #ffb84d;
margin-bottom: 10px;
`
export const StyledSpan = styled.span`
color: red;
text-decoration: underline;
cursor: pointer;
a {
text-decoration: none;
color: red;
}
`
export const StyledError = styled.p`
color: red;
`