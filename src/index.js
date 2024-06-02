import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1 > Sorrrrrrrry</h1>
  },
  {
    path: "/html",
    element: <Html/>,
    errorElement: <h1 > Sorrrrrrrry</h1>
  },
  {
    path: "/css",
    element: <Css/>,
    errorElement: <h1 > Sorrrrrrrry</h1>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
