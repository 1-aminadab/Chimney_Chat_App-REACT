import React from 'react'
import './App.css'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { BrowserRouter,Routes,Router, Route,} from 'react-router-dom'
import {  AuthProvider } from './context/AuthContext'
import PrivateRoute from './PrivateRoute'


const app = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
         <div className="app">
        <Routes>   
                <PrivateRoute exact  path="/" element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/signup' element={<Signup/>} />
          </Routes>
           </div>
      </BrowserRouter>

       
    </AuthProvider>

  )
}

export default app