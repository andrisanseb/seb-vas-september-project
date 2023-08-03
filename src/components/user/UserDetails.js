import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import '../../styles/UserDetails.css'

function UsersDetails() {
    const [user, setUser] = useState(false);
    const currentUser = AuthService.getCurrentUser();

    const { id } = useParams();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await fetch(`http://localhost:8080/users/${id}`);
            const data = await response.json();
            setUser(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="users-details-container">
            <h2 >{user.username.toUpperCase()}</h2>
            <p >{user.email.toUpperCase()}</p>
        </div>
    );
}

export default UsersDetails;