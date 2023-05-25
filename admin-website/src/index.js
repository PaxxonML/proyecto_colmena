import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import './index.css';
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
