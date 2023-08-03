import React from 'react';
import { LoginForm } from './auth/LoginForm';
import AuthService from '../services/AuthService';
import {Welcome} from "./Welcome";
import '../styles/GetStarted.css';


export const GetStarted = () => {
    const currentUser = AuthService.getCurrentUser();


    return (
        <div className="get-started-container">
            {currentUser ? (
                <Welcome /> ) : (
               <>
                <div>
                    <LoginForm classname="form-login"/>
                </div>
               </>
            )}
        </div>
    );
};