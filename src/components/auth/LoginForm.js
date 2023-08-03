import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Form.css'
import AuthService from "../../services/AuthService";


export const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const API_URL = 'http://localhost:5500/';

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        AuthService.login(username, password)
        navigate('/userlogged');

    };


    const handleSubmitOLD= async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(API_URL + 'login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(data));
                }
                navigate('/get-started');
            } else {
                throw new Error('Login failed.');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="form-container">
            <h2>USER LOGIN</h2>
            <form onSubmit={handleSubmitOLD}>
                <div className="form-group">
                    <label htmlFor="username">USERNAME</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">PASSWORD</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {error && <p>{error}</p>}
                <button type="submit">LOGIN</button>
            </form>
            <p>DON'T HAVE AN ACCOUNT YET?</p>
            <p><Link to="/register">CREATE AN ACCOUNT</Link></p>
        </div>
    );
};