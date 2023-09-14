import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PricePage from './pages/PricePage';
import ScriptsPage from './pages/ScriptsPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "price",
        element: <PricePage />,
    },
    {
        path: "scripts",
        element: <ScriptsPage />,
    },
    {
        path: "profile",
        element: <ProfilePage />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "registration",
        element: <RegistrationPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
