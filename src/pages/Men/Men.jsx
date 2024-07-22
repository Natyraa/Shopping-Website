import React from 'react'
import MenUser from "../../components/MenUser/MenUser"
const Men = ({cartItems , incrementCartItems}) => {
  return (
    <div><MenUser cartItems={cartItems} incrementCartItems={incrementCartItems}/></div>
  )
}

export default Men