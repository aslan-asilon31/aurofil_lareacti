import './bootstrap';
import '../css/app.css'

import React from 'react'

import ReactDOM from 'react-dom/client';        
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

// Visitor Route
import Home from './pages/visitor/Home'
import Detail from './pages/visitor/Detail'
import Checkout from './pages/visitor/Checkout'

// Auth Route
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

// Admin Route
import Dashboard from './pages/dashboard/DasH'


ReactDOM.createRoot(document.getElementById('app')).render(     
    
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/detail' element={<Detail/>} />
      <Route path='/checkout' element={<Checkout/>} />

       {/* Auth */}
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />

       {/* Admin Page */}
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
  </Router>
);