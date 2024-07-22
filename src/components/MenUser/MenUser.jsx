import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useGetProducts from '../../hooks/useGetProducts'
import { StyledImg ,StyledProductList , StyleProducts , StyleButton , StyledImgDiv , StyledTextDiv , StyledSearch , StyledInput , StyledSelect , StyledSearchIcon } from '../HomeUser/StyledHome'
import { FaSearch } from 'react-icons/fa'
const MenUser = ({cartItems , incrementCartItems}) => {
  const {
    products ,
    loading ,
    error ,
    filteredProducts , 
    sortedProducts , 
    term , 
    setTerm,
    selectValue , 
    setSelectValue
   } = useGetProducts("http://localhost:3000/posts" , "men")
   const [cart , setCart] = useState([])
   const handleAdd = async (index) => {
    try {
      const selectedProduct = {...products[index]}
      const newId = uuidv4()
      
      selectedProduct.id = newId
      console.log(selectedProduct);
      const response = await fetch("http://localhost:3000/cart" , {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...selectedProduct })
      }) 
      if (!response.ok) {
        throw new Error("Failed to add product to cart")
      }
      const data = await response.json()
      setCart([...cart ,selectedProduct])
      incrementCartItems()
    } catch (error) {
      console.log(error);
    } 
  }
   if (error) return <h1>{error}</h1>
if (loading) return <h1>Loading...</h1>
  return (
    <div>
       <StyledSearch>
        <div style={{display: "flex"}}>
        <StyledInput type="text" placeholder='Search Products' value={term} onChange={(e) => setTerm(e.target.value)}/> 
        <StyledSearchIcon ><FaSearch/></StyledSearchIcon>
        </div>
       <StyledSelect value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
        <option value="price-ascending">By price ascending</option>
        <option value="price-descending">By price descending</option>
        <option value="reviews">Reviews</option>
       </StyledSelect>
      </StyledSearch>
       <StyleProducts>
      {sortedProducts.map(({id , image , productName , price } , index) => {
        return (
          <StyledProductList key={id}>
       <StyledImgDiv>   <li><StyledImg src={image} alt={`${productName} image`}></StyledImg></li></StyledImgDiv>
       <StyledTextDiv>
       <li>{productName}</li>
       <li style={{fontWeight: "500"}}>${price}</li>
        </StyledTextDiv>
          <StyleButton onClick={() => handleAdd(index)}>Add To Cart</StyleButton>
        </StyledProductList>
        
        )
      })}
     
    </StyleProducts>
    </div>
  )
}

export default MenUser