import React from 'react';
import AuthService from '../services/AuthService';
import {Welcome} from "./Welcome";

export const UserLogged = () => {
    const currentUser = AuthService.getCurrentUser();


    return (
        <div className="get-started-container">
            {currentUser ? (
                <Welcome /> ) : (
               <>
               <h1>User is logged in</h1>
               <h2>{currentUser}</h2>
               </>
            )}
        </div>
    );
};