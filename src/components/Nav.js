import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import AuthService from '../services/AuthService';
import '../styles/Nav.css';


export const NavBar = () => {
    const currentUser = AuthService.getCurrentUser();

    const handleLogout = () => {
        AuthService.logout();
    };

    return (
        <nav>
            <div className="navbar-container">
                <div className="navbar-left">
                    <NavLink to="/get-started">HOME</NavLink>
                </div>
                <div className="navbar-right">
                    {currentUser ? (
                        <div className="user-info">
                            <Link className="username" to="/my-profile">{currentUser.username.toUpperCase()}</Link>
                            <Link onClick={handleLogout} to="/get-started">LOGOUT</Link>
                        </div>
                    ) : (
                        <Link to="/login">LOGIN</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};