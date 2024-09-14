import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from "./components/Login";
import "./App.css"
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    
    <div className='main'>
      <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
      </Router>
    </div>
   
   
  )
}

export default App