import React from 'react'

import './App.css'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { AuthProvider } from './context/AuthContext'

const app = () => {
  return (
    <Router>
       <div className="app">
        
           {/* <Login /> */}
         <Signup /> 
        {/* <Home /> */}
        </div>
    </Router>
       
  )
}

export default app