import React, { useState, useEffect } from "react";
import {
  StyledCartDiv,
  StyleProductsList,
  StyledText,
  StyledX,
  StyledAddProducts,
  StyledSpan,
  StyledHeading ,
  StyledCheckOut , 
  StyledButton
} from "./StyledCart";
import { FaX } from "react-icons/fa6";
const CardUser = ({cartItems , incrementCartItems , decrementCartItems}) => {
  const [cart, setCart] = useState([]);
  const getCartProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/cart`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch cart products");
      }
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCartProducts();
  }, []);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      
      getCartProducts();
      decrementCartItems()
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  const getTotalPrice = () => {
    const getPrice = cart.map((cart) => +cart.price)
    const totalPrice = getPrice.reduce((a , b) => a+b)
    return totalPrice.toFixed(2);
  }
  const getTaxes = () => {
    const getTax = cart.map((cart) => (+cart.price /100 )* 10)
    const totalTax = getTax.reduce((a , b) => a+ b)
    return totalTax.toFixed(2)
  }
  return (
    <div>
      {cart.length === 0 ? (
        <StyledHeading>You cart is empty</StyledHeading>
      ) : (
        <StyledCartDiv>
          <div>
            <StyledHeading>
              Shopping Bag
            </StyledHeading>
            {cart.map(({ id, image, productName, price }, index) => {
              return (
                <StyleProductsList key={id}>
                  <li onClick={() => handleDelete(id)}>
                    {" "}
                    <StyledX>
                      <FaX />
                    </StyledX>
                  </li>
                  <li>
                    <img style={{ width: "120px" }} src={image} alt={`${productName} image`}></img>
                  </li>
                  <li>
                    <StyledText>{productName}</StyledText>
                  </li>
                  <li>
                    <StyledAddProducts>
                      <StyledSpan>+</StyledSpan>0<StyledSpan>-</StyledSpan>
                    </StyledAddProducts>
                  </li>
                  <li>${price}</li>
                </StyleProductsList>
              );
            })}
          </div>
          <StyledCheckOut >
            <h1>Summary</h1>
            <p >Total price: ${getTotalPrice()}</p>
            <p>SHIPPING & HANDLING: FREE</p>
            <p>DUTIES & TAXES: ${getTaxes()}</p>
            <StyledButton>Go to checkout</StyledButton>
          </StyledCheckOut>
        </StyledCartDiv>
      )}
    </div>
  );
};

export default CardUser;
