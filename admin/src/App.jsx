import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  //backend url
  const url = "https://food-deliver-app-xb9t.onrender.com"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <SideBar/>
        {/* setting up routes */}
        <Routes>
          <Route path='/add' element={<Add url={url}/>}></Route>
          <Route path='/list' element={<List url={url}/>}></Route>
          <Route path='/orders' element={<Orders url={url}/>}></Route>
        </Routes>

      </div>
      
    </div>
  )
}

export default App
