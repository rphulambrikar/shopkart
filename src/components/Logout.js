
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' }); // Update Redux state
    navigate('/login'); // Redirect to login page
  };

  return (
    <button onClick={handleLogout} ><i className="fas fa-user"></i>Logout</button>
  );
};

export default Logout;
