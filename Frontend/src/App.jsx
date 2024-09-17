
import { Route, Routes, useSearchParams } from 'react-router-dom'
import './App.css'
import Navber from './components/Navber/Navber'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopUp from './components/LoginPopup/LoginPopUp'
import Verify from './pages/Verify/Verify'
import MyOrder from './pages/Myorders/MyOrder'
import ServerMonitor from './components/ServerMonitor.jsx';


function App() {
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {
      showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>
    }
      <div className="app">
        <Navber setShowLogin={setShowLogin}/>
        <ServerMonitor />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/PlaceOrder' element ={<PlaceOrder/>}/>
          <Route path='/verify' element = {<Verify/>}/>
          <Route path='/MyOrder' element = {<MyOrder/>}/>
         
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
