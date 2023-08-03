import React from "react";
import {useNavigate} from "react-router-dom";
import '../styles/BackButton.css';

export const BackButton = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <button className="backButton" onClick={handleGoBack}>⇦</button>
    )
}