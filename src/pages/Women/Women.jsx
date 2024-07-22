import React from 'react'
import WomenUser from "../../components/WomenUser/WomenUser"
const Women = ({cartItems , incrementCartItems }) => {
  return (
    <div><WomenUser cartItems={cartItems} incrementCartItems={incrementCartItems}/></div>
  )
}

export default Women