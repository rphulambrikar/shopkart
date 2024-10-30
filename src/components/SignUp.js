import React, { useState } from 'react';
import '../styles/Signup.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate password confirmation
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Prepare data to be sent to backend
        const userData = {
            name: formData.name,
            username: formData.email.split('@')[0], // Creating a username from the email
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            password: formData.password,
            cardDetails: {
                cardNumber: formData.cardNumber,
                expiryDate: formData.expiryDate,
                cvv: formData.cvv
            }
        };

        // Replace the URL with your backend endpoint
        const response = await fetch('https://your-backend-endpoint.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            console.log('User data saved successfully');
            navigate('/login'); // Navigate to a welcome page or dashboard
        } else {
            console.error('Error saving user data');
        }
    };

    return (
        <div className="container">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
                    <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn">Create your account</button>
            </form>
            <p className="footer-text">Already have an account? <Button onClick={() => navigate("/login")}>Sign In</Button></p>
        </div>
    );
};

export default SignUp;
