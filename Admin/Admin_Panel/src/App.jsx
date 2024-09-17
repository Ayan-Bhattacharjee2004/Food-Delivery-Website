import React from 'react'
import Navber from './Components/Navber/Navber'
import Sidebar from './Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/ADD/Add'
import List from './Pages/List/List'
import Orders from './Pages/Orders/Orders'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url ="http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navber/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/Add" element={<Add url={url}/>}/>
          <Route path="/List" element ={<List url={url}/>}/>
          <Route path="/Orders" element = {<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
