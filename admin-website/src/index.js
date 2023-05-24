import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import './index.css';
import App from './app/App';
import LoginScreen from "./loginScreen/LoginScreen";
import DashboardComponent from "./Dashboard/DashboardComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginScreen/>,
    },
    {
        path: "/dashboard",
        element: <DashboardComponent/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
