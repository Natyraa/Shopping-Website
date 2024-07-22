import styled from "styled-components";

export const StyledImg = styled.img`
width: 300px;
`
export const StyledImgDiv = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 400px;
 padding: 10px 0;
`
export const StyledProductList = styled.ul`
  list-style: none;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 10px grey;
  width: 320px;
`
export const StyledTextDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
font-size: 14px;
padding: 4px;
height: 50px;
`
export const StyleProducts = styled.div`
margin-top: 20px;
 display: flex;
 flex-wrap: wrap;
 gap: 10px;
 justify-content: center;
 align-items: center;
`
export const StyleButton = styled.button`
width: 100%;
cursor: pointer;
background:  #ffb84d;
border: none;
padding: 5px 0;
`
export const StyledSearch = styled.div`
display: flex;
padding: 10px;
border-bottom: 2px solid white;
gap: 20px;
margin-top: -5px;
`
export const StyledInput = styled.input`
padding: 10px 10px;
width: 20rem;
border-radius: 1rem;
&:focus {
 border:1px solid #ffb84d; 
 outline: 1px solid #ffb84d;
}
`
export const StyledSelect = styled.select`
padding: 10px 10px;
width: 20rem;
border-radius: 1rem;
`
export const StyledSearchIcon = styled.span`
background: lightgrey;
display: flex;
justify-content: center;
width: 40px;
border: 1px solid black;
cursor: pointer;
padding: 10px;
border-radius: 1rem;
border-bottom-left-radius: 0;
border-top-left-radius: 0;
margin-left: -61px;

`
