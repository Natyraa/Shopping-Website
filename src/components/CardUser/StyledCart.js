import styled from "styled-components";
export const StyledCartDiv = styled.div`
padding: 10px;
margin: 20px auto;
font-weight: 500;
display: flex;
justify-content: space-evenly;
`
export const StyleProductsList =  styled.ul`
display: flex;
list-style: none;
justify-content: space-evenly;
align-items: center;
border: 1px solid black;
width: 1000px;
margin: 5px;
padding: 10px;
align-items: top;
box-shadow: 0 0 10px black;
`
export const StyledText = styled.p`
width: 200px;
display: flex;
font-weight: 500;


`
export const StyledX = styled.span`
cursor: pointer;
font-size: 20px;
&:hover {
background: black;
color: white;
padding: 5px;
border-radius: 50%;
}
`
export const StyledAddProducts = styled.div`
border: 1px solid black;
display: flex;
width: 60px;
align-items: center;
justify-content: space-between;

`
export const StyledSpan = styled.span`
border: 1px solid black;
cursor: pointer;
padding: 5px 5px;
width: 10px;
&:hover {
background: black;
color: white;
}
`
export const StyledHeading = styled.h1`
display: flex;
justify-content: center;
font-size: 30px;
`
export const StyledCheckOut = styled.div`
background: black;
color: white;
padding: 10px;
width: 300px;
margin-top: 10px;
height: fit-content;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 30px 10px;
gap: 10px;
`
export const StyledButton = styled.button`
background: #ffb84d;
cursor: pointer;
padding: 5px 10px;

`