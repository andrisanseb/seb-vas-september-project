import AuthService from "../../services/AuthService";

export const Profile = () => {
    const currentUser = AuthService.getCurrentUser();


 return (
     <div>
        <h1>MY PROFILE</h1>
        <h3>{currentUser.username.toUpperCase()}</h3>
        <h3>{currentUser.email.toUpperCase()}</h3>
     </div>
 )}