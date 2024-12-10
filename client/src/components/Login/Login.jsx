// src/components/Login/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    // const handleLogin = async (email, password) => {
    //     try {
    //         const response = await axios.post("http://127.0.0.1:3001/login", { email, password });
    //         if (response.data.success) {
    //             const userId = response.data.userId; // Get userId from login response
    //             localStorage.setItem('userId', userId); // Store userId
    
    //             // Fetch user details to get the name
    //             const userResponse = await axios.get(`http://127.0.0.1:3001/user/${userId}`);
    //             localStorage.setItem('user', userResponse.data.name); // Store user name
    //             navigate('/'); // Redirect to home page
    
    //             // Redirect or update state as needed
    //         } else {
    //             // Handle login failure
    //             console.error(response.data.message);
    //         }
    //     } catch (error) {
    //         console.error("Login error:", error);
    //     }
    // };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3001/login', { email, password })
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                    localStorage.setItem('userId', response.data.userId); // Store userId in local storage
                    localStorage.setItem('user', response.data.name); // Store user email or name
                    navigate('/'); // Redirect to home page
                } else {
                    setError(response.data.message); // Set error message
                }
            })
            .catch(err => {
                console.error(err);
                setError('An error occurred. Please try again.'); // Set generic error message
            });
    };

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-card">
                    <h2>Login</h2>
                    {error && <p className="error">{error}</p>}
                    <form className="login-form" onSubmit={handleLogin}>
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
                        <button type="submit">Login</button>
                    </form>
                    <div className="signup-link">
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;