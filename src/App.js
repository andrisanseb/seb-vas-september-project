import './App.css';
import {Link, Navigate, Route, Router, Routes, useLocation, useNavigate} from "react-router-dom"
import AuthService from './services/AuthService';
import { NavBar } from './components/Nav';
import { BackButton } from './components/BackButton';
import { Logo } from './components/Logo';
import { GetStarted } from './components/GetStarted';
import Home from './components/Home';
import { Profile } from './components/user/Profile';
import { RegisterForm } from './components/auth/RegisterForm';
import { LoginForm } from './components/auth/LoginForm';
import { UserLogged } from './components/UserLogged';



export default function App() {
  const location = useLocation();
  const showNav = location.pathname !== '/';
  const showBack = location.pathname !== '/';
  const currentUser = AuthService.getCurrentUser();
  const navigate = useNavigate();

  const handleGoBack = () => {
      navigate(-1);
  }

  return (
    <>
        {showNav && (
            <header>
                <NavBar />
            </header>
        )}
        {showBack && (
            <div className="logo-back-button-container">
                <BackButton />
                <Logo />
            </div>
        )}
        <main>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/get-started"
                       element={<GetStarted/>} />
                <Route path="/login"
                       element={currentUser ? <Navigate to="/my-profile" /> : <LoginForm />}
                />
                <Route path="/my-profile"
                       element={currentUser ? (<Profile />) : (<GetStarted />)} />
                <Route path="/logout" element={<Navigate to="/" />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/userlogged" element={ <UserLogged />} />
            </Routes>
        </main>
    </>
);

}
