import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import "./App.css"
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    
    <div className='main'>
      <Navbar />
      <Home />
      <Footer />
    </div>
   
   
  )
}

export default App