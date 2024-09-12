
import { useState } from 'react';
import './index.css';
import { Home , Navigation , Men , Women  , Login , Card , PageNotFound , SignUp , Footer } from './pages';
import { BrowserRouter , Route , Routes  } from 'react-router-dom';
function App() {
  const [cartItems  , setCartItems] = useState(0)
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  const handleLogin = () => setIsLoggedIn(true)
  
  const handleLogout = () => setIsLoggedIn(false)
  console.log(isLoggedIn);
  const incrementCartItems = () => setCartItems(prevCartItems => prevCartItems + 1)
  console.log(cartItems);
  const decrementCartItems = () => setCartItems(prevCartItems => prevCartItems - 1)
  return (
   <BrowserRouter>
   <Routes>
    <Route path="" element={<Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} cartItems={cartItems}/>} >
      <Route index path="/" element={<Home cartItems={cartItems} incrementCartItems={incrementCartItems}/>}  />
      <Route path="men" element={<Men cartItems={cartItems} incrementCartItems={incrementCartItems}/>}  />
      <Route path="women" element={<Women cartItems={cartItems} incrementCartItems={incrementCartItems}/>}  />
    
      <Route path="login/" element={<Login isLoggedIn={isLoggedIn} handleLogin={handleLogin}/>}/>
      <Route path="signup" element={<SignUp isLoggedIn={isLoggedIn} handleLogin={handleLogin} />} />
     
      <Route path="card" element={<Card cartItems={cartItems} incrementCartItems={incrementCartItems} decrementCartItems={decrementCartItems}/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Route>
   </Routes>
 
   
 
   </BrowserRouter>
  );
}

export default App;


