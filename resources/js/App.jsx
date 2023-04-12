import './bootstrap';
import '../css/app.css'

import React from 'react'

import ReactDOM from 'react-dom/client';        
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

// Visitor Route
import Home from './pages/visitor/Home'
import Detail from './pages/visitor/Detail'
import Checkout from './pages/visitor/Checkout'

ReactDOM.createRoot(document.getElementById('app')).render(     
    
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/detail' element={<Detail/>} />
      <Route path='/checkout' element={<Checkout/>} />
    </Routes>
  </Router>
);