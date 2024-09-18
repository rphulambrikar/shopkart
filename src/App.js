// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './components/Login';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Order from './components/Order';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./components/Home"
import "./App.css"
import authReducer from './store'; // Import your reducer

const App = () => (
  <div className='main'>
  <Router>
    <Navbar />
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/payment" element={<ProtectedRoute element={<Payment/>} />} />
          <Route path="/order" element={<ProtectedRoute element={<Order />} />} />
          <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    <Footer />
  </Router>
  </div>
);

export default App;