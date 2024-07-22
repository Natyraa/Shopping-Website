import styled , {keyframes} from "styled-components";
export const StyledNavList = styled.ul`
  
  display: flex;
   gap: 20px;
   justify-content: space-between;
   flex-wrap: wrap;
   font-size: 16px;
   color: white;
   font-weight: 400;
   list-style: none;;
   background-color: #28282B;
   padding: 15px 0;
   transition: .2s;
   margin-bottom: 10px;
   a {
   text-decoration: none;
   color: inherit}
   &:hover {
   opacity: 0.9;}
   li {
    
   }
`
export const StyledLeftSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-left: 20px;
 
`
export const StyledRightSection = styled.div`
display: flex;
ustify-content: center;
gap: 30px;
margin-right: 30px;
`
export const StyledLogin = styled.li`
background: white;
color: black;
padding: 3px 20px;
border-radius: 10px;
font-weight: 500;
cursor: pointer;
&:hover {
 opacity: 0.8;

}`
const slideFromTop = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const StyledCartItem = styled.span`
background: red;
color: white;
font-weight: 500;
padding: 0 5px;
border-radius: 50%;
position: absolute;
top: 10px;
right: 20px;
animation: ${slideFromTop} 0.3s ease-out;
`