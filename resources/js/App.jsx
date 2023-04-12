import './bootstrap';
import '../css/app.css'

import React from 'react'

import ReactDOM from 'react-dom/client';        
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/visitor/Home'

ReactDOM.createRoot(document.getElementById('app')).render(     
    
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  </Router>
);