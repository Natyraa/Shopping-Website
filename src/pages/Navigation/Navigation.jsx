import React from "react";
import { Link, Outlet } from "react-router-dom";
import { StyledNavList  , StyledRightSection , StyledLeftSection , StyledLogin , StyledCartItem} from "./StyledNav";
import ShoppingCart from "../../components/assets/9183-shoppingcart.png";
import Logo from "../../components/assets/sa.png"
const Navigation = ({isLoggedIn , handleLogout , cartItems , incrementCartItems}) => {
  console.log(cartItems);
  return (
    <nav>
      <StyledNavList>
       <StyledLeftSection>
       <li>
          <Link to="/">
          <img style={{width: "60px" , marginTop: "-2px"}} src={Logo} alt={`${Logo} image`}></img>
          </Link>
        </li>
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
       </StyledLeftSection>

        <StyledRightSection>
        {isLoggedIn ? (
            <StyledLogin>
              <Link to="/" onClick={handleLogout}>
                Log Out
              </Link>
            </StyledLogin>
          ) : (
            <StyledLogin>
              <Link to="/login">Log in</Link>
            </StyledLogin>
          )}
          <li>
            <Link to="/card">
              <img style={{ width: "30px" }} src={ShoppingCart} alt="Shopping cart icon"></img>
              {cartItems > 0  && <StyledCartItem>{cartItems}</StyledCartItem>}
            </Link>
          </li>
        </StyledRightSection>
      </StyledNavList>
      <Outlet />
    </nav>
  );
};

export default Navigation;
