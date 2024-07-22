import React from 'react'
import HomeUser from "../../components/HomeUser/HomeUser"
const Home = ({cartItems , incrementCartItems}) => {
  return (
    <div>
      <HomeUser cartItems={cartItems} incrementCartItems={incrementCartItems}/>
    </div>
  )
}

export default Home