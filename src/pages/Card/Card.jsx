import React from 'react'
import CardUser from '../../components/CardUser/CardUser'
const Card = ({cartItems , incrementCartItems , decrementCartItems}) => {
  return (
    <div>
      <CardUser cartItems={cartItems} incrementCartItems={incrementCartItems} decrementCartItems={decrementCartItems}/>
    </div>
  )
}

export default Card