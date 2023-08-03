import React from 'react';
import AuthService from '../services/AuthService';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css';


export const Welcome = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <div className="welcome-container">
            <h2>WELCOME {currentUser && currentUser.username.toUpperCase()}.</h2>
            <div className="card-container">
                <div className="card-row">
                    <Link to="/my-profile" className="card">
                        <div className="card-content">MY PROFILE</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};