// src/components/Register/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/Register.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle registration logic here (e.g., API call)
        axios.post("http://127.0.0.1:3001/signup", {name, email,password})
        .then((response) => {
            console.log(response)
            navigate("/")
        })
    };

    return (
        <div className="register">
            <div className="register-container">
                <h2>Create an Account</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
                <p className="login-link">
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;